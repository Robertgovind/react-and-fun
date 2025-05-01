import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://api.github.com/users/Robertgovind')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    },[])
  return (
    <>
    <div className='text-center m-4 bg-gray-600
    p-4 text-3xl' >
        <img className='' width={300} src={data?.avatar_url} alt='avatar' />
      <h2>Name: {data?.name}</h2>
      <h2>Followers: {data?.followers}</h2>
      <h2>Skills: {data?.bio}</h2>
    </div>
    </>
  )
}

export default Github
