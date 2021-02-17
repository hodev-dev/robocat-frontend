import React from 'react'

const IconButton = (props) => {
  return (
    <div dir={"rtl"} className={"flex flex-row items-center justify-center p-3 ml-1 font-semibold text-white cursor-pointer" + ' ' + props.className} onClick={props.onClick}>
      <div className={"ml-2"}>
        <props.icon size={props.size} color={props.color} />
      </div>
      <h1 className={"ml-2"}>
        {props.children}
      </h1>
    </div>
  )
}

export default IconButton
