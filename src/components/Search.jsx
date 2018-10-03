import searchYouTube from '../lib/searchYouTube.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('searching...');
    console.log('state', this.state.value);
    console.log('callback', this.props);
    searchYouTube(this.state.value, this.props.getSearchResults);

  }

  

  render() {
    return (<div className="search-bar form-inline">
      <input className="form-control" type="text" value={this.state.query} onChange={this.handleChange}/>
      <button className="btn hidden-sm-down" onClick={() => { this.handleSubmit(event); }}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> );
  }  
}




// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

