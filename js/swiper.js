
window.addEventListener('DOMContentLoaded', function(){

const forSwiper = new Swiper('.for__slider', {
	// Optional parameters
	direction: 'horizontal',
	//loop: true,	
	//centeredSlides: true,
	pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
	navigation: {
		nextEl: '.main-slider__button-next',
		prevEl: '.main-slider__button-prev',
	},
	clikable: true,
	setWrapperSize: true,
	// autoHeight: true,
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 10,
	// Responsive breakpoints
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 16,
	// 	},
	// 	767: {
	// 		slidesPerView: 1.1,
	// 		spaceBetween: 30,
	// 	},
	// 	992: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 34,
	// 	},
	// },
//	autoplay: {
	// 	delay: 2000,
	// 	//отключение автоплей при управлении пользователем: disableOnInteraction: true,
	// 	disableOnInteraction: true,
	//},
	// effect: 'flip',
});
const forSwiper2 = new Swiper('.for__slider-2', {
	// Optional parameters
	direction: 'horizontal',
	//loop: true,	
	//centeredSlides: true,
	pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
	navigation: {
		nextEl: '.main-slider__button-next',
		prevEl: '.main-slider__button-prev',
	},
	clikable: true,
	setWrapperSize: true,
	// autoHeight: true,
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 10,
	// Responsive breakpoints
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 16,
	// 	},
	// 	767: {
	// 		slidesPerView: 1.1,
	// 		spaceBetween: 30,
	// 	},
	// 	992: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 34,
	// 	},
	// },
//	autoplay: {
	// 	delay: 2000,
	// 	//отключение автоплей при управлении пользователем: disableOnInteraction: true,
	// 	disableOnInteraction: true,
	//},
	// effect: 'flip',
});
const forSwiper3 = new Swiper('.for__slider-3', {
	// Optional parameters
	direction: 'horizontal',
	//loop: true,	
	//centeredSlides: true,
	pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
	navigation: {
		nextEl: '.main-slider__button-next',
		prevEl: '.main-slider__button-prev',
	},
	clikable: true,
	setWrapperSize: true,
	// autoHeight: true,
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 10,
	// Responsive breakpoints
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 16,
	// 	},
	// 	767: {
	// 		slidesPerView: 1.1,
	// 		spaceBetween: 30,
	// 	},
	// 	992: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 34,
	// 	},
	// },
//	autoplay: {
	// 	delay: 2000,
	// 	//отключение автоплей при управлении пользователем: disableOnInteraction: true,
	// 	disableOnInteraction: true,
	//},
	// effect: 'flip',
});
const forSwiper4 = new Swiper('.for__slider-4', {
	// Optional parameters
	direction: 'horizontal',
	//loop: true,	
	//centeredSlides: true,
	pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
	navigation: {
		nextEl: '.main-slider__button-next',
		prevEl: '.main-slider__button-prev',
	},
	clikable: true,
	setWrapperSize: true,
	// autoHeight: true,
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 10,
	// Responsive breakpoints
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 16,
	// 	},
	// 	767: {
	// 		slidesPerView: 1.1,
	// 		spaceBetween: 30,
	// 	},
	// 	992: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 34,
	// 	},
	// },
//	autoplay: {
	// 	delay: 2000,
	// 	//отключение автоплей при управлении пользователем: disableOnInteraction: true,
	// 	disableOnInteraction: true,
	//},
	// effect: 'flip',
});

})


if(document.querySelector('.main__slider-swiper')){
	const mainSwiper = new Swiper('.main__slider-swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	speed: 1000,
	//centeredSlides: true,
	pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
	// Navigation arrows
	navigation: {
		nextEl: '.main-slider__button-next',
		prevEl: '.main-slider__button-prev',
	},
	clikable: true,
	setWrapperSize: true,
	// autoHeight: true,
	// Default parameters
	slidesPerView: 1,
	// Responsive breakpoints
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 16,
	// 	},
	// 	767: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 18,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 18,
	// 	},
	// 	992: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 34,
	// 	},
	// },
//	autoplay: {
	// 	delay: 2000,
	// 	//отключение автоплей при управлении пользователем: disableOnInteraction: true,
	// 	disableOnInteraction: true,
	//},
	// effect: 'fade',
  // fadeEffect: {
  //   crossFade: true
  // },
	
});
}



const videoSwiper = new Swiper('.video__slider', {
	// Optional parameters
	direction: 'horizontal',
	//loop: true,	
	//centeredSlides: true,
	pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
	// Navigation arrows
	navigation: {
		nextEl: '.video__button-next',
		prevEl: '.video__button-prev',
	},
	clikable: true,
	setWrapperSize: true,
	// autoHeight: true,
	// Default parameters
	slidesPerView: 3,
	spaceBetween: 18,
	// Responsive breakpoints
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 16,
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 18,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 18,
		},
		// 992: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 34,
		// },
	},
//	autoplay: {
	// 	delay: 2000,
	// 	//отключение автоплей при управлении пользователем: disableOnInteraction: true,
	// 	disableOnInteraction: true,
	//},
	// effect: 'flip',
});


const detailsSwiper = new Swiper('.details__slider', {
	// Optional parameters
	direction: 'horizontal',
	//loop: true,	
	//centeredSlides: true,
	pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
	// Navigation arrows
	navigation: {
		nextEl: '.details__button-next',
		prevEl: '.details__button-prev',
	},
	clikable: true,
	setWrapperSize: true,
	// autoHeight: true,
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 10,
	// Responsive breakpoints
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 16,
	// 	},
	// 	767: {
	// 		slidesPerView: 1.1,
	// 		spaceBetween: 30,
	// 	},
	// 	992: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 34,
	// 	},
	// },
//	autoplay: {
	// 	delay: 2000,
	// 	//отключение автоплей при управлении пользователем: disableOnInteraction: true,
	// 	disableOnInteraction: true,
	//},
	// effect: 'flip',
});


const reviewsSwiper = new Swiper('.reviews__slider', {
	// Optional parameters
	direction: 'horizontal',
	//loop: true,	
	//centeredSlides: true,
	pagination: {
    el: '.swiper-pagination',
  },
	// Navigation arrows
	navigation: {
		nextEl: '.reviews__button-next',
		prevEl: '.reviews__button-prev',
	},
	clikable: true,
	setWrapperSize: true,
	// autoHeight: true,
	// Default parameters
	slidesPerView: 2,
	spaceBetween: 10,
	
	// Responsive breakpoints
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 16,
		},
		767: {		
			slidesPerView: 2,
			spaceBetween: 24,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 34,
		},
	},
//	autoplay: {
	// 	delay: 2000,
	// 	//отключение автоплей при управлении пользователем: disableOnInteraction: true,
	// 	disableOnInteraction: true,
	//},
	// effect: 'flip',
});




