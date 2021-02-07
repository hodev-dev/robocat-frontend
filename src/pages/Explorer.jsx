import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../conponents/Header.jsx';
import Scafold from '../conponents/Scafold.jsx';
import Selection from '../conponents/Selection';
import { Axios } from '../helper/axios_config';
import Loading from './Loading';
const STATUS = {
  "LOADING": 0,
  "SUCCESS": 1,
  "FAILED": 2
}

const Explorer = () => {
  const [selections, setSelections] = useState([]);
  const [selectionsStatus, setSelectionsStatus] = useState(STATUS.LOADING);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState('not null');
  const [length, setLength] = useState(0);
  const [hasMore, setHasMore] = useState(true);

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
          setSelectionsStatus(STATUS.SUCCESS);
        }, 2000);
      }).catch((err) => {
        setSelectionsStatus(STATUS.FAILED);
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
          <div className={"flex flex-row flex-wrap w-full h-auto mt-2 rounded-xl"}>
            <div className={"flex items-center justify-center flex-1 border-b-2 border-arc-accent_2 h-14 bg-arc-dark_1"}>
              <p className={"text-2xl font-bold text-white"}>Selections</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-14 bg-arc-dark_1"}>
              <p className={"text-2xl font-bold text-white"}>Genres</p>
            </div>
            <div className={"flex items-center justify-center flex-1 ml-5 h-14 bg-arc-dark_1"}>
              <p className={"text-2xl font-bold text-white"}>Platforms</p>
            </div>
            <div className={"flex items-center justify-center flex-1 ml-5 h-14 bg-arc-dark_1"}>
              <p className={"text-2xl font-bold text-white"}>Stores</p>
            </div>
            <div className={"flex items-center justify-center flex-1 ml-5 h-14 bg-arc-dark_1"}>
              <p className={"text-2xl font-bold text-white"}>Collections</p>
            </div>
            <div className={"flex items-center justify-center flex-1 ml-5 h-14 bg-arc-dark_1"}>
              <p className={"text-2xl font-bold text-white"}>Tags</p>
            </div>
          </div>
        </div>
        <div className={"w-11/12 h-auto"} >
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
    </Scafold>
  )
}

export default Explorer
