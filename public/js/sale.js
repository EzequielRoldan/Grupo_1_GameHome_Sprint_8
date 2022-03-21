
  new Glider(document.querySelector('.glider-sale'), {
    slidesToShow: 1,
    slidesToScroll: 0.5,
    duration:0.8,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev-sale',
      next: '.glider-next-sale'
    }
  });