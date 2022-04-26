import Form from './form';

function Withdraw() {

    function changeWithdraw(balance, amount) {
        let newBalance = balance - amount;
        if (newBalance >= 0) {
            return newBalance;
        } else {
            return null;
        }
    }

    return (
        <Form title="Withdraw" changeBalance={changeWithdraw} />
    );
}

export default Withdraw;