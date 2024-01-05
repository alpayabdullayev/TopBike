import React from 'react'

const Button = ({children,bgColor,bghoverColor}) => {
  return (
    <>
    <div>
        <button className={`${bgColor}  text-white hover:${bghoverColor} py-2 px-4 border border-solid border-white duration-500`}>
            {children}
        </button>
    </div>
    </>
  )
}

export default Button