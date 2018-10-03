import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (searchText, callback) => {
  console.log('searchYT called');
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: YOUTUBE_API_KEY,
    q: searchText,
    maxResults: 5,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      console.log('search done', callback);
      if (callback) {
        console.log('callback found');
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchYouTube;

