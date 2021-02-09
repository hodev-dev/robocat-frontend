import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

const TabBar = ({ tabs }) => {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
  }, [])

  const selectTab = (tab) => {
    history.push(tab.route)
  }

  const renderTabs = () => {
    return tabs.map((tab) => {
      return (
        <div onClick={() => selectTab(tab)} key={tab.id} className={`cursor-pointer flex items-center justify-center flex-1 ${(tab.selected) ? 'border-b-2 border-arc-accent_2' : ''} h-14 bg-arc-dark_1`}>
          <p className={"text-2xl font-bold text-white "}>{tab.name}</p>
        </div>
      )
    });
  }

  return (
    <div className={"flex flex-row flex-wrap w-full h-auto mt-2 rounded-xl"}>
      {renderTabs()}
    </div>
  )
}

export default TabBar
