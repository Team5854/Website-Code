jQuery(function($){ // on DOM load

//create value with date.
var CountdownDate = 'January 9, 2017 00:00:01';
var Statement = '<div style="font-weight:bold; float:right">Until Next Build Season</div>';

countdown(); //calls countdown function.

//function for countdown.
function countdown () {
  
  //beginning of page set text to title
  $( document ).ready(function() {
		$('#CountdownTitle').html(Statement);  //prints the variable statement under the countdown.
  });

    //Main Countdown script.
	var mycountdown = new cubecountdown({
		containerid: 'futuredate',
		targetdate: CountdownDate,
		size: ['10em', '6em'], // specify cube dimensions in "em" only
		unit: ['days']
	});

	mycountdown.onEnd = function(){ // when target date has arrived
		end("world");
		}
	}


//end function
function end(endStatement) {
  switch(endStatement) {
  	case "world" :ki0
  	  $('#futuredate').html('<div style="font-weight:bold; float:right">World Competition</div>');
		  $('#CountdownTitle').html('<div style="font-weight:bold; float:right">Here We Come!</div>');
	  	break;
	  case "ERROR":
	    $('#futuredate').html('<div style="font-weight:bold; float:right"><<<ERROR>>> <<<ERROR>>></div>');
	    $('#CountdownTitle').html('<div style="font-weight:bold; float:right">FIX COMING SOON</div>');
	    break;
	  default:
	    $('#CountdownTitle').html('<div Style="font-weight:bold; float:right"><<<ERROR LOADING CONTENT>>></div>');
	    
}
}
})
