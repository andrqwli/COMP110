import "introcs";
import { SVG, Group, Color } from "introcs/graphics";

import { Grid } from "./Grid";

// TODO: Import additional classes
import { FaceShape, Mouth, Emoji } from "./Emoji";

function main(): void {
    let shapes = initScene();

    // The following line sets up a coordinate grid to help you orient your designs.
    let grid = new Grid(-100, -100, 100, 100, 10);
    shapes.add(grid.shapes());

    // TODO: Change the following code when you work on other pieces (Eye, Mouth, Emoji)
    let piece = new Emoji();
    
    shapes.add(piece.shapes());

}

/**
 * initScene establishes the connection to the HTML's
 * SVG tag with an id of artboard and returns a Group
 * that is rendered to the SVG tag.
 */
function initScene(): Group {
    let svgTag = new SVG("artboard");
    svgTag.autoScale = true;
    let scene = new Group();
    svgTag.render(scene);
    return scene;
}

main();