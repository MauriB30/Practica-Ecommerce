import axios from 'axios';

export default async function addProduct(user,products,setUser) {
    const userUpdated = {
        ...user,
        purchases: [...user.purchases, ...products]
    };

    try {
        const response = await axios.patch(`http://localhost:3001/users/${user.id}`,userUpdated);
        console.log('User updated successfully', response.data);
        setUser(response.data);
    } catch (error) {
        console.error('Error updating user', error);
    }
}

