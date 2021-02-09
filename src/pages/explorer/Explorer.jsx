import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../conponents/Header.jsx';
import Scafold from '../../conponents/Scafold.jsx';
import Selection from '../../conponents/Selection';
import TabBar from "../../conponents/TabBar";
import { Axios } from '../../helper/axios_config';
import { explorerTabSelector, findIdByName, select, tabs } from '../../redux/explorerTabSlice';
import Loading from '../Loading';

const STATUS = {
  "LOADING": 0,
  "SUCCESS": 1,
  "FAILED": 2
}

const Explorer = () => {
  const dispatch = useDispatch();
  const explorerTabState = useSelector(explorerTabSelector);
  const [selections, setSelections] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState('not null');
  const [length, setLength] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const tab = findIdByName(tabs, "Selections");
    dispatch(select(tab.id));
  }, [])

  useEffect(() => {
    request_collection();
  }, [page])

  const request_collection = () => {
    if (nextPage !== null) {
      Axios.get('public/selections_with_games?page=' + page).then((result) => {
        setTimeout(() => {
          const { data, next_page_url, per_page, to, total } = result.data;
          setNextPage(next_page_url);
          if (to === total) {
            setHasMore(false);
          }
          setLength(length + per_page);
          setSelections((prevState) => prevState.concat([...data]));
        }, 2000);
      }).catch((err) => {
      });
    }
  };

  const fetchMore = () => {
    console.log("fetch more  data");
    if (nextPage !== null) {
      setPage(page + 1);
    }
  };

  const refreshData = () => {
    console.log("refresh data");
    return 0;
  }

  return (
    <Scafold className={''}>
      <Header />
      <div className={"flex flex-col items-center w-full h-auto"}>
        <div className={"w-full h-auto mt-0.5 bg-arc-dark_1"}>
          <TabBar tabs={explorerTabState} />
        </div>
        <div className={"w-full h-auto"} >
          <InfiniteScroll
            dataLength={length}
            next={fetchMore}
            scrollThreshold={1}
            hasMore={hasMore}
            loader={<Loading />}
            endMessage={
              <p className={"w-full p-5 text-2xl text-center text-white"}>Yay! You have seen it all</p>
            }
            refreshFunction={refreshData}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
            }
          >
            <Selection selection={selections} />
          </InfiniteScroll>
        </div>
      </div>
    </Scafold >
  )
}

export default Explorer
