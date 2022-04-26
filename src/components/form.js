import { useContext, useState } from 'react';
import UserContext from './context';
import Card from './card';

function Form(props) {
    const ctx = useContext(UserContext);

    const [balance, setBalance] = useState(ctx.balance);
    const [amount, setAmount] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState(false);

    function changeAmount(e) {
        setAmount(e.target.value);
    }

    function handleClick() {
        // validations.
        let value = parseInt(amount);
        if (isNaN(value)) {
            setError(true);
            setStatus("Please enter a valid amount.");
            setAmount("");
            return;
        } else if (value < 0) {
            setError(true);
            setStatus("Please enter a positive amount.");
            setAmount("");
            return;
        }

        let newBalance = props.changeBalance(balance, value);
        if (newBalance) {
            ctx.balance = newBalance;
            setError(false);
            setStatus(props.title + " successful!")
            setBalance(newBalance);
            setAmount("");
        } else {
            setError(true);
            setStatus("Sorry, the account cannot be overdrafted.");
            setAmount("");
        }
    }

    return (
        <Card 
            title={props.title}
            body={
                <>
                <h4>Balance: ${balance}</h4>
                {
                    status ?
                        <div className={error ? "alert alert-danger" : "alert alert-success"} role="alert">
                        {status}
                        </div>
                    :
                        <></>
                }
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">{props.title} $</span>
                    <input type="text" className="form-control" placeholder="Enter amount" aria-label="Enter amount" aria-describedby="basic-addon1" onChange={changeAmount} value={amount}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleClick} disabled={amount === ""}>{props.title}</button>
                </>
            }
        />
    );
}

export default Form;