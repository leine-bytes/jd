
  var textWrapper = document.querySelector('#typing-text');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: false})
    .add({
      targets: '#typing-text .letter',
      scale: [10,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70*i
    });

    function userScroll() {
        const navbar = document.querySelector('.navbar');
      
        window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
          } else {
            navbar.classList.remove('bg-dark');
          }
        });
      }
      
      document.addEventListener('DOMContentLoaded', userScroll);