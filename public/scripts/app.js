/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {



function createTweetElement(data){
    //const content = data.content.text;

    const $button = $('<$button>').addClass('compose-button');
    const $tweet = $('<article>').addClass('tweet')
    const $header = $('<header>').addClass('all-headers');
    
    const $name = $('<div>').text(data.user.name)
    .addClass('inner');
    const $avatar = $('<img>').attr('src',data.user.avatars.small)
    .addClass('image');
    const $handle = $('<div>').text(data.user.handle)
    .addClass('user-tag');
    const $content = $('<p>').text(data.content.text)
    .addClass('content');
    const $footer = $('<footer>').text(formatTime(data.created_at))
    .addClass('newFooter');
    const $hr = $('<hr>');
    
    $button.append($button)
    $header.append($avatar).append($name).append($handle);

    return $tweet.append($header).append($content).append($hr).append($footer);
}
function formatTime (time) {
	var diff = Math.floor((Date.now() - time) / 1000);
  var interval = Math.floor(diff / 31536000);

  if (interval >= 1) {
    return interval + "y" + " ago";
  }
  interval = Math.floor(diff / 2592000);
  if (interval >= 1) {
    return interval + "m" + " ago";
  }
  interval = Math.floor(diff / 604800);
  if (interval >= 1) {
    return interval + "w" + " ago";
  }
  interval = Math.floor(diff / 86400);
  if (interval >= 1) {
    return interval + "d" + " ago";
  }
  interval = Math.floor(diff / 3600);
  if (interval >= 1) {
    return interval + "h" + " ago";
  }
  interval = Math.floor(diff / 60);
  if (interval >= 1) {
    return interval + " min" + " ago";
  }
  return "<1m";
}
function renderTweets(tweets) {
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      //let value = [];
      for (const i in tweets) {
        $('.tweets-container').prepend(createTweetElement(tweets[i]))
      }
  }

$( ".compose-button" ).click(function() {
  $( ".new-tweet" ).slideToggle( "slow", function() {
    $( "textarea" ).focus();

    // Animation complete.
  
  });
});





//function isValidate()

function clearTweet(){
    $('textarea').val('');
}

$(".tweet-form").submit(function(event){
    event.preventDefault();
    if(!$('textarea').val()){
      $( ".error-empty" ).slideDown( "slow", function() {
        $( ".error-empty" ).slideUp();
      });
      const $name = $('<p>').text('empty tweet')
    }else if($('textarea').val().length > 140){
      $( ".error-140" ).slideDown( "slow", function() {

      });
    }else{
    
    var $form = $(this);
    let term = $form.find("textarea[name='text']").val();
    //let url = $form.attr("action");
    
    $.post('/tweets', {text:term}).done(function(){
        console.log(term);
        loadedTweets();
        clearTweet();
    });
  }
  });//form submit

  function loadedTweets(){
    $.ajax({url:'/tweets',  method: 'GET' })
    .then(function (tweets) {
      //$('.tweet-container')
      renderTweets(tweets);
    });
}

renderTweets(loadedTweets());

});//document