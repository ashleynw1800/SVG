import gsap from "gsap/gsap-core"
import {loadAnimation} from "./demo.js"
//import {inAnimation} from "./demo.js"
//import { GSDevTools } from "gsap/GSDevTools";

//gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline({repeat:-1});
mainTL.add(loadAnimation());
//mainTL.add(inAnimation());


//instantiate GSDevTools with default settings
//GSDevTools.create();
