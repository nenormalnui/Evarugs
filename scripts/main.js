const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 400,
    spaceBetween: 70,
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
});

window.onload = function () {
	jQuery("#user-city").text(ymaps.geolocation.city);
	jQuery("#user-city2").text(ymaps.geolocation.city);
}
