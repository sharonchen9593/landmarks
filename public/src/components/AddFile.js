import React from 'react';
import Dropzone from 'react-dropzone'
import request from 'SuperAgent';
import axios from 'axios';


class AddFile extends React.Component {

  constructor(props) {
    super(props)

    this.state={
      landmarkName: '',
      landmarkLat: 'none',
      landmarkLon: ''
    }
  }

  renderNameLatLong(){

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
        </div>
        )

    }

  }


  render() {
    return (
      <section>
        <div className="title">Landmarks</div>
        <Dropzone
          accept="image/jpeg, image/png"
          onDrop={this.previewFile.bind(this)}
          style={{"width" : "50%", 'margin': "auto"}}
        >
            <p>Click Here to select files to upload.</p>
          </Dropzone>
          <img height="200" id="uploadedimg"/>
        {this.renderNameLatLong()}
      </section>

    );
  }

  changeState(name, lat, lon) {
    this.setState({landmarkName: name, landmarkLon: lon, landmarkLat: lat})
    console.log(this.state)
  }

  previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  var self = this

  reader.addEventListener("load", function () {
    preview.src = reader.result;

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
      console.log("response", response)
      console.log("data", name, lat, lon)
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