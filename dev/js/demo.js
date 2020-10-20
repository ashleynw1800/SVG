import {gsap} from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

gsap.set("#big-circle",{transformOrigin:"center"});
gsap.set("#med-circle",{transformOrigin:"center"});
gsap.set("#small-circle",{transformOrigin:"center"});
gsap.set("#dot",{transformOrigin:"center"});

const loadTL = gsap.timeline();

loadTL.from("#big-circle",{duration:1, alpha:0, ease:"back", scale:3, rotation:360},"1")

    .from("#med-circle",{duration:0.5, alpha:0, ease:"back", scale:0},"1")

    .from("#small-circle",{duration:0.5, alpha:0, ease:"back", scale:3, rotation:360},"1")
    
    .from("#dot",{duration:1, alpha:0, ease:"bounce", scale:0},"1")
    
    .to("#big-circle",{duration:1.5, alpha:0, ease:"back", scale:3, rotation:360},"3")
    .to("#med-circle",{duration:1, alpha:0, ease:"back", scale:0}, "3")
    .to("#small-circle",{duration:1, alpha:0, ease:"back", scale:3, rotation:360}, "3")
    .to("#dot",{duration:1.5, alpha:0, ease:"bounce", scale:0}, "3")
    
    gsap.from("#rect", {
        duration: 0.5, 
        repeat: -1,
        repeatDelay: 0,
        alpha: 0,
        yoyo: true,
        ease: "power1.out",
        motionPath:{
          path: "#path",
          align: "#path",
          autoRotate: true,
          alignOrigin: [0.5, 0.5]
        }
      },"-=4")

      gsap.to("#rect2", {
        duration: 0.5, 
        repeat: -1,
        repeatDelay: 0,
        alpha: 0,
        yoyo: true,
        ease: "power1.out",
        motionPath:{
          path: "#path2",
          align: "#path2",
          autoRotate: true,
          alignOrigin: [0.5, 0.5]
        }
      },"-=4")
      
      gsap.to("#rect3", {
        duration: 0.5, 
        repeat: -1,
        repeatDelay: 0,
        alpha: 0,
        yoyo: true,
        ease: "power1.out",
        motionPath:{
          path: "#path3",
          align: "#path3",
          autoRotate: true,
          alignOrigin: [0.5, 0.5]
        }
      },"-=4")

      gsap.to("#color", {duration: 1, autoAlpha: 1, delay: 3.5, ease: "power1.out", repeat: -1, repeatDelay: 3.5});
      gsap.to("#color", {duration: 0.5, autoAlpha: 0, delay: 4, ease: "power1.out", repeat: -1, repeatDelay: 4}, "-=0.5");
      
    

export function loadAnimation(){
    return loadTL;
}