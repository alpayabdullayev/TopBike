import React, { useEffect, useState } from 'react';

import axios from "axios"
import CollectionCard from '../collectionCard';

const Collection = () => {
  const [data, setData] = useState(null)

  async function getAllCollections() {
    const res = await axios.get("http://localhost:7200/api/collection/")
    setData(res.data)
  }

  useEffect(() => {
    getAllCollections()
  }, [])
  
  return (
    <>
      <section className='py-20' id='collection'>
        <div className="wrapper">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
           

            {
              data && data.map((item)=>(
                <CollectionCard key={item._id} item={item}/>
              ))
            }
          </div>    
        </div>
      </section>
    </>
  );
};

export default Collection;
