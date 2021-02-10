import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../conponents/Header.jsx';
import Scafold from '../../conponents/Scafold.jsx';
import TabBar from "../../conponents/TabBar";
import { Axios } from '../../helper/axios_config';
import { explorerTabSelector, findIdByName, select, tabs } from '../../redux/explorerTabSlice';
import { platformSelector, setPlatforms } from '../../redux/platformsSlice';
import Loading from '../Loading.jsx';

const STATUS = {
  LOADING: 0,
  SUCCESS: 1,
  FAILED: 2
}

const Platforms = () => {
  const dispatch = useDispatch();
  const explorerTabState = useSelector(explorerTabSelector);
  const platformsState = useSelector(platformSelector);

  useEffect(() => {
    const tab = findIdByName(tabs, "Platforms");
    dispatch(select(tab.id));
  }, [])

  useEffect(() => {
    requestPlatforms();
  }, [])

  const requestPlatforms = () => {
    if (platformsState.data.length === 0) {
      Axios.get('public/get_platforms').then((response) => {
        console.log({ response });
        const { data } = response;
        dispatch(setPlatforms({ data: data, loading: STATUS.SUCCESS }));
      }).catch((err) => {
        console.log(err)
      });
    }
  }

  const renderPlatforms = () => {
    if (platformsState.loading === STATUS.LOADING) {
      return (
        <Loading />
      );
    } else if (platformsState.loading === STATUS.SUCCESS) {
      return platformsState.data.map((platform, index) => {
        return (
          <div key={platformsState.name} className={"flex items-center justify-center w-1/5 h-48 text-2xl text-white border bg-arc-dark_1 rounded-xl border-arc-dark_2"}>
            {platform.name}
          </div>
        );
      });
    } else {
      return (
        <h1>nothing</h1>
      )
    }
  };

  return (
    <Scafold className={''}>
      <Header />
      <div className={"flex flex-col items-center w-full h-auto"}>
        <div className={"w-full h-auto mt-0.5 bg-arc-dark_1"}>
          <TabBar tabs={explorerTabState} />
        </div>
        <div className={"flex flex-row flex-wrap w-full h-auto"}>
          {renderPlatforms()}
        </div>
      </div>
    </Scafold >
  )
}

export default Platforms
