import React from 'react';
import Dropzone from 'react-dropzone'
import request from 'SuperAgent';
import axios from 'axios';



class Basic extends React.Component {


  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
          accept="image/jpeg, image/png"
          onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        </section>
    );
  }


onDrop(files) {
  axios.post('/upload')
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