import React from 'react';
import Dropzone from 'react-dropzone'
import request from 'SuperAgent';
import axios from 'axios';



class Basic extends React.Component {

  constructor(props) {
    super(props)

    this.state={
      landmarkName: 'Loading...',
      landmarkLat: 'Loading...',
      landmarkLon: 'Loading...'
    }
  }


  render() {
    return (
      <section>
        <div className="title">Landmarks</div>
        <input type="file" onChange={() => this.previewFile()} className="uploadimg"></input>
        <img src="" height="200" alt="Image preview..." id="uploadedimg"/>
        <div>Name: {this.state.landmarkName}</div>
        <div>Latitude: {this.state.landmarkLat}</div>
        <div>Longitude: {this.state.landmarkLon}</div>
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
    })

  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }

}

  onDrop(files) {
    var file = files[0]
    console.log("file", file.preview)
    console.log("JSON", JSON.stringify(file))
    //axios.post('/upload', files[0])
      // console.log(files);
      //   var req = request.post('/upload');
      //     files.forEach((file)=> {
      //         req.attach(file.name, file);
      //     });
      //     req.end(function(err,res){
      //       if (err || !res.ok) {
      //         alert('oh no! Error');
      //       } else {
      //         alert('yay got' + JSON.stringify(res.body));
      //       }
      //     });
  }



}
export default Basic;