import React, { useEffect, useRef } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { FiArrowUp, FiFlag, FiMessageCircle } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cover1 from '../../assets/img/cover3.jpg';
import Header from '../../conponents/Header';
import Scafold from '../../conponents/Scafold';
import TabBar from "../../conponents/TabBar";
import { findIdByName, gameTabSelector, select, tabs } from '../../redux/gameTabSlice';

const Game = () => {
  const dispatch = useDispatch();
  const _isMounted = useRef(true);
  const gameTabState = useSelector(gameTabSelector);

  useEffect(() => {
    const tab = findIdByName(tabs, "Posts");
    dispatch(select(tab.id));
    return () => {
      _isMounted.current = false;
    }
  }, [])

  return (
    <Scafold className={'relative items-center'}>
      <Header />
      <div className={'flex flex-row w-full mt-0.5 h-auto p-1 rounded-lg bg-arc-dark_1 opacity-90'}>
        <div className={'flex items-center justify-center w-1/12 h-auto p-1 rounded-xl'}>
          <img className={"object-cover w-20 h-20 border-4 rounded-full border-arc-accent_3"} src={Cover1} alt="" srcset="" />
        </div>
        <div className={"flex flex-col justify-center w-8/12 h-auto"}>
          <h1 className={"text-2xl font-medium text-white "}>Grand Theft Auto V</h1>
          <h1 className={"font-mono text-lg text-white"}>Rockstar Games went bigger, since their previous i...</h1>
        </div>
        <div className={"flex flex-row items-center justify-center w-3/12 h-auto "}>
          <h1 className={"flex items-center justify-center w-2/6 h-12 text-xl font-medium text-center text-white bg-arc-dark_2"}>Follow</h1>
          <h1 className={"flex items-center justify-center w-1/6 h-12 text-xl font-medium text-center text-white border-2 bg-arc-dark_1 border-arc-dark_2"}>50k</h1>
        </div>
      </div>
      <div className={"w-full h-auto mt-0.5 bg-arc-dark_1 sticky top-0"}>
        <TabBar tabs={gameTabState} />
      </div>
      <div className={"flex justify-center w-full h-auto"}>
        <div className={"w-6/12 h-auto p-1 mt-4 bg-arc-dark_1 rounded-xl"}>
          <div className={"flex flex-row items-center w-full ml-1 h-14 border-arc-dark_2 font-shabnam"}>
            <Link to={"createPost"}>
              <div className={"flex flex-row items-center justify-center w-auto p-4 h-10 ml-0.5 text-xl text-white bg-arc-accent_1 rounded-2xl"}>
                <span className={"ml-1 font-semibold text-gray-200 "}>ارسال پست</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={"flex items-center justify-center w-full h-auto"}>
        <div className={"w-6/12 h-auto mt-4 bg-arc-dark_1 "}>
          <div className={"flex items-center w-full h-auto p-1 border-b-2 border-arc-dark_2"} dir={"rtl"}>
            <div className={"w-4 h-4 p-2 ml-2 mr-2 text-xl text-white bg-yellow-200 rounded-full"}></div>
            <h1 className={"p-2 text-2xl text-white font-shabnam"} > ویتچر</h1>
          </div>
          <div className={"flex items-center w-full h-auto p-1 border-b-2 border-arc-dark_2"}>
            <h1 className={"p-4 text-3xl text-white font-shabnam"} dir={"rtl"}>
              بازی «ویچر ۳: وایلد هانت» (Witcher3: Wild Hunt) چندهفته‌ای است که فانتزی‌دوستان نقش‌آفرینی‌باز را از کار و زندگی انداخته است. «ویچر ۳» که نقطه پایانی بر سفر گرالت ریویایی است،‌ حسابی از سوی منتقدان مورد ستایش قرار گرفته است. در ادامه با زومجی همراه باشید تا به بررسی این بازی  بپردازیم.
            </h1>
          </div>
          <div className={"flex flex-col items-center justify-center w-full h-auto select-none"}>
            <img className={"object-cover w-full rounded-xl"} src={Cover1} alt="" srcset="" />
          </div>
          <div className={`flex flex-row w-full h-auto p-2 bg-all-arc-accent_1  border-gray-800 border `} dir={"auto"}>
            <div className={"flex flex-row items-center p-1 ml-2 mr-2 text-xl font-bold text-white cursor-pointer font-sahel hover:underline"}>اطلاعات بیشتر</div>
          </div>
          <div className={"flex items-center w-full h-auto p-2"}>
            <img className={"object-cover w-10 h-10 border-2 rounded-full border-arc-dark_1"} src={Cover1} alt="" srcset="" />
            <h1 className={"ml-5 text-lg font-medium text-white"}>ho3ein_mola</h1>
          </div>
          <div className={"flex items-center w-full border-t-2 h-14 border-arc-dark_2"}>
            <div className={"flex items-center justify-center flex-1 h-12 ml-0.5 text-lg text-white bg-arc-dark_1"}>
              <FiArrowUp />
              <span className={"ml-5 text-gray-200"}>like</span>
            </div>
            <div className={"flex items-center justify-center flex-1 h-12 ml-0.5 text-lg text-white bg-arc-dark_1"}>
              <FiMessageCircle />
              <span className={"ml-5 text-gray-200"}>comment</span>
            </div>
            <div className={"flex items-center justify-center flex-1 h-12 ml-0.5 text-lg text-white bg-arc-dark_1"}>
              <FiFlag />
              <span className={"ml-5 text-gray-200"}>report</span>
            </div>
          </div>
        </div>
      </div>
    </Scafold >
  )
}

export default Game
