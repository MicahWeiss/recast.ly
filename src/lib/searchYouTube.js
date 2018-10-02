import YOUTUBE_API_KEY from '../config/youtube.js'

var searchYouTube = (searchText, callback) => {
  $.ajax({
    url: '',
    data: {
       format: 'json'
    },
    dataType: 'jsonp',
    success: function(data) {
      
    },
    type: 'GET',
    options: {
      query: searchText,
      max: 5,
      key: YOUTUBE_API_KEY
    }
 });
};

export default searchYouTube;
