import gsap from "gsap/gsap-core"
import {loadAnimation} from "./demo.js"

const mainTL = gsap.timeline({repeat:-1});
mainTL.add(loadAnimation());
