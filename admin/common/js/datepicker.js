$(document).ready(function(){
	$.datepicker.setDefaults({
       changeMonth: true,
        changeYear: true,
		nextText: '다음 달', 
		prevText: '이전 달',
		dateFormat: "yy-mm-dd",
        dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], 
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		showOn: "button",
		buttonImage: "../common/images/icon_calendar.svg",
		buttonImageOnly: true
    });
    $(".datepicker").datepicker();
	$(".startDate").datepicker({
		maxDate: 0,
		onClose: function( selectedDate ) {
			$(".endDate").datepicker( "option", "minDate", selectedDate ); 
		} 
	});
	$(".endDate").datepicker({
		maxDate: 0,
		onClose: function( selectedDate ) {
			$(".startDate").datepicker( "option", "maxDate", selectedDate ); 
		}
	});
});