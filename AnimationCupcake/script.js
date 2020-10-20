gsap.registerPlugin(ScrollTrigger);


var apparition = gsap.timeline();

ScrollTrigger.create({
  trigger: ".SectionCupcake",
  animation: apparition,
  start: "top top",
  end: "bottom top ",
  scrub: 1,
  pin: true,
}); 

apparition.from(".Cup", 
{
  scale: 0,
  opacity : 0,
  duration: 2000,
})

  .from(".Cake", 
{ 
  scale: 0,
  opacity : 0,
  duration:5000,
})
  .from(".Candle", 
{
  y: 100,
  opacity : 0,
  duration: 1500
})

.from(".Flame", 
{
  opacity : 0,
  duration: 1500
});

var bougie = gsap.timeline({})
.fromTo('.Flame', { scale : '1',filter:'brightness(100%)'},{ scale : '1.05',repeat:-1 ,yoyo:true,ease: 'power1.out', filter:'brightness(110%)'});