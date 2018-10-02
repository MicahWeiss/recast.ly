import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from'../data/exampleVideoData.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideo : exampleVideoData[0],
      searchResults : exampleVideoData

    }
    this.handleClick = this.handleClick.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  handleClick(video) {
    this.setState({
      currentVideo: video
    })
  };

  getSearchResults(){
    console.log('get search from text input')
    
  }  

  render(){
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5>Look at this sweet-ass  seach bar!</h5>
            <Search getSearchResults={this.getSearchResults} />
          </div>
          
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={this.state.currentVideo} /></div>
        </div>
        <div className="col-md-5">
          <div><h5><VideoList 
            handleClick={this.handleClick} 
            videos={this.state.searchResults}
          /></h5></div>
        </div>
      </div>
    </div>
  )}
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
