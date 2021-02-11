import React, { useEffect, useRef } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import Cover1 from '../../assets/img/cover.jpg';
import Header from '../../conponents/Header';
import Scafold from '../../conponents/Scafold';
import TabBar from "../../conponents/TabBar";
import { findIdByName, gameTabSelector, select, tabs } from '../../redux/gameTabSlice';

const Detail = () => {
  const dispatch = useDispatch();
  const _isMounted = useRef(true);
  const gameTabState = useSelector(gameTabSelector);

  useEffect(() => {
    const tab = findIdByName(tabs, "Details");
    dispatch(select(tab.id));
    return () => {
      _isMounted.current = false;
    }
  }, [])

  return (
    <Scafold className={'items-center'}>
      <Header />
      <div className={'flex flex-row w-full mt-0.5 h-auto p-1 rounded-lg bg-arc-dark_1 opacity-90'}>
        <div className={'flex items-center justify-center w-1/12 h-auto p-1 rounded-xl'}>
          <img className={"object-cover w-20 h-20 border-4 rounded-full border-arc-accent_3"} src={Cover1} alt="" srcset="" />
        </div>
        <div className={"flex flex-col justify-center w-9/12 h-auto"}>
          <h1 className={"text-2xl font-medium text-white "}>Grand Theft Auto V</h1>
          <h1 className={"font-mono text-lg text-white"}>Rockstar Games went bigger, since their previous i...</h1>
        </div>
        <div className={"flex flex-row items-center justify-center w-2/12 h-auto "}>
          <h1 className={"flex items-center justify-center w-48 h-12 text-xl font-medium text-center text-white rounded-lg bg-arc-dark_2"}>Follow</h1>
        </div>
      </div>
      <div className={"w-full h-auto mt-0.5 bg-arc-dark_1"}>
        <TabBar tabs={gameTabState} />
      </div>
      <div>
        <h1>Detail</h1>
      </div>
    </Scafold>
  )
}

export default Detail
