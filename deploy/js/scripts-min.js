import{gsap}from"gsap";
import{GSDevTools}from"gsap/GSDevTools";
import{DrawSVGPlugin}from"gsap/DrawSVGPlugin";
gsap.registerPlugin(GSDevTools,DrawSVGPlugin);



const mainTL=gsap.timeline();


function drawShape(){
    const tl = gsap.timeline();
    tl.to("", {})
    return tl;
}



mainTL.add(drawShape())
;




GSDevTools.create();
