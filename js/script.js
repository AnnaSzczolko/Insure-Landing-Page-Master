const burgerBtn = document.querySelector('.nav-burger')
const navMobile = document.querySelector('.nav-mobile')
const allNavMobileItems = document.querySelectorAll('.nav-mobile-item')

const toggleMobileMenu = () => {
	navMobile.classList.toggle('active')

	const isActive = navMobile.classList.contains('active')

	if (isActive) {
		document.body.style.overflow = 'hidden'
		burgerBtn.innerHTML = '<img src="./img/icon-close.svg" alt="">'
	} else {
		document.body.style.overflow = 'scroll'
		burgerBtn.innerHTML = '<img src="./img/icon-hamburger.svg" alt="">'
	}
	
}

const closeMobileMenu = () => {
    navMobile.classList.remove('active')
	document.body.style.overflow = 'scroll'
    burgerBtn.innerHTML = '<img src="./img/icon-hamburger.svg" alt="">'
}

allNavMobileItems.forEach(item => item.addEventListener('click', closeMobileMenu))
burgerBtn.addEventListener('click', toggleMobileMenu)
