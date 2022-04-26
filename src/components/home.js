import { useContext } from 'react';
import UserContext from './context';
import Card from './card';
import logo from '../assets/bank.png';

function Home() {
    const ctx = useContext(UserContext);
    
    return (
        <Card 
            title="Bad Bank"
            description="Welcome to the Bad Bank"
            body={<img src={logo} className="card-img-bottom bank-image" alt="no image shown"/>}
        />
    );
}

export default Home;