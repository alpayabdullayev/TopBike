import React from 'react'

const Button = ({children,bgColor,bghoverColor,wFull}) => {
  return (
    <>
    <div>
        <button className={`${bgColor} ${wFull}  text-white hover:${bghoverColor} py-2 px-4 duration-500`}>
            {children}
        </button>
    </div>
    </>
  )
}

export default Button