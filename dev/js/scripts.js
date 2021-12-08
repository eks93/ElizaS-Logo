import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(GSDevTools, DrawSVGPlugin);


const mainTL = gsap.timeline();


function drawShape(){
    const tl = gsap.timeline();
    tl.to("#logo", {duration: 3, drawSVG: 1, delay: 0.5});
    return tl;
}

// function nameDrop(){
//     const tl = gsap.timeline();
//     tl.from("#a", {duration: 0.5, y"-=200"});
//     return tl;
// }






mainTL.add(drawShape());



GSDevTools.create();

