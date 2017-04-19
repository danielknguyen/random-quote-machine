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
				$('#Author')
					.text('- ' + author)
					.fadeIn('slow');
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
		$('#Author')
			.fadeOut('fast');
    	getNewQuote();	
  	})
  });