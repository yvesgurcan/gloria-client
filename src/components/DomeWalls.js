import React, { useRef } from 'react';
import * as Three from 'three';
import { ThreeBSP } from 'three-js-csg-es6';
import { Mesh, CylinderGeometry } from 'three';

export default () => {
    const elementReference = useRef();

    const outerCylinder = new Mesh(new CylinderGeometry(6, 6, 12, 60, 4));
    const innerCylinder = new Mesh(new CylinderGeometry(5, 5, 12, 60, 4));
    const icBSP = new ThreeBSP(innerCylinder);
    const ocBSP = new ThreeBSP(outerCylinder);

    // carve outer cylinder with inner cylinder
    const carvedCylinder = ocBSP.subtract(icBSP);
    const domeWallMesh = carvedCylinder.toMesh();
    domeWallMesh.material = new Three.MeshPhongMaterial({
        color: 0xdddddd,
        specular: 0x1a1a1a,
        shininess: 30,
        shading: Three.FlatShading
    });
    return (
        <>
            <mesh position={[0, 3, 0]} ref={elementReference}>
                <meshLambertMaterial
                    attach="material"
                    color="rgb(0, 168, 224)"
                    roughness={1}
                    metalness={0.3}
                />
            </mesh>
            <primitive object={domeWallMesh} />
        </>
    );
};
