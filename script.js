//javascript
/*Nirav - 12-31-2016 */

$(function(){
	
		
	$(window).on('load', function() {
            // $('#status').fadeOut(); 
            //$('#preloader').delay(350).fadeOut('slow'); 
            $('.bodyWrapper').hide().delay(300).fadeIn('slow');
		});
			
		$('.mainMenuIcon').click(function(){
		$('.menuList').slideToggle("fast");
		$('.mainNavigation').css("width","100%");
	});	
	$('.nextSlide1').click( function(){
		
		 $('.meetSlide2').hide().delay(1000).fadeIn();
		 $('.sliderLeftTop2').hide().delay(1000).fadeIn();		
		 $('.sliderRightTop2').hide().delay(1250).fadeIn();		
		 $('.sliderRightBottom2').hide().delay(1500).fadeIn();	
		 $('.nextSlide2').hide().delay(750).fadeIn();
		
		$('.sliderRightInfo').fadeOut();
		$('.sliderLeftTop1').fadeOut();				
		$('.sliderRightTop1').delay(250).fadeOut();		
		$('.sliderRightBottom1').delay(500).fadeOut();			
		$('.meetSlide1').delay(500).fadeOut();
		$('.nextSlide1').delay(500).fadeOut();
		
		
	});
		$('.nextSlide2').click( function(){

		$('.meetSlide3').hide().delay(1000).fadeIn();
		$('.sliderLeftTop3').hide().delay(1000).fadeIn();		
		$('.sliderRightTop3').hide().delay(1250).fadeIn();		
		$('.sliderRightBottom3').hide().delay(1500).fadeIn();	
		$('.nextSlide3').hide().delay(750).fadeIn();
		
		$('.sliderRightInfo').fadeOut();
		$('.sliderLeftTop2').fadeOut();		
		$('.sliderRightTop2').delay(250).fadeOut();		
		$('.sliderRightBottom2').delay(500).fadeOut();			
		$('.meetSlide2').delay(500).fadeOut();
		$('.nextSlide2').delay(500).fadeOut();
		
	});
	$('.nextSlide3').click( function(){
		
		$('.meetSlide4').hide().delay(1000).fadeIn();
		$('.sliderLeftTop4').hide().delay(1000).fadeIn();		
		$('.sliderRightTop4').hide().delay(1250).fadeIn();		
		$('.sliderRightBottom4').hide().delay(1500).fadeIn();	
		$('.nextSlide4').hide().delay(750).fadeIn();
		
		$('.sliderLeftTop3').fadeOut();		
		$('.sliderRightTop3').delay(250).fadeOut();		
		$('.sliderRightBottom3').delay(500).fadeOut();			
		$('.meetSlide3').delay(500).fadeOut();
		$('.nextSlide3').delay(500).fadeOut();
		$('.sliderRightInfo').fadeOut();
	});
	$('.nextSlide4').click( function(){
		
		$('.meetSlide5').hide().delay(1000).fadeIn();
		$('.sliderLeftTop5').hide().delay(1000).fadeIn();		
		$('.sliderRightTop5').hide().delay(1250).fadeIn();		
		$('.sliderRightBottom5').hide().delay(1500).fadeIn();	
		$('.nextSlide5').hide().delay(750).fadeIn();
		
		$('.sliderLeftTop4').fadeOut();		
		$('.sliderRightTop4').delay(250).fadeOut();		
		$('.sliderRightBottom4').delay(500).fadeOut();			
		$('.meetSlide4').delay(500).fadeOut();
		$('.nextSlide4').delay(500).fadeOut();
		$('.sliderRightInfo').fadeOut();
	});
	$('.nextSlide5').click( function(){
		
		$('.meetSlide6').hide().delay(1000).fadeIn();
		$('.sliderLeftTop6').hide().delay(1000).fadeIn();		
		$('.sliderRightTop6').hide().delay(1250).fadeIn();		
		$('.sliderRightBottom6').hide().delay(1500).fadeIn();	
		$('.nextSlide6').hide().delay(750).fadeIn();
		
		$('.sliderLeftTop5').fadeOut();		
		$('.sliderRightTop5').delay(250).fadeOut();		
		$('.sliderRightBottom5').delay(500).fadeOut();			
		$('.meetSlide5').delay(500).fadeOut();
		$('.nextSlide5').delay(500).fadeOut();
		$('.sliderRightInfo').fadeOut();
	});
	$('.nextSlide6').click( function(){
		
		$('.meetSlide7').hide().delay(1000).fadeIn();
		$('.sliderLeftTop7').hide().delay(1000).fadeIn();		
		$('.sliderRightTop7').hide().delay(1250).fadeIn();		
		$('.sliderRightBottom7').hide().delay(1500).fadeIn();	
		$('.nextSlide7').hide().delay(750).fadeIn();
		
		$('.sliderLeftTop6').fadeOut();		
		$('.sliderRightTop6').delay(250).fadeOut();		
		$('.sliderRightBottom6').delay(500).fadeOut();			
		$('.meetSlide6').delay(500).fadeOut();
		$('.nextSlide6').delay(500).fadeOut();
		$('.sliderRightInfo').fadeOut();
	});
	$('.nextSlide7').click( function(){
		
		$('.meetSlide8').hide().delay(1000).fadeIn();
		$('.sliderLeftTop8').hide().delay(1000).fadeIn();		
		$('.sliderRightTop8').hide().delay(1250).fadeIn();		
		$('.sliderRightBottom8').hide().delay(1500).fadeIn();	
		$('.nextSlide8').hide().delay(750).fadeIn();
		
		$('.sliderLeftTop7').fadeOut();		
		$('.sliderRightTop7').delay(250).fadeOut();		
		$('.sliderRightBottom7').delay(500).fadeOut();			
		$('.meetSlide7').delay(500).fadeOut();
		$('.nextSlide7').delay(500).fadeOut();
		$('.sliderRightInfo').fadeOut();
	});
	$('.nextSlide8').click( function(){
		
		$('.meetSlide9').hide().delay(1000).fadeIn();
		$('.sliderLeftTop9').hide().delay(1000).fadeIn();		
		$('.sliderRightTop9').hide().delay(1250).fadeIn();		
		$('.sliderRightBottom9').hide().delay(1500).fadeIn();	
		$('.nextSlide9').hide().delay(750).fadeIn();
		
		$('.sliderLeftTop8').fadeOut();		
		$('.sliderRightTop8').delay(250).fadeOut();		
		$('.sliderRightBottom8').delay(500).fadeOut();			
		$('.meetSlide8').delay(500).fadeOut();
		$('.nextSlide8').delay(500).fadeOut();
		$('.sliderRightInfo').fadeOut();
	});
	$('.nextSlide9').click( function(){
		
		$('.meetSlide10').hide().delay(1000).fadeIn();
		$('.sliderLeftTop10').hide().delay(1000).fadeIn();		
		$('.sliderRightTop10').hide().delay(1250).fadeIn();		
		$('.sliderRightBottom10').hide().delay(1500).fadeIn();	
		$('.nextSlide10').hide().delay(750).fadeIn();
		
		$('.sliderLeftTop9').fadeOut();		
		$('.sliderRightTop9').delay(250).fadeOut();		
		$('.sliderRightBottom9').delay(500).fadeOut();			
		$('.meetSlide9').delay(500).fadeOut();
		$('.nextSlide9').delay(500).fadeOut();
		$('.sliderRightInfo').fadeOut();
	});
	$('.nextSlide10').click( function(){
		
		$('.meetSlide11').hide().delay(1000).fadeIn();
		$('.sliderLeftTop11').hide().delay(1000).fadeIn();		
		$('.sliderRightTop11').hide().delay(1250).fadeIn();		
		$('.sliderRightBottom11').hide().delay(1500).fadeIn();	
		$('.nextSlide11').hide().delay(750).fadeIn();
		
		$('.sliderLeftTop10').fadeOut();		
		$('.sliderRightTop10').delay(250).fadeOut();		
		$('.sliderRightBottom10').delay(500).fadeOut();			
		$('.meetSlide10').delay(500).fadeOut();
		$('.nextSlide10').delay(500).fadeOut();
		$('.sliderRightInfo').fadeOut();
	});
	$('.nextSlide11').click( function(){
		
		$('.meetSlide12').hide().delay(1000).fadeIn();
		$('.sliderLeftTop12').hide().delay(1000).fadeIn();		
		$('.sliderRightTop12').hide().delay(1250).fadeIn();		
		$('.sliderRightBottom12').hide().delay(1500).fadeIn();	
		$('.nextSlide12').hide().delay(750).fadeIn();
		
		$('.sliderLeftTop11').fadeOut();		
		$('.sliderRightTop11').delay(250).fadeOut();		
		$('.sliderRightBottom11').delay(500).fadeOut();			
		$('.meetSlide11').delay(500).fadeOut();
		$('.nextSlide11').delay(500).fadeOut();
		$('.sliderRightInfo').fadeOut();
	});
	$('.nextSlide12').click( function(){
		
		$('.meetSlide13').hide().delay(1000).fadeIn();
		$('.sliderLeftTop13').hide().delay(1000).fadeIn();		
		$('.sliderRightTop13').hide().delay(1250).fadeIn();		
		$('.sliderRightBottom13').hide().delay(1500).fadeIn();	
		$('.nextSlide13').hide().delay(750).fadeIn();
		
		$('.sliderLeftTop12').fadeOut();		
		$('.sliderRightTop12').delay(250).fadeOut();		
		$('.sliderRightBottom12').delay(500).fadeOut();			
		$('.meetSlide12').delay(500).fadeOut();
		$('.nextSlide12').delay(500).fadeOut();
		$('.sliderRightInfo').fadeOut();
	});
	$('.nextSlide13').click( function(){
		
		$('.meetSlide14').hide().delay(1000).fadeIn();
		$('.sliderLeftTop14').hide().delay(1000).fadeIn();		
		$('.sliderRightTop14').hide().delay(1250).fadeIn();		
		$('.sliderRightBottom14').hide().delay(1500).fadeIn();	
		$('.nextSlide14').hide().delay(750).fadeIn();
		
		$('.sliderLeftTop13').fadeOut();		
		$('.sliderRightTop13').delay(250).fadeOut();		
		$('.sliderRightBottom13').delay(500).fadeOut();			
		$('.meetSlide13').delay(500).fadeOut();
		$('.nextSlide13').delay(500).fadeOut();
		$('.sliderRightInfo').fadeOut();
	});
		$('.nextSlide14').click( function(){
		
		$('.meetSlide1').hide().delay(1000).fadeIn();
		$('.sliderLeftTop1').hide().delay(1000).fadeIn();		
		$('.sliderRightTop1').hide().delay(1250).fadeIn();		
		$('.sliderRightBottom1').hide().delay(1500).fadeIn();	
		$('.nextSlide1').hide().delay(750).fadeIn();
		
		$('.sliderLeftTop14').fadeOut();		
		$('.sliderRightTop14').delay(250).fadeOut();		
		$('.sliderRightBottom14').delay(500).fadeOut();			
		$('.meetSlide14').delay(500).fadeOut();
		$('.nextSlide14').delay(500).fadeOut();
		$('.sliderRightInfo').fadeOut();
	});
	$('.sliderLeftTop').click(function(){
		$('.sliderRightInfo').toggle("slide");
		
	});
		
	$('#memoriesSlider1').scrollingMemories();
});