export default function SideScroll (element,  speed,  distance,  step) {
  console.log('sideScroll', element,  speed,  distance,  step);
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};