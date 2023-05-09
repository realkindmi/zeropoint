$(document).ready(function(){
	/* input, delete btn */
	$('.input_btn .input').keyup(function(){
		$(this).siblings('.btn_del').css('display', 'block');
	});
	
    $('.btn_del').click(function(){
        $(this).siblings('input[type=text]').val('');
        $(this).siblings('input[type=text]').removeClass('on');
		$(this).css('display', 'none');
    });
	
	$('.input').keyup(function(){
        let input_on = $(this).val();
        if( input_on.length > 0 ){
            $(this).addClass('on');  
        } else {
            $(this).removeClass('on');  
        }
    });
	
	/* 하단 영역 */
	if( $('.bottom_area').length > 0 ){
        let bottom_H = $('.bottom_area').innerHeight();
        $('.bottom_area').prev('div').css('padding-bottom', bottom_H + 15);
    }

	$('.input, .textarea').focus(function(){
		$('.bottom_area').hide();
	});
	$('.input, .textarea').blur(function(){
		$('.bottom_area').show();
	});
	
	/* accodian */	
	$('.accodian_list li').click(function(){
		$(this).toggleClass('active');
		$(this).children('.panel_ct').slideToggle();
	});
	$('.nav_list li').click(function(){
		$('.nav_list li').removeClass('active');
		$(this).addClass('active');
	});
	
	/* main tab */
	$('.main_menu li').click(function(){
        var tab_id = $(this).attr('data-tab');
 
        $('.main_menu li').removeClass('on');
        $('.tab_content').removeClass('on');
 
        $(this).addClass('on');
        $('#'+tab_id).addClass('on');
    });
});