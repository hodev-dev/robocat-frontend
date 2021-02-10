import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../conponents/Header.jsx';
import Scafold from '../../conponents/Scafold.jsx';
import TabBar from "../../conponents/TabBar";
import { Axios } from '../../helper/axios_config';
import { explorerTabSelector, findIdByName, select, tabs } from '../../redux/explorerTabSlice';
import { setStores, storeSelector } from '../../redux/storesSlice';
import Loading from '../Loading.jsx';

const STATUS = {
  LOADING: 0,
  SUCCESS: 1,
  FAILED: 2
}

const Stores = () => {
  const dispatch = useDispatch();
  const explorerTabState = useSelector(explorerTabSelector);
  const storesState = useSelector(storeSelector);

  useEffect(() => {
    const tab = findIdByName(tabs, "Stores");
    dispatch(select(tab.id));
  }, [])

  useEffect(() => {
    requestStores();
  }, [])

  const requestStores = () => {
    if (storesState.data.length === 0) {
      Axios.get('public/get_stores').then((response) => {
        console.log({ response });
        const { data } = response;
        dispatch(setStores({ data: data, loading: STATUS.SUCCESS }));
      }).catch((err) => {
        console.log(err)
      });
    }
  }

  const renderStores = () => {
    if (storesState.loading === STATUS.LOADING) {
      return (
        <Loading />
      );
    } else if (storesState.loading === STATUS.SUCCESS) {
      return storesState.data.map((store) => {
        return (
          <div key={store.slug} className={"flex items-center justify-center w-1/5 h-48 text-2xl text-white border bg-arc-dark_1 rounded-xl border-arc-dark_2"}>
            {store.name}
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
          {renderStores()}
        </div>
      </div>
    </Scafold >
  )
}

export default Stores
