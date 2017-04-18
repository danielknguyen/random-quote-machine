$(document).ready(function($) {
	// elimate storing data
	$.ajaxSetup ({
    	cache: false
  	});
	// generate new quote function on click
	$("#getNewQuote").on('click', function(){

		$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data) {
    		$(".quote").html(data[0].content + " - " + data[0].title)
    	});
	});
	//tweet on click
	$(".twitter-share").on('click', function(){
		window.open("https://twitter.com/intent/tweet" + (".quote").html(data[0].content + " - " + data[0].title))
	});

  });