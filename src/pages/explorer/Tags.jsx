import React, { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../conponents/Header.jsx';
import Scafold from '../../conponents/Scafold.jsx';
import TabBar from "../../conponents/TabBar";
import { Axios } from '../../helper/axios_config';
import { explorerTabSelector, findIdByName, select, tabs } from '../../redux/explorerTabSlice';
import { setTags, tagsSelector, unmountTags } from '../../redux/tagsSlice';
import Loading from '../Loading.jsx';

const STATUS = {
  LOADING: 0,
  SUCCESS: 1,
  FAILED: 2
}

const Tags = () => {
  const _isMounted = useRef(true);
  const _timer = useRef(true);
  const dispatch = useDispatch();
  const explorerTabState = useSelector(explorerTabSelector);
  const tagsState = useSelector(tagsSelector);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState('not null');
  const [length, setLength] = useState(0);
  const [hasMore, setHasMore] = useState(true);


  useEffect(() => {
    const tab = findIdByName(tabs, "Tags");
    dispatch(select(tab.id));
    return () => {
      _isMounted.current = false;
      dispatch(unmountTags());
      clearTimeout(_timer.current);
    }
  }, [])

  useEffect(() => {
    if (_isMounted.current) {
      requestTags();
    }
  }, [page])

  const requestTags = () => {
    if (nextPage !== null) {
      Axios.get('public/get_tags?page=' + page).then((result) => {
        _timer.current = setTimeout(() => {
          const { data, next_page_url, per_page, to, total } = result.data;
          setNextPage(next_page_url);
          if (to === total) {
            setHasMore(false);
          }
          setLength(length + per_page);
          dispatch(setTags(data));
        }, 2000);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  const renderTags = () => {
    return tagsState.data.map((tag) => {
      return (
        <div key={tag.slug} className={"flex items-center justify-center w-1/5 h-48 text-2xl text-white border bg-arc-dark_1 rounded-xl border-arc-dark_2"}>
          {"#" + tag.name}
        </div>
      );
    });
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
        <div className={"w-full h-auto"}>
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
            <div className={"flex flex-row flex-wrap w-full h-auto"}>
              {renderTags()}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </Scafold >
  )
}

export default Tags
