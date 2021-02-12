import React, { useEffect, useRef, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { FiArrowUp, FiEye, FiFlag, FiMessageCircle } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TextareaAutosize from 'react-textarea-autosize';
import Cover1 from '../../assets/img/cover.jpg';
import Cover2 from '../../assets/img/cover2.jpg';
import Header from '../../conponents/Header';
import Scafold from '../../conponents/Scafold';
import TabBar from "../../conponents/TabBar";
import { findIdByName, gameTabSelector, select, tabs } from '../../redux/gameTabSlice';
var Carousel = require('react-responsive-carousel').Carousel;



const Game = () => {
  const dispatch = useDispatch();
  const _isMounted = useRef(true);
  const gameTabState = useSelector(gameTabSelector);
  const [_tag1, _setTag1] = useState({});
  const [_tag2, _setTag2] = useState({});
  const [_tag3, _setTag3] = useState({});


  useEffect(() => {
    const tab = findIdByName(tabs, "Posts");
    dispatch(select(tab.id));
    return () => {
      _isMounted.current = false;
    }
  }, [])

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={active ? "active text-6xl" : "inactive text-6xl text-gray-500"}
        onClick={() => onClick()}
      >
        .
      </button>
    );
  };

  return (
    <Scafold className={'items-center '}>
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
      <div className={"w-full h-auto mt-0.5 bg-arc-dark_1"}>
        <TabBar tabs={gameTabState} />
      </div>
      <div className={"flex justify-center w-full h-auto"}>
        <div className={"w-6/12 h-auto p-1 mt-4 bg-arc-dark_1 rounded-xl"}>
          <input dir={"rtl"} placeholder={"title"} className={"w-full p-4 text-lg text-white outline-none h-14 bg-arc-dark_1"} />
          <TextareaAutosize dir={"rtl"} placeholder={"write something"} className={"w-full p-4 text-lg text-white border-t-2 border-b-2 outline-none h-28 bg-arc-dark_1 border-arc-dark_2"} />
          <div className={"flex flex-row flex-1"} dir={"ltr"}>
            <input placeholder={"tags1"} className={"w-full h-12 p-4 text-lg text-center text-white border-r-2 outline-none bg-arc-dark_1 border-arc-dark_2"} />
            <input placeholder={"tags2"} className={"w-full h-12 p-4 text-lg text-center text-white border-r-2 outline-none bg-arc-dark_1 border-arc-dark_2"} />
            <input placeholder={"tags3"} className={"w-full h-12 p-4 text-lg text-center text-white border-r-2 outline-none bg-arc-dark_1 border-arc-dark_2"} />
          </div>
          <div className={"flex flex-row items-center w-full ml-1 border-t-2 h-14 border-arc-dark_2 font-shabnam"}>
            <div className={"flex flex-row items-center justify-center w-24 h-10 ml-0.5 text-xl text-white bg-arc-accent_1 rounded-2xl"}>
              <span className={"ml-1 font-semibold text-gray-200 "}>ارسال</span>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex items-center justify-center w-full h-auto"}>
        <div className={"w-6/12 h-auto mt-4 bg-arc-dark_1 "}>
          <div className={"flex items-center w-full h-auto p-1 border-b-2 border-arc-dark_2"} dir={"rtl"}>
            <div className={"w-2 h-2 p-2 ml-2 mr-2 text-xl text-white bg-yellow-200 rounded-full"}></div>
            <h1 className={"p-2 text-xl text-white"} > ویتچر</h1>
          </div>
          <div className={"flex flex-row"}>
            <Carousel showArrows={true} swipeable={true} emulateTouch={true} showThumbs={false}>
              <div className={"flex flex-col items-center justify-center w-full h-auto select-none"}>
                <img className={"object-cover w-full border border-arc-dark_2 "} src={Cover1} alt="" srcset="" />
              </div>
              <div className={"flex flex-col items-center justify-center w-full h-auto "}>
                <img className={"object-cover w-full border border-arc-dark_2 "} src={Cover2} alt="" srcset="" />
              </div>
              <div className={"flex flex-col items-center justify-center w-full h-auto "}>
                <img className={"object-cover w-full border border-arc-dark_2 "} src={Cover2} alt="" srcset="" />
              </div>
              <div className={"flex flex-col items-center justify-center w-full h-auto "}>
                <img className={"object-cover w-full border border-arc-dark_2 "} src={Cover2} alt="" srcset="" />
              </div>
              <div className={"flex flex-col items-center justify-center w-full h-auto "}>
                <img className={"object-cover w-full border border-arc-dark_2 "} src={Cover2} alt="" srcset="" />
              </div>
            </Carousel>
          </div>
          <div className={"flex items-center w-full h-auto p-1 "}>
            <h1 className={"p-4 text-3xl text-white font-shabnam"} dir={"rtl"}>
              بازی «ویچر ۳: وایلد هانت» (Witcher3: Wild Hunt) چندهفته‌ای است که فانتزی‌دوستان نقش‌آفرینی‌باز را از کار و زندگی انداخته است. «ویچر ۳» که نقطه پایانی بر سفر گرالت ریویایی است،‌ حسابی از سوی منتقدان مورد ستایش قرار گرفته است. در ادامه با زومجی همراه باشید تا به بررسی این بازی  بپردازیم.
            </h1>
          </div>
          <div className={"flex items-center w-full h-auto p-2 bg-arc-accent_1"}>
            <img className={"object-cover w-10 h-10 border-2 rounded-full border-arc-dark_1"} src={Cover1} alt="" srcset="" />
            <h1 className={"ml-5 text-lg font-semibold text-white"}>ho3ein_mola</h1>
          </div>
          <div className={"flex items-center w-full border-t-2 h-14 border-arc-dark_2"}>
            <div className={"flex items-center justify-center flex-1 h-12 ml-0.5 text-xl text-white bg-arc-dark_1"}>
              <FiArrowUp />
              <span className={"ml-5 text-gray-200"}>like</span>
            </div>
            <div className={"flex items-center justify-center flex-1 h-12 ml-0.5 text-xl text-white bg-arc-dark_1"}>
              <FiMessageCircle />
              <span className={"ml-5 text-gray-200"}>comment</span>
            </div>
            <div className={"flex items-center justify-center flex-1 h-12 ml-0.5 text-xl text-white bg-arc-dark_1"}>
              <FiEye className={"text-gray-200"} />
              <span className={"ml-5 text-gray-200"}>Stats</span>
            </div>
            <div className={"flex items-center justify-center flex-1 h-12 ml-0.5 text-xl text-white bg-arc-dark_1"}>
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
