import React, { Component} from 'react'
import NavBerkas from 'components/Navbar/NavBerkas.js'
import Footer from 'components/Footer'
import DarkBlue from 'layouts/DarkBlue'
import Button from 'components/Button'

import '../../styles/pages/Berkas.scss'

class PengembalianBerkas extends Component {
    state={
        fileberkas: null,
        filename: null
    }

    handleFile = (e) => {
        this.setState({fileberkas:e.target.files[0]});
        this.setState({filename:e.target.files[0].name});
    }

    handlecustom = () => {
        const realFileBtn = document.getElementById("filezip");
        realFileBtn.click();
    }

    validateFile = (file) => {
        var filename = file.name; 
        var formatfile = filename.substring(filename.lastIndexOf('.')+1);
        if(!formatfile.match("zip")){
            alert("Format file must zip");
            return false;
        }
        return true;
    }

    validateForm = () => {
        if (this.state.fileberkas) {
            return this.validateFile(this.state.fileberkas);
        }
        else {
            return false;   
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const form = document.forms['FormKembalikanBerkas'];
        let scriptURL = "https://script.google.com/macros/s/AKfycbx840cGMu_0dGtqs1IwpKHI-1FP3vsdcqK2TbgAxr2UlgbxkkJhwrEHIg/exec";
        if(this.validateForm()){
            var reader = new FileReader();
            var file = this.state.fileberkas;
            reader.onload = function(e){
                document.getElementById('filename').value = file.name;
                document.getElementById('filecontent').value = e.target.result.replace(/^.*,/, '');
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message));
                alert("Berhasil upload berkas");
                form.reset();
            }
            reader.readAsDataURL(file);
        }
    }
    render(){
        return (
            <div className="mainContainer">
                <div className="myContent berkas">
                    <DarkBlue />
                    <NavBerkas />
                    <h1 className="top-daf">Pengembalian Berkas</h1>
                    <form name="FormKembalikanBerkas">
                        <div className="btn-container">
                            <input type="file" name="file" id="filezip" hidden="hidden" onChange={this.handleFile} required/> 
                            <Button file="choose-file-btn" onClick={this.handlecustom}/>
                            <div id="custom-text">{this.state.filename}</div>
                        </div>
                        <input type="hidden" id="name" name="name" value="Tifany"/>
                        <input type="hidden" id="email" name="email" value="tifanyangelia28@gmail.com"/>
                        <input type="hidden" id="filename" name="filename"/>
                        <input type="hidden" id="filecontent" name="filecontent"/>

                        <div className="btn-container">
                            <Button file="kembalikan-berkas-btn" onClick={this.handleSubmit}/>
                        </div> 
                    </form>
                </div>
               <Footer hashtag="false" />
            </div>
        );
    }
}

export default PengembalianBerkas
