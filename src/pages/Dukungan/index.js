import React, {useState, useEffect} from 'react'
import NavMain from 'components/Navbar/NavMain.js'
import Footer from 'components/Footer'
import DarkBlue from 'layouts/DarkBlue'
import Button from 'components/Button'
import Authenticated from 'layouts/Authenticated'
import { useAppContext } from 'libs/contextLib'

import '../../styles/pages/Dukungan.scss'

const LembarDukungan = (props) => {

    const [support1, setSupport1] = useState(true)
    const [support2, setSupport2] = useState(true)

    const {user} = useAppContext()
    const [pageUser, setPageUser] = useState({})

    useEffect(() => {
        if (user) {
            setPageUser(user)
        }
    }, [user])

    const handleSupport1 = (e) =>{
        handleSubmit(e,"dukungan1");
        setSupport1(false);
    }

    const handleSupport2 = (e) =>{
        handleSubmit(e,"dukungan2");
        setSupport2(false);
    }

    const handleSubmit = (e, formname) =>{
        e.preventDefault();
        const form = document.forms[formname];
        let scriptURL = "https://script.google.com/macros/s/AKfycbxesL1pljDg4e9XODi21hDMumP7vfKN1cj7KtsxbnMZgmKrAaQTLOkH/exec";
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));
        alert("Berhasil beri dukungan");
        form.reset();
    }

    return(
        <Authenticated>
            <div className="mainContainer">
                <div className="myContent dukungan">
                    <DarkBlue />
                    <NavMain logo={false}/>
                    <h1 className="title-dukungan">Lembar Dukungan</h1>
                    <ul>
                        <li>
                            <form name="dukungan1">
                                <div>
                                    <h3>Trian Verson - Fisika 17</h3> 
                                    <div className="flex-right">
                                        {support1 && <Button file="dukung-btn" onClick={handleSupport1}/>}
                                    </div>
                                </div>
                                <input type="hidden" name="name" value={pageUser.fullname}/>
                                <input type="hidden" name="nim" value={pageUser.nim}/>
                                <input type="hidden" name="dukung" value="Trian Verson - Fisika 17"/>
                            </form>
                        </li>
                        <li>
                            <form name="dukungan2">
                                <div>
                                    <h3>Nama Calon Kedua</h3> 
                                    <div className="flex-right">
                                        {support2 && <Button file="dukung-btn" onClick={handleSupport2}/>}
                                    </div>
                                </div>
                                <input type="hidden" name="name" value={pageUser.fullname}/>
                                <input type="hidden" name="nim" value={pageUser.nim}/>
                                <input type="hidden" name="dukung" value="Kandidat 2"/>
                            </form>
                        </li>
                    </ul>
                </div>
               <Footer hashtag="false" />
            </div>
        </Authenticated>
    )
}

export default LembarDukungan;