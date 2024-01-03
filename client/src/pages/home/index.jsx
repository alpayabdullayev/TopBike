import React, { useEffect, useState } from 'react'
import axios from "axios"
import img from "../../../../server/src/uploads/free-delivery.png"

const Home = () => {
  const [data, setData] = useState(null)

  async function getAllServices() {
   try {
    const res = await axios.get("http://localhost:7200/api/services")
    setData(res.data)
   } catch (error) {
    console.log(error);
   }
  }
  useEffect(() => {
    getAllServices()
  }, [])
  

  return (
    <>
    <div>
      {
        data && data.map((item)=>(
          <div>
            <img src={item.image} alt="" />
            <h1>{item.name}</h1>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default Home