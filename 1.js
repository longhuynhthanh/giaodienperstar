document.addEventListener("DOMContentLoaded", function () {
	var nut = document.querySelectorAll('.menu ul li');
	// console.log(nut);
	var noidung = document.querySelectorAll('.thongtinchitiet ul li');
	// console.log(noidung);
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click', function(){
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('active');
				noidung[i].classList.remove('active1');
				noidung[i].classList.remove('chuyendong');
			}
			this.classList.add('active');
			var noidungdangchon = this;
			var k = 0;
	 	    for (k = 0; noidungdangchon = noidungdangchon.previousElementSibling; k++) {}
	 	    noidung[k].classList.add('active1');
	 	    noidung[k].classList.add('chuyendong');
		})
	}
	// body...
}, false)