function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu_button');
	let links = menu.find('.burger-menu_link');
	let overlay = menu.find('.burger-menu_overlay');


	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger-menu_active');

		//if (menu.hasClass('burger-menu_active')) {
		//	$('body').css('overflow', 'hidden');
		//} else {
		//	$('body').css('overflow', 'visible');
		//}

	}
}

burgerMenu('.burger-menu');


/*Video block*/

function locationMenu(select) {
	let menu = $(select);
	let videob = menu.find('.videoblock');
	let buttond = menu.find('.dealersbut');
	let zarblock = menu.find('.zarblock');
	let chcolor = menu.find('.changecolor');
	let playcomp = menu.find('#playComp');
	let links = menu.find('#krest_outline');

	buttond.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});

	links.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('active_videoblock');

		//if (menu.hasClass('active_videoblock')) {
		//	$('body').css('overflow', 'hidden');
		//} else {
		//	$('body').css('overflow', 'visible');
		//}

	}
}
locationMenu('.tuta');