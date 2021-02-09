import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../conponents/Header.jsx';
import Scafold from '../../conponents/Scafold.jsx';
import TabBar from "../../conponents/TabBar";
import { explorerTabSelector } from '../../redux/explorerTabSlice';


const Genres = () => {
  const explorerTabState = useSelector(explorerTabSelector);

  return (
    <Scafold className={''}>
      <Header />
      <div className={"flex flex-col items-center w-full h-auto"}>
        <div className={"w-full h-auto mt-0.5 bg-arc-dark_1"}>
          <TabBar tabs={explorerTabState} />
        </div>
        <div className={"w-11/12 h-auto"} >
          <h1>{'Category'}</h1>
        </div>
      </div>
    </Scafold >
  )
}

export default Genres
