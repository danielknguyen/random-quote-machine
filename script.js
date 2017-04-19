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
	getNewQuote();
	//button on click to grab new quote
	$('#getQuote').on('click', function(){
    	$('#quoteText')
			.fadeOut('fast');
		// $('#Author')
		// 	.fadeOut('fast');
    	getNewQuote();	
  	})
  	//twitter button on click to send quote as a tweet
  	$('.twitter-share').on('click', function(){
  		window.open('https://twitter.com/intent/tweet?text= ' + encodeURIComponent(quote)
  		);
  	})
  });