/* Loadingアニメーション */
window.onload = function() {
  let spinner = document.getElementById('Loading');
  spinner.classList.add('loaded');
}



$('.Q').on('click',(e)=>{
    $(e.target).toggleClass('Q-active');
    $(e.target).next('.A').slideToggle(300);
});

/* fadeInアニメーション */
$('#concept-inner').waypoint({
    handler(direction) {
      if (direction === 'down') {
        $(this.element).addClass('fadeInLeft');
        this.destroy();
      }
    },
    offset: '70%',
  });

$('.feature-top').waypoint({
    handler(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__fadeInDown');
        this.destroy();
      }
    },
    offset: '60%',
  });

$('.feature-top').waypoint({
    handler(direction) {
      if (direction === 'down') {
        $('.feature-bottom').addClass('animate__fadeInUp');
        this.destroy();
      }
    },
    offset: '60%',
  });

$('.product-inner').waypoint({
    handler(direction) {
      if (direction === 'down') {
        $(this.element).addClass('animate__fadeInUp');
        this.destroy();
      }
    },
    offset: '70%',
  });