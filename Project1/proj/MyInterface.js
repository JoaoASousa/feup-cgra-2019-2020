/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        // Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        // Checkbox for Sphere Displaying
        this.gui.add(this.scene, 'displaySphere').name('Display Sphere');

        // Checkbox for Cylinder Displaying
        this.gui.add(this.scene, 'displayCylinder').name('Display Cylinder');

        return true;
    }
}