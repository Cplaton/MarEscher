import { Path } from "./path";
import { Drawable } from "./drawable";
import { Layer } from "./layer";
import { Scene } from "three";

export class Object {

    path: Path;
    layers: Map<string, Layer>

    constructor() {
        this.path = new Path();
        this.layers = new Map();
    }

    render(scene: Scene) {
        this.path.render(scene);
    }

}