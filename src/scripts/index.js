// const scroller = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// })

// scroller.on('scroll', ScrollTrigger.update)

// ScrollTrigger.scrollerProxy(
//   '.content-wrapper', {
//       scrollTop(value) {
//           return arguments.length ?
//           scroller.scrollTo(value, 0, 0) :
//           scroller.scroll.instance.scroll.y
//       },
//       getBoundingClientRect() {
//           return {
//               left: 0, top: 0, 
//               width: window.innerWidth,
//               height: window.innerHeight
//           }
//       }
//   }
// )

// ScrollTrigger.create({
//   trigger: '.image-mask',
//   scroller: '.content-wrapper',
//   start: 'top+=30% 50%',
//   end: 'bottom-=40% 50%',
//   // animation: gsap.to('.image-mask', {backgroundSize: '120%'}),
//   scrub: 2,
//   // markers: true
// })

// ScrollTrigger.addEventListener('refresh', () => scroller.update())

// ScrollTrigger.refresh()



gsap.registerPlugin(ScrollTrigger);


function initScrolltriggerAnimations() {
  // Scrolltrigger Animation : Span Lines Intro Home
  if(document.querySelector(".span-lines.animate")) {
    $(".span-lines.animate").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(".span-lines.animate .span-line-inner");
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          toggleActions:'play none none reset', 
          start: "0% 100%",
          end: "100% 0%"
        }
      });
      if(targetElement) {
        tl.from(targetElement, {
          y: "100%",
          stagger: .01,
          ease: "power3.out",
          duration: 1,
          delay: 0
        });
      }
    });
    }
}


function initScript() {
  initScrolltriggerAnimations();
}

// need to run initScript fn at some point
