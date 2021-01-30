/*Burger menu*/
tit = 'y';
function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu_button');
	let links = menu.find('.burger-menu_link');
	let overlay = menu.find('.burger-menu_overlay');
	let lines = menu.find('.line0');

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
	let zarblockk = menu.find('.zarblock');
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


var img_tr = 'y'
function chImg() {

	let img = document.getElementById('bigmini');
	let disk = document.getElementById('disk_models');
	let videoph = document.getElementById('videop1');
	let videoblock = document.getElementById('videoblock');
	let contactbutton = document.getElementById('contactbutton');
	let zarblockzag1 = document.getElementById('zarblockzag1');
	let zarblockzag2 = document.getElementById('zarblockzag2');
	let zarhr = document.getElementById('zarhr');
	let zarblocktxt1 = document.getElementById('zarblocktxt1');
	let zarblocktxt2 = document.getElementById('zarblocktxt2');
	let dealersbut = document.getElementById('dealersbut');
	let minikop = document.getElementById('minikop');
	let miniele = document.getElementById('miniele');
	let lines = document.getElementById('lines');
	let lines1 = document.getElementById('lines1');
	let lines2 = document.getElementById('lines2');
	let links = document.getElementsByClassName('burger-menu_link');
	let linksoc = document.getElementsByClassName('soc');
	if (img_tr == 'y') {

		img.src = "img/miniJCW.png";
		videoph.src = "img/videophotored.png";
		contactbutton.style.cssText = "border-color:#A30410;";
		videoblock.style.cssText = "background:#0B3F2D; box-shadow: 0 570px 100px -100px #A30410 inset;";
		img.style.cssText = "margin-top:3%; width:70%;";
		disk.style.cssText = "background-color:#0B3F2D; box-shadow: 0 140px 50px -20px #A30410 inset;transition:0.5s;";
		contactbutton.onmouseover = function (event) {
			let target = event.target;
			target.style.background = '#A30410';
		};
		contactbutton.onmouseout = function (event) {
			let target = event.target;
			target.style.background = '#fff';
		};
		zarblockzag1.style.cssText = "display:none;transition:0.5s;";
		zarblockzag2.style.cssText = "display:block;color:white;transition:0.5s;";
		zarhr.color = "white";
		zarblocktxt1.style.cssText = "display:none;transition:0.5s;";
		zarblocktxt2.style.cssText = "display:block;transition:0.5s;";
		dealersbut.style.cssText = "color:white;transition:0.5s;";
		minikop.innerHTML = "MINI JOHN COOPER";
		miniele.innerHTML = "WORKS";
		lines.style.cssText = "background-color: #0B3F2D;box-shadow: -30px 0 10px -6px #A30410 inset;";
		lines1.style.cssText = "background-color: #0B3F2D;box-shadow: -30px 0 10px -6px #A30410 inset;";
		lines2.style.cssText = "background-color: #0B3F2D;box-shadow: -30px 0 10px -6px #A30410 inset;";
		for (let i = 0; i < links.length; i++) {
			links[i].onmouseover = function (event) {
				let target = event.target;
				target.style.cssText = "color:#A30410;";
			};
			links[i].onmouseout = function (event) {
				let target = event.target;
				target.style.cssText = "color:black;";
			};
		}
		for (let i = 0; i < linksoc.length; i++) {
			linksoc[i].onmouseover = function (event) {
				let target = event.target;
				target.style.cssText = "color:#A30410;";
			};
			linksoc[i].onmouseout = function (event) {
				let target = event.target;
				target.style.cssText = "color:black;";
			};
		}


		img_tr = 'r';
	} else {
		img.src = "img/bigmini.png";
		videoph.src = "img/videophoto.png";
		contactbutton.style.cssText = "border-color:#FDEF64;";
		videoblock.style.cssText = "background:#FDEF64;";
		img.style.cssText = "margin-top:-7%; width:60%;";
		disk.style.cssText = "background-color:#F5BF33; box-shadow: 0 140px 40px -10px #F3ED52 inset;transition:0.5s;";
		contactbutton.onmouseover = function (event) {
			let target = event.target;
			target.style.background = '#F3ED52';
		};
		contactbutton.onmouseout = function (event) {
			let target = event.target;
			target.style.background = '#fff';
		};
		zarblockzag1.style.cssText = "display:block;color:black;transition:0.5s;";
		zarblockzag2.style.cssText = "display:none;transition:0.5s;";
		zarhr.color = "black";
		zarblocktxt2.style.cssText = "display:none;transition:0.5s;";
		zarblocktxt1.style.cssText = "display:block;transition:0.5s;";
		dealersbut.style.cssText = "color:black;transition:0.5s;";
		minikop.innerHTML = "MINI COOPER";
		miniele.innerHTML = "ELECTRIC";
		lines.style.cssText = "background-color: gold;box-shadow: -30px 0 10px -6px #FDEF64 inset;";
		lines1.style.cssText = "background-color: gold;box-shadow: -30px 0 10px -6px #FDEF64 inset;";
		lines2.style.cssText = "background-color: gold;box-shadow: -30px 0 10px -6px #FDEF64 inset;";
		for (var i = 0; i < links.length; i++) {
			links[i].onmouseover = function (event) {
				let target = event.target;
				target.style.cssText = "color:#FDEF64";
			};
			links[i].onmouseout = function (event) {
				let target = event.target;
				target.style.cssText = "color:black";
			};
		};
		for (let i = 0; i < linksoc.length; i++) {
			linksoc[i].onmouseover = function (event) {
				let target = event.target;
				target.style.cssText = "color:#FDEF64;";
			};
			linksoc[i].onmouseout = function (event) {
				let target = event.target;
				target.style.cssText = "color:black;";
			};
		}

		img_tr = 'y';
	}



};


