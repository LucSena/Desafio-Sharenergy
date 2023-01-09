import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://randomuser.me/api/?nat=br&results=20');
            const data = await response.json();
            setUsers(data.results);
        };
        fetchUsers();
    }, []);

    return (
        <div className="grid grid-cols-4 gap-6 my-10 mx-10">
            {users.map(user => (
                <div class="col-span-1">
                    <div class="flex items-center w-full justify-center">
                        <div class="max-w-xs">
                            <div class="bg-white shadow-xl rounded-lg py-3">
                                <div class="photo-wrapper p-2">
                                    <img class="w-32 h-32 rounded-full mx-auto" src={user.picture.large} alt={user.name.first} />
                                </div>
                                <div class="p-2">
                                    <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{user.name.first} {user.name.last}</h3>
                                    <div class="text-center text-gray-400 text-xs font-semibold">
                                        <p>{user.dob.age} Anos</p>
                                    </div>
                                    <table class="text-xs my-3">
                                        <tbody>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Endereço:</td>
                                                <td class="px-2 py-2">{user.location.street.name} {user.location.street.number}, {user.location.city}</td>
                                            </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Telefone:</td>
                                                <td class="px-2 py-2">{user.phone}</td>
                                            </tr>
                                            <tr>
                                                <td class="px-2 py-2 text-gray-500 font-semibold">Email:</td>
                                                <td class="px-2 py-2">{user.email}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>



    );
};

export default UserList;
