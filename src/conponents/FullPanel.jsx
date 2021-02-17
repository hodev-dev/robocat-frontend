import React from 'react';

const FullPanel = (props) => {
  return (
    <div {...props} className={"items-center justify-center w-6/12 h-auto p-1 border bg-arc-dark_1 border-arc-dark_2"}>
      {props.children}
    </div>
  )
}

export default FullPanel
