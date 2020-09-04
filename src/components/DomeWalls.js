import React, { useMemo } from 'react';
import * as Three from 'three';
import { ThreeBSP } from 'three-js-csg-es6';
import { Mesh, CylinderGeometry } from 'three';

export default () => {
    const domeWallMesh = useMemo(() => {
        // Build geometry
        const outerCylinder = new Mesh(new CylinderGeometry(6, 6, 0.4, 60, 4));
        const innerCylinder = new Mesh(new CylinderGeometry(5, 5, 0.4, 60, 4));
        const icBSP = new ThreeBSP(innerCylinder);
        const ocBSP = new ThreeBSP(outerCylinder);

        // Carve outer cylinder with inner cylinder
        const carvedCylinder = ocBSP.subtract(icBSP);

        // Create mesh
        const mesh = carvedCylinder.toMesh();
        mesh.material = new Three.MeshPhongMaterial({
            specular: 0x1a1a1a,
            shininess: 30,
            flatShading: Three.FlatShading
        });

        // Apply texture to mesh
        const texture = new Three.TextureLoader().load(
            'https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/metal.jpg'
        );
        mesh.material.map = texture;

        // Adjust position to stick to the floor of the dome
        mesh.position.y = -0.3;

        return mesh;
    });

    return <primitive object={domeWallMesh} />;
};
