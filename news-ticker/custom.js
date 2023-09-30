Cufon.replace('h1', { fontFamily: 'Neutraface Text Bold' });
Cufon.replace('h3', { fontFamily: 'Neutraface Text Bold' });
Cufon.replace('#top-links #sidebar-title a', { fontFamily: 'Neutraface Text Bold' });
Cufon.replace('#sswc-title', { fontFamily: 'Chalkboard' });

var count = 0;

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function oh_ticker(element,START_DATE,INTERVAL,INCREMENT,START_VALUE) {
	var START_DATE = new Date(START_DATE); // put in the starting date here
	var INTERVAL = Number(INTERVAL); // in seconds
	var INCREMENT =  Number(INCREMENT); // increase per tick
	var START_VALUE = Number(START_VALUE); // initial value when it's the start date
	
	var msInterval = INTERVAL * 1000;
	var now = new Date();
	count = Math.ceil(parseInt((now - START_DATE)/msInterval) * INCREMENT + START_VALUE);
	document.getElementById(element).innerHTML = addCommas(count);
	setInterval(function() { countRefresh(INCREMENT,element)}, msInterval);
}

function countRefresh(INCREMENT,element) {
	 count += INCREMENT; 
	 var newNum = Math.ceil(count);
	 document.getElementById(element).innerHTML = addCommas(newNum);
}

function countryInfo(selection) {
    alert("Selections " + selection.toLowerCase());	
}

function prettyLaunch(linkurl, title) {
	document.getElementById("prettyLink").href = linkurl;
	$("#prettyLink").click();
}
 
 $(document).ready(function(){

	$("#home-ticker-list").jCarouselLite({
		vertical: true,
		hoverPause:false,
		visible: 1,
		auto:5000,
		speed:1000
	});
	
	$("a[rel^='lightbox']").prettyPhoto({theme:'light_rounded',social_tools:false});
	$("a[rel^='mapbox']").prettyPhoto({theme:'light_square',social_tools:false});		
});
 
 function slideSwitch(wrapper) {
    var $active = $(wrapper + ' DIV.active');

    if ( $active.length == 0 ) $active = $(wrapper + ' DIV:last');

    var $next =  $active.next().length ? $active.next()
        : $(wrapper + ' DIV:first');

    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );


    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}