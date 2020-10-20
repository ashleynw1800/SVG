import gsap from "gsap/gsap-core"
import {loadAnimation} from "./demo.js"
//import {inAnimation} from "./demo.js"

const mainTL = gsap.timeline({repeat:-1});
mainTL.add(loadAnimation());
//mainTL.add(inAnimation());
