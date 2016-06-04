jQuery(function($){ // on DOM load

//create value with date.
var CountdownDate = 'January 9, 2017 00:00:01';
var countDatePicker = 0;
var Statement = '<div style="font-weight:bold; float:right">Until Next Build Season</div>';

countdown();

//function for countdown.
function countdown () {
  //beginning of page set text to title
  $( document ).ready(function() {
		$('#CountdownTitle').html(Statement)
});
	var mycountdown = new cubecountdown({
		containerid: 'futuredate',
		targetdate: CountdownDate,
		size: ['10em', '6em'], // specify cube dimensions in "em" only
		unit: ['days']
	});

	mycountdown.onEnd = function(){ // when target date has arrived
		switch(countDatePicker) {
		  case 0 :
		    CountdownDate = 'January 9, 2017 00:00:01';
		    countDatePicker = 1;
		    var Statement = '<div style="font-weight:bold; float:right">Until Next Build Season</div>';
		    coundown();
		    break;
		  case 1 :
		    CountdownDate = 'Febuary 23, 2017 00:00:01';
		    countDatePicker = 2;
		    Statement = '<div style="font-weight:bold; float:right">Until End Of Build Season</div>';
		    countdown();
		    break;
		  case 2 :
		    CountdownDate = 'May 1, 2016 00:00:01';
		    countDatePicker = 3;
		    Statement = '<div style="font-weight:bold; float:right">Until End Of Build Season</div>';
		    countdown();
		    break;
		  default :
		    CountdownDate = 'January 9, 2017 00:00:01';
		    countDatePicker = 1;
		    Statement = '<div style="font-weight:bold; float:right">Until Next Build Season</div>';
		    coundown();
		    break;
		}
	}
}
//end function
function end() {
  switch(endStatement) {
  	case "world" :
  	  $('#futuredate').html('<div style="font-weight:bold; float:right">World Competition</div>')
		  $('#CountdownTitle').html('<div style="font-weight:bold; float:right">Here We Come!</div>')
	  	break;
	  default:
	    
}
}
})
