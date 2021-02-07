import React from 'react'

const Scafold = (props) => {
  return (
    <div {...props} className={"flex flex-col w-full min-h-screen bg-arc-dark_2" + ' ' + props.className} scrollableTarget="scrollableDiv">
      {props.children}
    </div>
  )
}

export default Scafold
