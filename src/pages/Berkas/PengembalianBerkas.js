import React, { Component} from 'react'
import NavBerkas from 'components/Navbar/NavBerkas.js'
import Footer from 'components/Footer'
import DarkBlue from 'layouts/DarkBlue'

// import '../../styles/pages/Berkas.scss'

class PengembalianBerkas extends Component {
    state={
        name: "Tifany",
        email: "tifanyangelia28@gmail.com",
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
            document.getElementById('name').value = this.state.name;
            document.getElementById('email').value = this.state.email;
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
                    <h1>Halo, {this.state.name}</h1>
                    <form className="container p-3" name="FormKembalikanBerkas">
                        <div className="btninputfile">
                            <input type="file" name="file" id="filezip" hidden="hidden" onChange={this.handleFile} required/> 
                            <button type="button" class="btn-submit" id="custom-buttom" onClick={this.handlecustom}><i class="fa fa-upload" aria-hidden="true"></i> choose a file</button>
                            <div id="custom-text">{this.state.filename}</div>
                        </div>
                        <input type="hidden" id="name" name="name"/>
                        <input type="hidden" id="email" name="email"/>
                        <input type="hidden" id="filename" name="filename"/>
                        <input type="hidden" id="filecontent" name="filecontent"/>
                        
                        <div className="box-submitted">
                            <button className="submitted" type="button" onClick={this.handleSubmit}>Upload Berkas</button>
                        </div>
                    </form>
                </div>
               <Footer hashtag="false" />
            </div>
        );
    }
}

export default PengembalianBerkas
