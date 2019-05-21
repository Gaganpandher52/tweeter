
$( document ).ready(function() {

//this function is a dynamically create tweets using jquery
function createTweetElement(data){
    //frame for the tweet box
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
  //icon working on hover
  const $icon_1 = $('<img>').attr('src',"https://img.icons8.com/ios/20/000000/retweet-filled.png")
  .addClass('image1')
  const $icon_2 = $('<img>').attr('src',"https://img.icons8.com/ios/20/000000/facebook-like-filled.png")
  .addClass('image2')
  const $icon_3 = $('<img>').attr('src',"https://img.icons8.com/material/20/000000/hearts.png")
  .addClass('image3')
   
  const $hr = $('<hr>');
    
  $button.append($button)
  $header.append($avatar).append($name).append($handle);
  $footer.append($icon_3).append($icon_2).append($icon_1);

  return $tweet.append($header).append($content).append($hr).append($footer);
}

//this function help to convert unix time stamp to simple time
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

//this function render all the tweets
function renderTweets(tweets) {

  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (const i in tweets) {
    $('.tweets-container').prepend(createTweetElement(tweets[i]))
    }
  }

$( ".compose-button" ).click(function() {
  $( ".new-tweet" ).slideToggle( "slow", function() {
    $( "textarea" ).focus();
  });
});

//this method does the validation login  nad form submission
$(".tweet-form").submit(function(event){

  event.preventDefault();
  if(!$('textarea').val()){
    $( ".error-empty" ).slideDown( "slow", function() {
      $( ".error-empty" ).fadeOut(5000);
    });
  }else if($('textarea').val().length > 140){
    $( ".error-140" ).slideDown( "slow", function() {
      $( ".error-140" ).fadeOut(5000);
    });
  }else{
    var $form = $(this);
    let term = $form.find("textarea[name='text']").val();
    $.post('/tweets', {text:term}).done(data =>{
      $('textarea').val('');
        renderTweets([data])
        
    });
  }
  });//form submit

//this function used render and ajax to show tweets
function loadedTweets(){
  $.ajax({url:'/tweets',  method: 'GET' })
  .then(function (tweets) {
    renderTweets(tweets);
  });
}

loadedTweets();

});//document