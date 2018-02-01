import { Point } from "./point"
import * as THREE from "three";

export class Path {
    
    points: Array<Point>;

    constructor() {
        this.points = new Array();
    }

    render(scene: THREE.Scene) {

        let vectors = [];
        this.points.forEach(point => {
            vectors.push(new THREE.Vector2(point.x, point.y))
        });
        let shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.createGeometry(vectors)
        var extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
        var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
        var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial() );
        scene.add(mesh);
        console.log("scene", scene);
    }

}
