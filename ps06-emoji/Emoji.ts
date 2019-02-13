// TODO: ADD HONOR PLEDGE HERE
/**    
 * Author: Andrew Li
 * ONYEN: andrqwli
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

// TODO: Import the classes you need to work with your Emoji
import { Group, Color, Text, Ellipse, Circle } from "introcs/graphics";

export class FaceShape {

    /**
     * The tone of the FaceShape class is a property so that you can
     * easily change the tone of an Emoji (i.e. red FaceShape tone is angry,
     * green sick, etc);
     */
    tone: Color;

    constructor(tone: Color) {
        this.tone = tone;
    }

    shapes(): Group {
        let shapes = new Group();

        // TODO #1: Remove the four lines of code below adding the text "Emoji"
        //          to the shapes group.
        // TODO #2: Import, construct, and add one or more Shape objects to the shapes
        //          group to design your FaceShape.
        let face = new Ellipse(0, 0, 60, 80);
        face.fill = this.tone;
        shapes.add(face);


        // TODO #3: Ensure at least one shape is filled with the
        //          FaceShape's tone Color property. (Requirement A2!)
        return shapes;
    }

}

// TODO: Eye class
export class Eye {
    irisColor: Color;

    constructor(iris: Color) {
        this.irisColor = iris;
    }
    shapes(): Group {
        let shapes = new Group();
        
        let eye = new Circle(10, 0, 0);
        eye.fill = new Color(1, 1, 1);
        shapes.add(eye);

        let iris = new Circle( 7, 0, 0);
        iris.fill = this.irisColor;
        shapes.add(iris);

        let pupil = new Circle(5, 0, 0);
        pupil.fill = new Color(0, 0, 0);
        shapes.add(pupil);

        return shapes;
    }
}
// TODO: Mouth class
export class Mouth {
    shapes(): Group {
        let shapes = new Group();
        
        let mouth = new Ellipse(0, 0, 30, 15);
        mouth.fill = new Color(.827, .05, .121);
        shapes.add(mouth);

        return shapes;
    }
}

// TODO: Emoji class
export class Emoji {
    faceShape: FaceShape;
    mouth: Mouth;
    leftEye: Eye;
    rightEye: Eye;
    
    constructor() {
        this.faceShape = new FaceShape(new Color(1, 0.921, 0.121));    
        this.mouth = new Mouth();
        this.leftEye = new Eye(new Color(.341, .823, .98));
        this.rightEye = new Eye(new Color(.341, .823, .98));
    }

    shapes(): Group {
        let shapes = new Group();
        let faceShapes = this.faceShape.shapes();
        let mouthShapes = this.mouth.shapes();
        let leftEyeShapes = this.leftEye.shapes();
        let rightEyeShapes = this.rightEye.shapes();

        mouthShapes.transform = mouthShapes.transform.translate(0, 40);
        leftEyeShapes.transform = leftEyeShapes.transform.translate(20, -30);
        rightEyeShapes.transform = rightEyeShapes.transform.translate(-20, -30);

        shapes.add(faceShapes);
        shapes.add(mouthShapes);
        shapes.add(leftEyeShapes);
        shapes.add(rightEyeShapes);

        return shapes;
    }
}