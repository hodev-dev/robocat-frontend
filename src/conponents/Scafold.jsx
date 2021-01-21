import React from 'react'

const Scafold = (props) => {
  return (
    <div className={"flex flex-col w-full h-screen bg-arc-dark_2" + ' ' + props.className}>
      {props.children}
    </div>
  )
}

export default Scafold
