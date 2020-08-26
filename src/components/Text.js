import React, { Suspense, forwardRef, useMemo } from 'react';
import { useLoader, useUpdate, useThree, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

const Text = forwardRef(
    (
        {
            children,
            vAlign = 'center',
            hAlign = 'center',
            color = '#000000',
            rotation = [0, 0, 0],
            offset = [0, 0, 0],
            ...props
        },
        elementReference
    ) => {
        const { camera } = useThree();

        const font = useLoader(
            THREE.FontLoader,
            'https://raw.githubusercontent.com/yvesgurcan/3d-menu-alt/master/public/font.json'
        );

        const config = useMemo(() => ({ font, size: 2.25, height: 1 }), [font]);

        const mesh = useUpdate(self => {
            console.log(self);
            const size = new THREE.Vector3();
            self.geometry.computeBoundingBox();
            self.geometry.boundingBox.getSize(size);
            self.position.x =
                hAlign === 'center'
                    ? -size.x / 2
                    : hAlign === 'right'
                    ? 0
                    : -size.x;
            self.position.y =
                vAlign === 'center'
                    ? -size.y / 2 + 1.45
                    : vAlign === 'top'
                    ? 0
                    : -size.y;
        });

        return (
            <group ref={elementReference} {...props} scale={[0.1, 0.01, 0.1]}>
                <mesh
                    rotation={rotation}
                    ref={mesh}
                    position={[0 + offset[0], 7 + offset[1], 7 + offset[2]]}
                >
                    <textGeometry attach="geometry" args={[children, config]} />
                    <meshStandardMaterial attach="material" />
                </mesh>
            </group>
        );
    }
);

export default props => (
    <Suspense fallback={null}>
        <Text {...props} />
    </Suspense>
);
