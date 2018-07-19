var d = document;
var counter = 0;

d.getElementById('e1').onclick = function eval1(){
	d.getElementById('tr1').style.opacity = 1;
	d.getElementById('tr2').style.opacity = 0;
	d.getElementById('tr3').style.opacity = 0;
	d.getElementById('main_image').innerHTML = `<img src="img/ситроен/стандарт++.jpg">`;
	sideBar1();
}

d.getElementById('e2').onclick = function eval2(){
	d.getElementById('tr2').style.opacity = 1;
	d.getElementById('tr1').style.opacity = 0;
	d.getElementById('tr3').style.opacity = 0;
	d.getElementById('main_image').innerHTML = `<img src="img/мазда/стандарт++.jpg">`;
	sideBar2();
}

d.getElementById('e3').onclick = function eval3(){
	d.getElementById('tr3').style.opacity = 1;
	d.getElementById('tr2').style.opacity = 0;
	d.getElementById('tr1').style.opacity = 0;
	d.getElementById('main_image').innerHTML = `<img src="img/мерседес/стандарт++.jpg">`;
	sideBar3();
}


function show(){
	if (counter == 0 ){
		d.getElementById('drop').style.visibility = 'visible';
		counter = 1;
	} else if (counter == 1) {
		d.getElementById('drop').style.visibility = 'hidden';
		counter = 0;
	};
}

function toggleClass(el){
	var kids = d.getElementById('menu').children;
	for(var i = 0; i < kids.length; i++){
		kids[i].className = "norm";
	}
	el.className = "select";
};

function toggleClass2(el){
	var kids2 = d.getElementById('drop').children;
	for(var i = 0; i < kids2.length; i++){
		kids2[i].className = "norm";
	}
	el.className = "select";
}