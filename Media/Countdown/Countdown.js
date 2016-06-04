jQuery(function($){ // on DOM load

//Eg #1
	var mycountdown = new cubecountdown({
		containerid: 'futuredate',
		targetdate: 'April 26, 2016 22:00:01',
		size: ['10em', '6em'], // specify cube dimensions in "em" only
		unit: ['days']
	})

	mycountdown.onEnd = function(){ // when target date has arrived
		$('#futuredate').html('<div style="font-weight:bold; float:right">World Competition</div>')
		$('#CountdownTitle').html('<div style="font-weight:bold; float:right">Here We Come!</div>')
	}


//Eg #2
	/*var christmasday = new Date( new Date().getFullYear(), 11, 25) // construct future date string dynamically

	var christmascountdown = new cubecountdown({
		containerid: 'dynamicfuturedate',
		targetdate: christmasday,
		unit: ['days']
	})

	christmascountdown.onEnd = function(){ // when target date has arrived
		$('#dynamicfuturedate').html('<b>Christmas has arrived!</b>')
	}
*/
})
