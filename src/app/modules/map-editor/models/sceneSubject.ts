import { Object3D, Scene } from "three";

export interface SceneSubject {

    create(scene: Scene);

    update();
}