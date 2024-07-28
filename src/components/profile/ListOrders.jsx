import OrderItem from './OrderItem';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


export default function ListOrders() {
    const { user } = useContext(AuthContext);

    return (
        <div>
            {user.purchases.map((purchase,index) => (
                <OrderItem key={index} item={purchase}></OrderItem>
            ))}
        </div>
    );
}
