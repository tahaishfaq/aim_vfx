import React from 'react'

const Heading = ({children, className}) => {
  return (
    <h1
    className={` ${className}`}
    >
        {children}
    </h1>
  )
}

export default Heading