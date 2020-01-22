import React from "react";
import axios from "axios";
import API_KEY from "../secrets";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      Input: "",
      api_key: API_KEY,
      videos: "",
      urls: []
    };
  }

  handleInputField = event => {
    let target = event.target.value;
    console.log(event.target.value);
    this.setState({
      Input: target
    });
  };

  HandleSubmitForm = async event => {
    event.preventDefault();
   // const {Input, api_key} = this.state
    console.log("submitting");
    // let URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${Input}&key=${api_key}`
    let VideoURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=dogs&key=AIzaSyAWTvC5aCiFsGQcurd_6ZwBleIoboGd9JY`;
    try {
      const response = await axios.get(VideoURL);
      console.log(response);
      let items = response.data.items;
      this.setState({ videos: items });
    } catch (error) {
      console.log(error, "error with network request");
    }
    this.displayThumbnail();
  };

  displayThumbnail = () => {
    const { urls } = this.state;
    const { videos } = this.state;
    for (let i = 0; i < videos.length; i++) {
      urls.push(videos[i].snippet.thumbnails.high.url);
    }
  };

  SelectingThumbnail =(event) =>{
      console.log('selecting Thumbnail:', event.target.value)
  }
  

  render() {
    const { videos, urls } = this.state;
    return (
      <div className="HomePage">
        <div className ='SearchBar'>
          <h1> Home Page </h1>
          <form>
            <input
              onChange={this.handleInputField}
              id="InputField"
              type="text"
              value={this.state.Input}
              placeholder=""
            />
            <button onClick={this.HandleSubmitForm} type="submit">
              {" "}
              Submit
            </button>
          </form>
        </div>


<div> 
   
</div>
        <div className="results"> 
        
         <p> No Search Results.Search for videos above!   </p>
          {
        
          urls.map((url, i) => {
            return (
              <ul  >
                <li onClick ={this.SelectingThumbnail} >
                  {" "}
                  <img src={url} value={url} key={i} alt ='video thumbnail' />
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
