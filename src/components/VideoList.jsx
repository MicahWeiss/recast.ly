import VideoListEntry from './VideoListEntry.js';

var VideoList =(props) => {
  console.log('VL console log', props);
  const videos = props.videos;
  return(
  <div className="video-list">{
    videos.map(vid => <div key={vid.id.videoId}> <VideoListEntry video = {vid} handleClick={props.handleClick} /> </div> )}
  </div>)
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired,
//   onClickVideo: React.PropTypes.function.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
