import { useEffect, useState } from 'react'
import axios from 'axios'

interface UserData{
    id: number;
    username: string;
    password: string;
}

function Homepage() {
    const [data, setData] = useState <UserData[]> ([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8000")
                setData(res.data)
            } catch {

            }
        }
        fetchData()
    } )
  return (
      <div>
          {data.map(item => {
              return (
                  <div>
                      <p>{item.id}</p>
                      <p>{item.username}</p>
                      <p>{item.password}</p>
                  </div>
              )
        })}
      </div>
  )
}

export default Homepage