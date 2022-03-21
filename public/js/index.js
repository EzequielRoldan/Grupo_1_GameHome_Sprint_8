const glider = new Glider(document.querySelector('.slider'),{
    slidesToShow: 1,
    dots: '#dots',
    duration:0.9,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
  
  
  
  function sliderAuto(slider, miliseconds) {
   const slidesCount = slider.track.childElementCount;
   let slideTimeout = null;
   let nextIndex = 1;
  
   function slide () {
     slideTimeout = setTimeout(
       function () {
         if (nextIndex >= slidesCount ) {
           nextIndex = 0;
         }
         slider.scrollItem(nextIndex++);
       },
       miliseconds
     );
   }
  
   slider.ele.addEventListener('glider-animated', function() {
     window.clearInterval(slideTimeout);
     slide();
   });
  
   slide();
  }
  
  sliderAuto(glider, 2200)

