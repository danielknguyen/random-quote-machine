$(document).ready(function() {
	var quote;
	var author;
	//creating a function to generate quote
	function getNewQuote(){
		$.ajax({
			url: 'http://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				format: 'jsonp',
				lang: 'en',
			},
			success: function(quote){
				quote = quote.quoteText;
				author = quote.quoteAuthor;
				$('#quoteText')
					.text(quote)
					.fadeIn('slow');
				//Find out why it is coming out as undefined
				// $('#Author')
				// 	.text('- ' + author)
				// 	.fadeIn('slow');
				$('.quoteDiv')
					.css('font-family', 'cursive')
					.css('font-size', '24px')
					.css('background-color', '#ECECEC');
			}
		});
	};
	//randomColor CSS function
	// function randomColor () {
	// 	var colorAtRandom;
	// 	var colors = {
	// 		name: ['silver', 'white', 'maroon', 'olive', 'yellow', 'teal', 'aqua', 'fuchsia'],
	// 		hex: ['#C0C0C0', '#FFFFFF', '#800000','#808000', '#FFFF00', '#008080', '#00FFFF', '#FF00FF']
	// 	}
	// 	colorAtRandom = Math.floor(Math.random() * colors.hex.length);
	// 	newColor = colors.hex[colorAtRandom];
	// 	$('.quoteDiv').css('background-color', 'newColor');
	// };
	getNewQuote();
	//button on click to grab new quote
	$('#getQuote').on('click', function(){
    	$('#quoteText')
			.fadeOut('fast');
		// $('#Author')
		// 	.fadeOut('fast');
    	getNewQuote();
    	// randomColor();	
  	})
  	//twitter button on click to send quote as a tweet
  	$('.twitter-share').on('click', function(){
  		window.open('https://twitter.com/intent/tweet?text= ' + $('#quoteText').text(quote) + encodeURIComponent('#quotesForDays')
  		);
  	})
  });