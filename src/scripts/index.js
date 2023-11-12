import './modules/hide-on-scroll.js';

// import { gsap } from "../../dist/scripts/modules/gsap.min.js";
// import { ScrollTrigger } from "../../dist/scripts/modules/ScrollTrigger.min.js";

import LocomotiveScroll from 'locomotive-scroll';

const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
})




