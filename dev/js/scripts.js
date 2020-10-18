import gsap from "gsap/gsap-core"
import {iconAnimation} from "./demo.js"

const mainTL = gsap.timeline();
mainTL.add(iconAnimation());
