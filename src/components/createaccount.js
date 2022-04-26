import { useContext, useState } from 'react';
import UserContext from './context';
import Card from './card';

function CreateAccount() {
    const ctx = useContext(UserContext);

    const [success, setSuccess] = useState(false);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    
    function changeName(e) {
        setName(e.target.value);
    }

    function changeEmail(e) {
        setEmail(e.target.value);
    }

    function changePassword(e) {
        setPassword(e.target.value);
    }

    function handleClick() {
        if (!name) {
            setError("Please enter a name.");
            return;
        } else if (!email) {
            setError("Please enter an email.");
            return;
        } else if (!password || password.length < 8) {
            setError("The password needs to contain at least 8 characters.");
            return;
        }
        ctx.users.push({ name: name, email: email, password: password, balance: 0});
        setSuccess(true);
    }

    function refresh() {
        setName(null);
        setEmail(null);
        setPassword(null);
        setError(null);
        setDisabled(true);
        setSuccess(false);
    }

    return (
        <Card
            title="Create Account" 
            body={ 
                (!success) ?
                <>
                {
                    (error) ?
                        <div className="alert alert-danger" role="alert">
                        {error}
                        </div>
                    : <></>
                }
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" onChange={changeName}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" onChange={changeEmail}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Password</span>
                    <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={changePassword}/>
                </div>
                <input className="btn btn-primary" type="button" value="Create Account" onClick={handleClick} disabled={!name && !email && !password}></input>
                </>
                :
                <>
                <div className="alert alert-success" role="alert">
                    Account created successfully!
                </div>
                <button type="button" className="btn btn-primary" onClick={refresh}>Add Another Account</button>
                </>
            }
        />
    );
}

export default CreateAccount;