

const burger = document.querySelector('.burger__icon'),
    menu = document.querySelector('.header__menu');
        if (burger) {
            burger.addEventListener ('click', (event) => {
                document.body.classList.toggle('_lock')
                burger.classList.toggle('_active')
                menu.classList.toggle('_active')
            });
        }



        const swiper = new Swiper('.featured-swiper', {
            // Optional parameters
           
            loop: true,
            observer: true,
                    observeParents: true,
                    slidesPerView: 3,
                    spaceBetween: 56,
                    //autoHeight: true,
                    speed: 800,
              autoHeight: true,
        
            // If we need pagination
          
          
            // Navigation arrows
            navigation: {
              nextEl: '.featured-left',
              prevEl: '.featured-right',
            },
          
            breakpoints: {
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              // when window width is >= 480px
              767: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              // when window width is >= 640px
              998: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }
            
          });