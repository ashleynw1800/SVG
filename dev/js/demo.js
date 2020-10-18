import {gsap} from "gsap";

gsap.set("#big-circle",{transformOrigin:"center"});
gsap.set("#med-circle",{transformOrigin:"center"});
gsap.set("#small-circle",{transformOrigin:"center"});
gsap.set("#dot",{transformOrigin:"center"});
gsap.set("#big-circle-cp",{transformOrigin:"center"});
gsap.set("#med-circle-cp",{transformOrigin:"center"});
gsap.set("#small-circle-cp",{transformOrigin:"center"});

const loadTL = gsap.timeline();

loadTL.from("#big-circle",{duration:1, alpha:0, ease:"back", scale:3, rotation:360},"1")
    .to("#big-circle-cp",{duration:1, rotation:360},"2")
    .to("#big-circle-cp",{duration:1, alpha: 80, ease:"none", rotation:720},"-=0.8")

    .from("#med-circle",{duration:0.5, alpha:0, ease:"back", scale:0},"1")
    .to("#med-circle-cp",{duration:1, rotation:-360},"2")
    .to("#med-circle-cp",{duration:1, alpha: 80, ease:"none", rotation:-720})

    .from("#small-circle",{duration:0.5, alpha:0, ease:"back", scale:3, rotation:360},"1")
    
    .from("#dot",{duration:1, alpha:0, ease:"bounce", scale:0},"1")
    
    .to("#big-circle",{duration:1.5, alpha:0, ease:"back", scale:3, rotation:360},"3")
    .to("#med-circle",{duration:1, alpha:0, ease:"back", scale:0}, "3")
    .to("#small-circle",{duration:1, alpha:0, ease:"back", scale:3, rotation:360}, "3")
    .to("#dot",{duration:1.5, alpha:0, ease:"bounce", scale:0}, "3")
    ;

export function loadAnimation(){
    return loadTL;
}