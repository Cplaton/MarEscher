import { Object } from "./object";
import { Scene, Mesh, PlaneGeometry, MeshBasicMaterial, DoubleSide, RepeatWrapping, TextureLoader } from "three";

export class Map {

    width: number = 200;
    height: number = 100;
    mesh: Mesh;

    constructor(scene: Scene) {
        var texture = new TextureLoader().load( "https://i.pinimg.com/564x/28/3e/c5/283ec5b2a318be28f43f3c82246874e2--grasses-watercolour.jpg");
        var geometry = new PlaneGeometry( 100, 20 );
        var material = new MeshBasicMaterial( {/*color: 0xffff00*/ map: texture} );
        var plane = new Mesh( geometry, material );
        plane.rotateX(- Math.PI / 2)
        this.mesh = plane;
        scene.add( this.mesh );

        var texture2 = new TextureLoader().load( "assets/model/cabbage.png");
        var geometry2 = new PlaneGeometry( 20, 20 );
        var material2 = new MeshBasicMaterial( {/*color: 0xffff00*/ map: texture2, transparent: true, opacity: 0.8 } );
        var cabbage = new Mesh( geometry2, material2 );
        cabbage.rotateX(- Math.PI / 2)
        scene.add( cabbage );
    }

    update() {
        
    }
    
}