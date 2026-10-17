import { useState } from 'react'

function Api() {
    const [data,setData]=useState<{name:string} | null>(null);

    const fetchUser = async()=> {
        const res= await fetch("https://jsonplaceholder.typicode.com/users");
        const data:{name:string}=await res.json();
        setData(data);
    }
  return (
    <div>
        {data && <h1 className=''>{data.name}</h1>}
        <button onClick={fetchUser}>Fetch User</button>
    </div>
  )
}

export default Api
