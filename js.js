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
/*------------------------------------------------------------------------------------------------------*/
const topButton = () => {
	const btn = document.querySelector(".topButton");
  	btn.addEventListener('click', () => window.scrollTo({
    	top: 0,
    	behavior: 'smooth',
  	}));
}
topButton();

/*------------------------------------------------------------------------------------------------------*/
function fix(){//unhover the hover
    var el = this;
    var par = el.parentNode;
    var next = el.nextSibling;
    par.removeChild(el);
    setTimeout(function() {par.insertBefore(el, next);}, 0)
}
/*------------------------------------------------------------------------------------------------------*/
