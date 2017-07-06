import React from 'react';
import Dropzone from 'react-dropzone'
import request from 'SuperAgent';
import axios from 'axios';


class AddFile extends React.Component {

  constructor(props) {
    super(props)

    this.state={
      loading: false,
      landmarkName: '',
      landmarkLat: 'none',
      landmarkLon: ''
    }
  }

  renderNameLatLong(){

    if (this.state.loading) {
      return (
        <div><i className="fa fa-spinner fa-spin fa-3x"></i></div>
        )
    }

    if(this.state.landmarkLat === '') {
      return (
        <div>
        <p>The LandMark could not be located</p>
        <p>Please try another picture</p>
        </div>
        )
    }

    else if(this.state.landmarkLat !== 'none'){
      return (
      <div>
        <div>Name: {this.state.landmarkName}</div>
        <div>Latitude: {this.state.landmarkLat}</div>
        <div>Longitude: {this.state.landmarkLon}</div>
        {this.favoritesButton()}
        </div>
        )

    }

  }

  favoritesButton() {
    if (localStorage.getItem('token')) {
      return(
      <button onClick = {()=>this.addToFavorites()}>Add Landmark to Profile</button>
      )
    } else {
      return (
        <div> Sign in to add Landmark to Profile</div>
        )
    }
  }

  addToFavorites() {
    axios.post('/favorite', JSON.stringify({name: this.state.landmarkName, username: localStorage.username}))
    .then(function(response) {
      alert("added to destinations")

    })
    .catch(function(err) {
      console.log("err", err)
    })
  }

  renderThisIfTrue(){

  }


  render() {
    return (
      <section>
        <div className="title">LandMarks</div>
        <p className="text">Upload a picture to find the landmark name and location!</p>
        <Dropzone
          accept="image/jpeg, image/png"
          onDrop={this.previewFile.bind(this)}
          className="dropzonebox"
        >
            <button>Click Here to upload an image</button>
          </Dropzone>
          <br />
          <div className="imagebox hidden">
          <img width="300" id="uploadedimg"/>
          <br />
        {this.renderNameLatLong()}
        </div>
      </section>

    );
  }

  changeState(name, lat, lon) {
    this.setState({landmarkName: name, landmarkLon: lon, landmarkLat: lat, loading: false})
  }

  previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
  var imagebox = document.querySelector('.imagebox');

  this.setState({loading: true})

  var self = this

  reader.addEventListener("load", function () {
    preview.src = reader.result;
    imagebox.classList.remove('hidden');

    var base64String = reader.result.slice(23)

    var postBody = {
      "requests":[
        {
          "image":{
            "content": base64String
          },
          "features":[
            {
              "type":"LANDMARK_DETECTION",
              "maxResults":10
            }
          ]
        }
      ]
    }



    axios.post("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDPd1W6V0WOG8dEEPn5uc0ptOxmceClKCM", postBody)
    .then(function(response) {
      var name = response.data.responses[0].landmarkAnnotations[0].description
      var lat = response.data.responses[0].landmarkAnnotations[0].locations[0].latLng.latitude
      var lon = response.data.responses[0].landmarkAnnotations[0].locations[0].latLng.longitude
      self.changeState(name, lat, lon)

    })
    .catch(function(error) {
      console.log("error", error)
      var name = '';
      var lon = '';
      var lat = '';
      self.changeState(name, lat, lon)

    })

  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }

}

}
export default AddFile;