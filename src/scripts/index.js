import './modules/hide-on-scroll.js';

import { gsap } from "../../dist/scripts/modules/gsap.min.js";
import { ScrollTrigger } from "../../dist/scripts/modules/ScrollTrigger.min.js";

import LocomotiveScroll from 'locomotive-scroll';

const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
})

gsap.registerPlugin(ScrollTrigger)

scroller.on('scroll', ScrollTrigger.update)

ScrollTrigger.scrollerProxy(
  '.main-wrapper', {
      scrollTop(value) {
          return arguments.length ?
          scroller.scrollTo(value, 0, 0) :
          scroller.scroll.instance.scroll.y
      },
      getBoundingClientRect() {
          return {
              left: 0, top: 0, 
              width: window.innerWidth,
              height: window.innerHeight
          }
      }
  }
)


// ScrollTrigger.create({
//   trigger: '.image-mask',
//   scroller: '.main-wrapper',
//   start: 'top+=30% 50%',
//   end: 'bottom-=40% 50%',
//   // animation: gsap.to('.image-mask', {backgroundSize: '120%'}),
//   scrub: 2,
//   // markers: true
// })


ScrollTrigger.addEventListener('refresh', () => scroller.update())

ScrollTrigger.refresh()
