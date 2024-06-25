import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/kjha4951')
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);

    return (
        <div className='flex justify-between  items-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <div  style={{ marginLeft: '100px' }}>
                <h3>Github Followers: {data.followers}</h3>
                <h3>Github Following: {data.following}</h3>
                <h3>Github Public Repos: {data.public_repos}</h3>


            </div>

            <img style={{ marginRight: '200px' }} className='m-4' src={data.avatar_url} alt="Git picture" width={350} />
        </div>
    );
}

export default Github