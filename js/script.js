 
// navbar js 
function toggleNavbar() {
    const navbar = document.querySelector(".navbar-sm");
    const svg1 = document.querySelector(".svg1");
    const svg2 = document.querySelector(".svg2");
  
    navbar.classList.toggle("show");
    svg1.classList.toggle("show");
    svg2.classList.toggle("show");
  }
  
// counter number 
  const counters = document.querySelectorAll(".banner-rate .counter ");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});


// equal height 

    $(document).ready(function() {
        var height = Math.max($(".services-box").height(), $(".services-box").height());
        $(".services-box").height(height);
        $(".services-box").height(height);
    });


    // silder 


    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        lazyLoad: true,
        responsiveClass:true
      });
    });
    $('.mynav-next').click(function() {
        $(".owl-carousel").trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.mynav-prev').click(function() {
        $(".owl-carousel").trigger('prev.owl.carousel');
    })
    

