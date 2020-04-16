/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject {
    constructor(scene) {
		super(scene);
        
        this.triangleFig = new MyTriangle(this.scene);

        this.mainBody = new MySphere(this.scene, 24, 12);
        // this.bottomBody = new MySphere(this.scene, 16, 8);
        this.bottomBody = new MyCylinder(this.scene, 16, 8);
        this.steering = new MyQuad(this.scene);

        this.horizAngle = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.reset();
    }

    display() {
        
        /*
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.horizAngle * Math.PI / 180.0, 0, 1, 0);

        // Centering / aligning the vehicle (triangle at the moment)
        this.scene.rotate(-90*Math.PI/180,1,0,0);
        this.scene.rotate(45*Math.PI/180,0,0,1);
        this.scene.translate(0.5,0.5, 0);

        this.triangleFig.display();
        */
        

        // Main Body (bigger section)
        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 1);
        //this.scene.translate(0, 10, 0);
        this.mainBody.display();
        this.scene.popMatrix();

        // Bottom Body
        this.scene.pushMatrix();
        this.scene.scale(0.2, 0.2, 0.4);
        this.scene.translate(0, -3, 0);
        this.bottomBody.display();
        this.scene.popMatrix();

        // Left Propeller
        this.scene.pushMatrix();
        this.scene.scale(0.04, 0.04, 0.11);
        this.scene.translate(4.5, -13, -2.8);
        this.mainBody.display();
        this.scene.popMatrix();

        // Right Propeller
        this.scene.pushMatrix();
        this.scene.scale(0.04, 0.04, 0.11);
        this.scene.translate(-4.5, -13, -2.8);
        this.mainBody.display();
        this.scene.popMatrix();
        
        // Left "Steering"
        this.scene.pushMatrix();
        this.scene.scale(0.2, 0.2, 0.8);
        this.scene.translate(1.5, 0, -1);
        this.scene.rotate(-90 * Math.PI / 180, 1, 0, 0);
        this.steering.display();
        this.scene.popMatrix();

        // Right "Steering"
        this.scene.pushMatrix();
        this.scene.scale(0.2, 0.2, 0.8);
        this.scene.translate(-1.5, 0, -1);
        this.scene.rotate(-90 * Math.PI / 180, 1, 0, 0);
        this.steering.display();
        this.scene.popMatrix();
    }

    update() {
        this.horizAngleRad = this.horizAngle * Math.PI / 180;

        this.x += this.speed * Math.sin(this.horizAngleRad);
        this.z += this.speed * Math.cos(this.horizAngleRad);
    }

    turn(val) {
        this.horizAngle += val;
    }

    // DOUBT é suposto que quando se carrega por exemplo no W que a vel volte a 0
    // e comece a decrescer a partir daí ou começa a decrescer a partir de
    // onde "parou" quando se estava a carregar no S ?
    accelerate(val) {
        this.speed += val * 0.08;
    }

    reset() {
        this.horizAngle = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

}