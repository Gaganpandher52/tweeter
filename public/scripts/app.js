/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const tweetData = {
    
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

function createTweetElement(data){
    //const content = data.content.text;
    const $tweet = $('<article>').addClass('tweet')
    const $header = $('<header>').addClass('all-headers');
    
    const $name = $('<div>').text(data.user.name)
    .addClass('inner');
    const $avatar = $('<img>').attr('src',data.user.avatars.small)
    .addClass('image');
    const $handle = $('<div>').text(data.user.handle)
    .addClass('user-tag');
    const $content = $('<p>').text(data.content.text)
    .addClass('tweeter');
    const $footer = $('<footer>').text(data.created_at)
    .addClass('newFooter');
    
    $header.append($avatar).append($name).append($handle);

    return $tweet.append($header).append($content).append($footer);

    // const tweet = `
    // <article class="tweet newArticle" >
    //     <header class="all-headers">
    //         <div class="inner">${data.user.name}</div>
    //         <div class="image"><img  src="https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png" alt=""></div>
    //         <div class="user-tag">@Mrfields</div>
    //     </header>
    //     <p  id="hello" class="tweet">Now that you have the regular tweet</p>
    //     <hr>
    //     <footer class="newFooter">10 days ago</footer>
    // </article>
    // `
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.tweets-container').append($tweet);