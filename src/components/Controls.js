import React, { useRef, useEffect } from 'react';
import * as Three from 'three';
import { useFrame, useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DeviceOrientationControls } from 'three/examples/jsm/controls/DeviceOrientationControls';

extend({ OrbitControls, DeviceOrientationControls });

const zee = new Three.Vector3(0, 0, 1);
const euler = new Three.Euler();
const q0 = new Three.Quaternion();
const q1 = new Three.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));

function setObjectQuaternion(quaternion, alpha, beta, gamma, orient) {
    // 'ZXY' for the device, but 'YXZ' for us
    euler.set(beta, alpha, -gamma, 'YXZ');

    // Orient the device
    quaternion.setFromEuler(euler);

    // camera looks out the back of the device, not the top
    quaternion.multiply(q1);

    // adjust for screen orientation
    quaternion.multiply(q0.setFromAxisAngle(zee, -orient));
}

function Quat2Angle(x, y, z, w) {
    let pitch, roll, yaw;

    const test = x * y + z * w;
    // singularity at north pole
    if (test > 0.499) {
        yaw = Math.atan2(x, w) * 2;
        pitch = Math.PI / 2;
        roll = 0;

        return new Three.Vector3(pitch, roll, yaw);
    }

    // singularity at south pole
    if (test < -0.499) {
        yaw = -2 * Math.atan2(x, w);
        pitch = -Math.PI / 2;
        roll = 0;
        return new Three.Vector3(pitch, roll, yaw);
    }

    const sqx = x * x;
    const sqy = y * y;
    const sqz = z * z;

    yaw = Math.atan2(2 * y * w - 2 * x * z, 1 - 2 * sqy - 2 * sqz);
    pitch = Math.asin(2 * test);
    roll = Math.atan2(2 * x * w - 2 * y * z, 1 - 2 * sqx - 2 * sqz);

    return new Three.Vector3(pitch, roll, yaw);
}

export default ({
    autoRotate = false,
    delayRotation,
    target = [3, 0.08, 0],
    ...props
}) => {
    const orbitControlsReference = useRef();
    const { camera, gl } = useThree();

    const controls = new DeviceOrientationControls(camera);
    console.log({ controls });

    function onDeviceOrientationChangeEvent(event) {
        console.log({ event });
        orbitControlsReference.current.deviceOrientation = event;
    }

    let lastGamma = 0;
    let lastBeta = 0;

    useEffect(() => {
        orbitControlsReference.current.update = () => {
            console.log('update orientation');

            const oC = orbitControlsReference.current;

            // Z
            const alpha = oC.deviceOrientation.alpha
                ? Three.Math.degToRad(oC.deviceOrientation.alpha)
                : 0;

            // X'
            const beta = oC.deviceOrientation.beta
                ? Three.Math.degToRad(oC.deviceOrientation.beta)
                : 0;

            // Y''
            const gamma = oC.deviceOrientation.gamma
                ? Three.Math.degToRad(oC.deviceOrientation.gamma)
                : 0;

            // O
            const orient = oC.screenOrientation
                ? Three.Math.degToRad(oC.screenOrientation)
                : 0;

            const currentQ = new Three.Quaternion().copy(oC.object.quaternion);

            setObjectQuaternion(currentQ, alpha, beta, gamma, orient);
            const currentAngle = Quat2Angle(
                currentQ.x,
                currentQ.y,
                currentQ.z,
                currentQ.w
            );

            // currentAngle.z = left - right
            oC.rotateLeft((lastGamma - currentAngle.z) / 2);
            lastGamma = currentAngle.z;

            // currentAngle.y = up - down
            oC.rotateUp(lastBeta - currentAngle.y);
            lastBeta = currentAngle.y;

            console.log({
                oC,
                alpha,
                beta,
                gamma,
                orient,
                currentQ,
                lastGamma,
                lastBeta
            });
        };

        window.addEventListener(
            'deviceorientation',
            onDeviceOrientationChangeEvent,
            false
        );

        return () => {
            window.removeEventListener(
                'deviceorientation',
                onDeviceOrientationChangeEvent
            );
        };
    }, []);

    useFrame(() => {
        controls.update();

        if (delayRotation) {
            return;
        }

        // We need to update frames when the camera is rotating without user input
        orbitControlsReference.current.update();
    });

    return (
        <orbitControls
            enabled
            enableDamping
            enablePan
            keyPanSpeed={40}
            ref={orbitControlsReference}
            args={[camera, gl.domElement]}
            rotateSpeed={0.5}
            dampingFactor={1}
            autoRotate={autoRotate}
            target={target}
            {...props}
        />
    );
};
