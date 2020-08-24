/*------------------------------------------------------------------------------------------------------*/
var k = 0;
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const links = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	burger.addEventListener('click',()=>{
		k = k ^ 1;
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
	navLinks.forEach(item => {
		item.addEventListener('click', event => {
			if(k == 1){
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
			}
			k = 0;
		});
	})
}
navSlide();
/*------------------------------------------------------------------------------------------------------*/
const topButton = () => {
	var k = 0;
	const btn = document.querySelector(".topButton");
  	btn.addEventListener('click', () => window.scrollTo({
    	top: 0,
    	behavior: 'smooth',
  	}));
  	btn.addEventListener('click', event =>{
  		k = 1;
  		btn.classList.toggle('topButton-active');
  	});
  	btn.addEventListener('touchend', event =>{
  		if(k == 1){
  			btn.classList.toggle('topButton-active');
  		}
  		k = 0;
  	})
}
topButton();
/*------------------------------------------------------------------------------------------------------*/
