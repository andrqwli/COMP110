/*
* 
* Author: Andrew Li
* 
* ONYEN: andrqwli
* 
* UNC Honor Pledge: I certify that no unauthorized assistance has been received 
* or given in the completion of this work. I certify that I understand and 
* could now rewrite on my own, without assistance from course staff, 
* the problem set code I am submitting. 
*/
import { print, promptNumber, promptString } from "introcs";

export let main = async () => {
    let alive = true;
    let thirstLevel = 50;
    let bearLikeliness = 50;
    let isHarvestTime = false;
    let day = 0;
    let beetsCount = 10;
    while (isHarvestTime === false && alive === true) {
        print("It is day " + day + ".");
        let waterSprayOrHarvest = await promptString("Would you like to water, spray, or harvest?");
        if (waterSprayOrHarvest === "water") {
            print(beetsCount + " beets have been watered!");
            thirstLevel = thirstLevel - 10;
            bearLikeliness = bearLikeliness + 10;
            beetsCount = beetsCount + 2;
        }   else {
            if (waterSprayOrHarvest === "spray") {
                print(beetsCount + " beets have been sprayed!");
                thirstLevel = thirstLevel + 10;
                bearLikeliness = bearLikeliness - 5;
            }   else {
                if (waterSprayOrHarvest === "harvest") {
                    print(beetsCount + " beets have been harvested!");
                    isHarvestTime = true;
                }   else {
                    print(beetsCount + " beets were not watered, sprayed, or harvested.");
                    thirstLevel = thirstLevel + 10;
                    bearLikeliness = bearLikeliness + 10;
                }
            }
        }   
        day++;
        if (thirstLevel <= 0 || thirstLevel > 100 || bearLikeliness >= 100) {
            alive = false;
        }
        if (thirstLevel > 100) {
            print("Your " + beetsCount + " beets have been dehydrated");
        }   else {
            if (thirstLevel <= 0) {
                print("Your " + beetsCount + " beets have been overwatered");
            }   else {
                if (bearLikeliness >= 100) {
                    print("Your " + beetsCount + " beets were eaten by bears");
                }
            }
        }
        if (isHarvestTime === false && alive === true) {
            print("Your " + beetsCount + " beets are alive!");
            print("Thirst Level of " + beetsCount + " beets: " + thirstLevel);
            print("Likeliness of bear attack of " + beetsCount + " beets: " + bearLikeliness);
        }
   
   
   
    }
    if (isHarvestTime === true && alive === true) {
        print("Your " + beetsCount + " beets were harvested after " + day + " days :)");
    }
    if (isHarvestTime === false && alive === false) {
        print("This means that " + beetsCount + " beets have died after " + day + " days :(");
    }

};
// i did this entire thing in my history class lets go 
main();