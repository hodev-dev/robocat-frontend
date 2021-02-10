import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Cover1 from '../assets/img/cover.jpg';
import Header from '../conponents/Header';
import Scafold from '../conponents/Scafold';

const Game = () => {
  return (
    <Scafold className={'items-center'}>
      <Header />
      <div className={'flex flex-row w-9/12 h-auto p-1 mt-4 rounded-lg p- bg-arc-dark_1'}>
        <div className={'flex flex-col w-2/12 h-96 rounded-2xl'}>
          <div className={"flex flex-col items-center justify-center w-full h-auto text-gray-300 bg-arc-dark_1 justify-cente"}>
            <div className={"flex items-center justify-center w-full text-8xl h-96 bg-arc-dark_2 text-arc-accent_2 rounded-xl"}>68</div>
          </div>
        </div>
        <div className={'flex flex-col w-8/12 ml-1 mr-1 h-96 rounded-2xl'}>
          <div className={"w-full h-80"}>
            <div className={"flex flex-row items-center justify-start w-full h-12 text-gray-300 bg-arc-dark_2"}>
              <div className={"flex-1 ml-2"}>Grand Theft Auto V</div>
              <div className={"flex-1 mr-2 text-right"}>نام اثر</div>
            </div>
            <div className={"flex flex-row items-center justify-center w-full h-12 text-gray-300 bg-arc-dark_1 justify-cente"}>
              <div className={"flex-1 ml-2"}>CD-PROJECT RED</div>
              <div className={"flex-1 mr-2 text-right"}>شرکت سازنده</div>
            </div>
            <div className={"flex flex-row items-center justify-center w-full h-12 text-gray-300 bg-arc-dark_2"}>
              <div className={"flex-1 ml-2"}>Electronic Arts</div>
              <div className={"flex-1 mr-2 text-right"}>ناشر</div>
            </div>
            <div className={"flex flex-row items-center justify-center w-full h-12 text-gray-300 bg-arc-dark_1"}>
              <div className={"flex-1 ml-2"}>2013-09-17</div>
              <div className={"flex-1 mr-2 text-right"}>تاریخ انتشار</div>
            </div>
            <div className={"flex flex-row items-center justify-center w-full h-12 text-gray-300 bg-arc-dark_2"}>
              <div className={"flex-1 ml-2"}>PC-PS4-PS3</div>
              <div className={"flex-1 mr-2 text-right"}>پلتفرم</div>
            </div>
            <div className={"flex flex-row items-center justify-center w-full h-12 text-gray-300 bg-arc-dark_1"}>
              <div className={"flex-1 ml-2"}>Steam Epic</div>
              <div className={"flex-1 mr-2 text-right"}>فروشگاه</div>
            </div>
            <div className={"flex flex-row items-center justify-center w-full h-12 text-gray-300 bg-arc-dark_2"}>
              <div className={"flex-1 ml-2"}>FPS-Shooter</div>
              <div className={"flex-1 mr-2 text-right"}>ژانر</div>
            </div>
            <div className={"flex flex-row items-center justify-center w-full h-12 text-gray-300 bg-arc-dark_1"}>
              <div className={"flex-1 ml-2"}>ESRB-5</div>
              <div className={"flex-1 mr-2 text-right"}>رده ی سنی</div>
            </div>
          </div>
        </div>
        <div className={'w-2/12 h-96 rounded-xl'}>
          <img className={"object-cover w-full h-96 rounded-xl"} src={Cover1} alt="" srcset="" />
        </div>
      </div>
      <div className={"flex w-9/12 h-16 mt-0.5 bg-arc-dark_1 rounded-xl"}>

      </div>
    </Scafold>
  )
}

export default Game
