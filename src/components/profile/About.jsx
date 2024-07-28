import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function About() {
    const { user } = useContext(AuthContext);

    return (
        <div className="basis-1/4 h-min py-6 border-2 rounded border-orange-400">
            <h2 className="text-center text-2xl font-medium">My profile</h2>
            <div className="flex flex-col mt-10 gap-3 px-5">
                <label className='className="block text-sm font-medium text-gray-700"'>Name</label>
                <span className="bg-white rounded p-2">{user.firstName} {user.lastName}</span>
                <label className='className="block text-sm font-medium text-gray-700"'>Email</label>
                <span className="bg-white rounded p-2">{user.email}</span>
                <label className='className="block text-sm font-medium text-gray-700"'>Phone</label>
                <span className="bg-white rounded p-2">+23 40512312</span>
                <label className='className="block text-sm font-medium text-gray-700"'>Address</label>
                <span className="bg-white rounded p-2">Lorem ipsum dolor sit</span>
            </div>
        </div>
    )
}
