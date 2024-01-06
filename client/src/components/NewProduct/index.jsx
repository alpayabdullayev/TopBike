import React from 'react'
import SectionTitle from '../sectionTitle'
import ProductCard from '../ProductCard'

const NewProduct = () => {
  return (
    <>
    <section id='newProduct' className='py-20 min-h-[100vh]'>
        <div className="wrapper">
            <SectionTitle children={"New Product"}/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    </section>
    </>
  )
}

export default NewProduct