import React, {useState} from 'react'

const CreateUser = () => {

    const [disabled,
        setDisabled] = useState('')

    const isKandidat = e => {
        setDisabled(e.target.value)
    }

    return (
        <div>
            <div className="create-user-container columns">
                <div className="input-container column">
                    <label>
                        <h5>Username</h5>
                    </label>
                    <input type="text" required/>
                    <br/>
                    <br/>
                    <label>
                        <h5>Fullname</h5>
                    </label>
                    <input type="text" required/>
                    <br/>
                    <br/>
                    <label>
                        <h5>Email</h5>
                    </label>
                    <input type="email" required/>
                    <br/>
                    <br/>
                    <label>
                        <h5>Password</h5>
                    </label>
                    <input type="password" required/>
                    <br/><br/>
                    <label>
                        <h5>Retype Password</h5>
                    </label>
                    <input type="password" required/>
                </div>
                <div className="input-container column">
                    <label>
                        <h5>Phone Number</h5>
                    </label>
                    <input type="text" required/>
                    <br/>
                    <br/>
                    <label>
                        <h5>ID Line</h5>
                    </label>
                    <input type="text" required/>

                    <br/>
                    <br/>
                    <label>
                        <h5>Address</h5>
                    </label>
                    <input type="text" required/>
                    <br/>
                    <br/>
                    <label>
                        <h5>Select Role</h5>
                    </label>
                    <div className="select">
                        <select name="role-user" id="role-user" onChange={isKandidat}>
                            <option value='1'>Super User</option>
                            <option value='2'>Admin</option>
                            <option value='3'>Lembaga</option>
                            <option value='4'>Massa</option>
                            <option value='5'>Kandidat</option>
                            <option value='6'>Gatau anjing</option>
                        </select>
                    </div>
                    <br/>
                    <br/>
                    <label>
                        <h5>Kandidat Jabatan</h5>
                    </label>
                    <div className="select">
                        <select name="kandidat" id="kandidat" disabled={disabled !== '5'}>
                            <option value='K3M'>K3M</option>
                            <option value='MWA-WM'>MWA-WM</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="has-text-centered my-5">
                <button class="button is-primary is-large">Submit</button>
            </div>

        </div>
    )
}

export default CreateUser
