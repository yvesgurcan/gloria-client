import React, { useMemo } from 'react';
import * as Three from 'three';
import { ThreeBSP } from 'three-js-csg-es6';
import { Mesh, CylinderGeometry } from 'three';

export default () => {
    const domeWallMesh = useMemo(() => {
        // Build geometry
        const outerCylinder = new Mesh(new CylinderGeometry(6, 6, 0.8, 60, 4));
        const innerCylinder = new Mesh(
            new CylinderGeometry(5.1, 5.1, 0.8, 60, 4)
        );
        const icBSP = new ThreeBSP(innerCylinder);
        const ocBSP = new ThreeBSP(outerCylinder);

        // Carve outer cylinder with inner cylinder
        const carvedCylinder = ocBSP.subtract(icBSP);

        // Create mesh
        const mesh = carvedCylinder.toMesh();
        mesh.material = new Three.MeshPhongMaterial({
            color: "#222",
            shininess: 0,
            metalness: 0,
            flatShading: Three.FlatShading
        });

        // Adjust position to stick to the floor of the dome
        mesh.position.y = -0.3;

        return mesh;
    });

    return <primitive object={domeWallMesh} />;
};
