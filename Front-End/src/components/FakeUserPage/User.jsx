import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(20);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch(`https://randomuser.me/api/?nat=br&results=${pageSize}&page=${pageNumber}`);
            const data = await response.json();
            setUsers(data.results);
        };
        fetchUsers();
    }, [pageNumber, pageSize]);

    const handlePageChange = (newPageNumber) => {
        setPageNumber(newPageNumber);
    }

    const handlePageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
        // reset the page number to 1 when changing the page size
        setPageNumber(1);
    }

    return (
        <div>
            {/* pagination UI elements go here */}
            <div className="mx-10 my-5 flex justify-between items-center">
                <div>
                    <label htmlFor="page-size">Show</label>
                    <select id="page-size" onChange={(e) => handlePageSizeChange(e.target.value)} value={pageSize}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    <label htmlFor="page-size">per page</label>
                </div>
                <div>
                    <button disabled={pageNumber === 1} onClick={() => handlePageChange(pageNumber - 1)}>Prev</button>
                    <span className="mx-2">Page {pageNumber}</span>
                    <button disabled={pageNumber === 20} onClick={() => handlePageChange(pageNumber + 1)}>Next</button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-6 my-10 mx-10">
                {users.map(user => (
                    <div class="col-span-1">
                        <div class="flex items-center w-full justify-center">
                            <div class="max-w-xs">
                                <div class="bg-white shadow-xl rounded-lg py-3 w-64">
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
            
        </div>
    );
};

export default UserList;

