import React from 'react';
import SelectionGames from './SelectionGames';

const Selection = (props) => {
  const { selection } = props;
  return selection.map((selection, index) => {
    return (
      <div key={selection.title} className={"w-full h-auto"}>
        <div className={"flex flex-col flex-1 h-auto rounded-xl"}>
          {/* <div className={"flex flex-row items-center w-full p-2 h-14"}>
            <div className={"flex justify-start flex-1 "}>
              <h1 className={"p-1 text-2xl text-gray-200"}>{ }</h1>
            </div>
            <div className={"flex justify-end flex-1"}>
              <h1 className={"self-end text-4xl text-white"}>{selection.title}</h1>
            </div>
          </div> */}
          <div className={"flex flex-row flex-wrap h-auto p-2 bg-arc-dark_1 rounded-xl"}>
            <SelectionGames key={selection.title.toString()} selection={selection} />
          </div>
        </div >
      </div>
    )
  });
}

export default React.memo(Selection);
