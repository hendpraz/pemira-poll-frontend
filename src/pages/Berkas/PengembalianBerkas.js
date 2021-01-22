import React, {useState, useEffect} from 'react'
import NavBerkas from 'components/Navbar/NavBerkas.js'
import Footer from 'components/Footer'
import DarkBlue from 'layouts/DarkBlue'
import Button from 'components/Button'
import Authenticated from 'layouts/Authenticated'
import { useAppContext } from 'libs/contextLib'

import '../../styles/pages/Berkas.scss'

const PengembalianBerkas = (props) => {

    const [fileberkas, setBerkas] = useState(null)
    const [filename, setFilename] = useState(null)

    const {user} = useAppContext()
    const [pageUser, setPageUser] = useState({})

    useEffect(() => {
        if (user) {
            setPageUser(user)
        }
    }, [user])

    const handleFile = (e) => {
        setBerkas(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const handlecustom = () => {
        const realFileBtn = document.getElementById("filezip");
        realFileBtn.click();
    }

    const validateFile = (file) => {
        var filename = file.name; 
        var formatfile = filename.substring(filename.lastIndexOf('.')+1);
        if(!formatfile.match("zip")){
            alert("Format file must zip");
            return false;
        }
        return true;
    }

    const validateForm = () => {
        if (fileberkas) {
            return this.validateFile(fileberkas);
        }
        else {
            return false;   
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = document.forms['FormKembalikanBerkas'];
        let scriptURL = "https://script.google.com/macros/s/AKfycbx840cGMu_0dGtqs1IwpKHI-1FP3vsdcqK2TbgAxr2UlgbxkkJhwrEHIg/exec";
        if(validateForm()){
            var reader = new FileReader();
            reader.onload = function(e){
                document.getElementById('filename').value = filename;
                document.getElementById('filecontent').value = e.target.result.replace(/^.*,/, '');
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message));
                alert("Berhasil upload berkas");
                form.reset();
            }
            reader.readAsDataURL(fileberkas);
        }
    }
    return (
        <Authenticated>    
            <div className="mainContainer">
                <div className="myContent berkas">
                    <DarkBlue />
                    <NavBerkas />
                    <h1 className="top-daf">Pengembalian Berkas</h1>
                    <form name="FormKembalikanBerkas">
                        <div className="btn-container">
                            <input type="file" name="file" id="filezip" hidden="hidden" onChange={handleFile} required/> 
                            <Button file="choose-file-btn" onClick={handlecustom}/>
                            <div id="custom-text">{filename}</div>
                        </div>
                        <input type="hidden" id="name" name="name" value={pageUser.fullname}/>
                        <input type="hidden" id="email" name="email" value={pageUser.email_non_itb}/>
                        <input type="hidden" id="filename" name="filename"/>
                        <input type="hidden" id="filecontent" name="filecontent"/>

                        <div className="btn-container">
                            <Button file="kembalikan-berkas-btn" onClick={handleSubmit}/>
                        </div> 
                    </form>
                </div>
               <Footer hashtag="false" />
            </div>
        </Authenticated>
    )
}

export default PengembalianBerkas
