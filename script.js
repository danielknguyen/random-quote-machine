$(document).ready(function() {
	var quote;
	//creating a function to generate quote
	function getNewQuote(){
		$.ajax({
			url: 'https://random-quote-generator.herokuapp.com/api/quotes/random',
			success: function(quote){
				quote = quote.quote + " - " + quote.author;
				$('#quoteText')
					.text(quote)
					.fadeIn('slow');
				$('.quoteDiv')
					.css('font-family', 'cursive')
					.css('font-size', '24px')
					.css('background-color', randomColor())
					.fadeIn('slow');
			}
		});
	};
	// randomColor CSS function
	function randomColor () {
		var colorAtRandom;
		var colors = {
			name: ['silver', 'white', 'red', 'meadow', 'yellow', 'teal', 'aqua', 'fuchsia'],
			hex: ['#C0C0C0', '#FFFFFF', '#EC644B','#1BBC9B', '#FFFF00', '#008080', '#00FFFF', '#FF00FF']
		}
		colorAtRandom = Math.floor(Math.random() * colors.hex.length);
		newColor = colors.hex[colorAtRandom];
		return newColor;
	};
	getNewQuote();
	//button on click to grab new quote and change background color
	$('#getQuote').on('click', function(){
    	$('#quoteText')
			.fadeOut('slow');
    	$('.quoteDiv')
    		.css('background-color', randomColor())
    		.fadeOut('slow');

    	getNewQuote();	
  	})
  	//twitter button on click to send quote as a tweet
  	$('.twitter-share').on('click', function(){
  		window.open('https://twitter.com/intent/tweet?text= ' + $('#quoteText').text(quote) + " " + encodeURIComponent('#quotesForDays')
  		);
  	})
  });