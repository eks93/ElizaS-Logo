import{gsap}from"gsap";import{GSDevTools}from"gsap/GSDevTools";import{DrawSVGPlugin}from"gsap/DrawSVGPlugin";gsap.registerPlugin(GSDevTools,DrawSVGPlugin);const mainTL=gsap.timeline();function drawShape(){return tl.to("#logo",{duration:3,drawSVG:1,delay:.5}),tl}mainTL.add(drawShape()),GSDevTools.create();