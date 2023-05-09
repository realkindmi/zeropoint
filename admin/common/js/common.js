$(document).ready(function(){
	/* gnb */
	$('.gnbMenu .depth1 > li').click(function(){
		$('.gnbMenu .depth1 .depth2').css('display', 'none');
		$('.gnbMenu .depth1 > li').removeClass('on');
		$(this).addClass('on');
		if ( $(this).find('.depth2').length){
			$(this).find('.depth2').slideDown();
		}
	});
	
	/* file upload */	
	var fileTarget = $('.filebox .upload_hidden');
    fileTarget.on('change', function(){
        if(window.FileReader){
            // 파일명 추출
            var filename = $(this)[0].files[0].name;
			$(this).siblings('.btn_del').css('display', 'block');
        } 
        else {
            // Old IE 파일명 추출
            var filename = $(this).val().split('/').pop().split('\\').pop();
        };
        $(this).siblings('.upload_name').val(filename);
		
		$('.filebox .btn_del').on('click', function(){
		 	$(this).siblings('.upload_name').val('');
			$(this).siblings('.upload_display').css('display', 'none');
			$(this).css('display', 'none');
		});
    });
});