import React, { useEffect, useRef, useState } from 'react';
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
  "FAILED": 2,
  "EMPTY": 3
}

const Explorer = () => {
  const _isMounted = useRef(true);
  const _timer = useRef(true);
  const dispatch = useDispatch();
  const explorerTabState = useSelector(explorerTabSelector);
  const [selections, setSelections] = useState([]);
  const [selectionsStatus, setSelectionsStatus] = useState(STATUS.LOADING);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState('not null');
  const [length, setLength] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const tab = findIdByName(tabs, "Selections");
    dispatch(select(tab.id));
    return () => {
      _isMounted.current = false;
      clearTimeout(_timer.current);
    }
  }, [])

  useEffect(() => {
    request_collection();
  }, [page])

  const request_collection = () => {
    if (nextPage !== null) {
      Axios.get('public/selections_with_games?page=' + page).then((result) => {
        _timer.current = setTimeout(() => {
          if (_isMounted.current) {
            const { data, next_page_url, per_page, to, total } = result.data;
            setNextPage(next_page_url);
            if (to === total) {
              setHasMore(false);
            }
            setLength(length + per_page);
            if (data.length === 0) {
              setSelectionsStatus(STATUS.EMPTY);
            } else {
              setSelections((prevState) => prevState.concat([...data]));
              setSelectionsStatus(STATUS.SUCCESS);
            }
          }
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
  let renderPage = null;

  if (selectionsStatus === STATUS.LOADING) {
    renderPage = <Loading />;
  } else if (selectionsStatus === STATUS.SUCCESS) {
    renderPage = (
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
    )
  } else if (selectionsStatus === STATUS.EMPTY) {
    renderPage = (
      <div className={"flex items-center justify-center w-full h-80"}>
        <h1 className={"text-xl text-white"}>nothing to show</h1>
      </div>
    )
  } else if (selectionsStatus === STATUS.FAILED) {
    renderPage = (
      <div className={"flex items-center justify-center w-full h-80"}>
        <h1 className={"text-xl text-white"}>Error</h1>
      </div>
    )
  } else {
    renderPage = (
      <div>unknown error</div>
    )
  }

  return (
    <Scafold className={''}>
      <Header />
      <div className={"flex flex-col items-center w-full h-auto"}>
        <div className={"w-full h-auto mt-0.5 bg-arc-dark_1 sticky top-0"}>
          <TabBar tabs={explorerTabState} />
        </div>
        <div className={"w-full h-auto"} >
          {renderPage}
        </div>
      </div>
    </Scafold >
  )
}

export default Explorer
