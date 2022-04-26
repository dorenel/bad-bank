import { useContext } from 'react';
import UserContext from './context';
import Card from './card';

function AllData() {
    const ctx = useContext(UserContext);
    
    return (
        <Card
            title="All Data"
            body={
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ctx.users.map((item, index) => (
                            <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        />
    );
}

export default AllData;