import Form from './form';

function Deposit() {
 
    function changeDeposit(balance, amount) {
        return balance + amount;
    }

    return (
        <Form title="Deposit" changeBalance={changeDeposit}/>
    );
}

export default Deposit;