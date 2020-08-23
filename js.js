/*------------------------------------------------------------------------------------------------------*/
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const links = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	burger.addEventListener('click',()=>{
		links.classList.toggle('nav-links-active');
		burger.classList.toggle('change');
		navLinks.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			}
			else{
				link.style.animation = `linksFade 0.5s ease forwards ${index / 7 + 0.4}s`;
			}
		});
	});
}
navSlide();
/*----------------PRZYCISK NA GÓRĘ----------------------------------------------------------------------*/
const topButton = () => {
	const btn = document.querySelector(".topButton");
  	btn.addEventListener('click', () => window.scrollTo({
    	top: 0,
    	behavior: 'smooth',
  	}));
}
topButton();

/*------------------------------------------------------------------------------------------------------*/
