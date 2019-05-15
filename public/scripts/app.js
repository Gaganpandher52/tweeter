/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const data = [
    {
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
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

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
    .addClass('content');
    const $footer = $('<footer>').text(formatTime(data.created_at))
    .addClass('newFooter');
    const $hr = $('<hr>');
    
    $header.append($avatar).append($name).append($handle);

    return $tweet.append($header).append($content).append($hr).append($footer);

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
function formatTime (time) {
	var diff = Math.floor((Date.now() - time) / 1000);
  var interval = Math.floor(diff / 31536000);

  if (interval >= 1) {
    return interval + "y";
  }
  interval = Math.floor(diff / 2592000);
  if (interval >= 1) {
    return interval + "m";
  }
  interval = Math.floor(diff / 604800);
  if (interval >= 1) {
    return interval + "w";
  }
  interval = Math.floor(diff / 86400);
  if (interval >= 1) {
    return interval + "d";
  }
  interval = Math.floor(diff / 3600);
  if (interval >= 1) {
    return interval + "h";
  }
  interval = Math.floor(diff / 60);
  if (interval >= 1) {
    return interval + " m";
  }
  return "<1m";
}
function renderTweets(tweets) {
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      let value = [];
      for (const i in tweets) {
        value.push(createTweetElement(tweets[i]));
        
      }
      return $('.tweets-container').append(value);
  }
renderTweets(data);