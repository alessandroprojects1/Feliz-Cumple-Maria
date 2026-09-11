$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
	
	// Secuencia automática al cargar la página
	setTimeout(function() {
		// 1. Encender las luces
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
	}, 1500);

	setTimeout(function() {
		// 2. Reproducir música y cambiar brillo
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color','#FFF');
		$('body').addClass('peach-after');
	}, 4000);

	setTimeout(function() {
		// 3. Mostrar decoración
		$('.bannar').addClass('bannar-come');
	}, 7000);

	setTimeout(function() {
		// 4. Globos volando
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
	}, 10000);

	setTimeout(function() {
		// 5. Mostrar pastel
		$('.cake').fadeIn('slow');
	}, 14000);

	setTimeout(function() {
		// 6. Encender velas
		$('.fuego').fadeIn('slow');
	}, 18000);

	setTimeout(function() {
		// 7. Acomodar globos arriba con el nombre MARIA
		var vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22');
		$('#b3').attr('id','b33');
		$('#b4').attr('id','b44');
		$('#b5').attr('id','b55');
		$('#b11').animate({top:240, left: vw-250},500);
		$('#b22').animate({top:240, left: vw-150},500);
		$('#b33').animate({top:240, left: vw-50},500);
		$('#b44').animate({top:240, left: vw+50},500);
		$('#b55').animate({top:240, left: vw+150},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
	}, 22000);

	setTimeout(function() {
		// 8. Mostrar el mensaje personalizado centrado
		$('.custom-birthday-message').fadeIn(2000);
	}, 26000);
	
});

$('document').ready(function(){
	var vw;
	$(window).resize(function(){
		 vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5').stop();
		$('#b11').animate({top:240, left: vw-250},500);
		$('#b22').animate({top:240, left: vw-150},500);
		$('#b33').animate({top:240, left: vw-50},500);
		$('#b44').animate({top:240, left: vw+50},500);
		$('#b55').animate({top:240, left: vw+150},500);
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}
});