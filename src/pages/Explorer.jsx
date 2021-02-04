import React, { useEffect, useState } from 'react';
import BlurHashImage from '../conponents/BlurHashImage';
import Header from '../conponents/Header.jsx';
import Scafold from '../conponents/Scafold.jsx';
import { Axios } from '../helper/axios_config';
import Loading from './Loading';

const STATUS = {
  "LOADING": 0,
  "SUCCESS": 1,
  "FAILED": 2
}

const Explorer = () => {
  const [genres, setGenres] = useState([]);
  const [collectionStatus, setCollectionStatus] = useState(STATUS.LOADING);

  useEffect(() => {
    request_collection();
  }, [])

  const request_collection = () => {
    Axios.get('public/selections_with_games').then((result) => {
      setTimeout(() => {
        setGenres(result.data);
        setCollectionStatus(STATUS.SUCCESS);
      }, 2000);
    }).catch((err) => {
      console.log({ err });
      setCollectionStatus(STATUS.FAILED);
    });
  }

  const render_selection_games = (selection) => {
    const { games } = selection;
    return games.map((game, index) => {
      const image_path = 'http://localhost:8000' + game.background_image;
      return (
        <div key={game.id * Math.random()} className={`flex w-1/6 h-auto flex-col  ${(index !== 0) ? 'ml-5' : 'ml-0'}`} >
          <BlurHashImage
            className={"flex object-cover w-full rounded-lg h-86"}
            hash={game.background_image_hash}
            width={3}
            height={4}
            image={image_path}
          />
          <p className={"mt-2 text-lg text-center truncate text-arc-light_1"}>{game.name}</p>
        </div >
      )
    });
  }

  const render_selections = () => {
    switch (collectionStatus) {
      case STATUS.LOADING:
        return (
          <Loading />
        );
      case STATUS.SUCCESS:
        return genres.map((selection, index) => {
          return (
            <div className={"w-full h-auto"}>
              <div key={index * Math.random()} className={"flex flex-col flex-1 h-auto mt-2 rounded-lg"}>
                <h1 className={"text-4xl text-white"}>{selection.title}</h1>
                <div className={"flex flex-row h-auto p-2 mt-2 bg-arc-dark_1"}>
                  {render_selection_games(selection)}
                </div>
              </div >
            </div>
          )
        });
      default:
        return (
          <h1 className={"text-4xl text-blue-300"}>Failed to get collection</h1>
        )
    }
  }

  return (
    <Scafold className={''}>
      <Header />
      <div className={"flex flex-col items-center w-full h-auto"}>
        <div className={"w-full h-auto"}>
          <h1 className={"mt-1 ml-1 text-4xl text-white"}>Platforms</h1>
          <div className={"flex flex-row flex-wrap w-full h-auto p-2 mt-2 rounded-lg bg-arc-dark_1"}>
            <div className={"flex items-center justify-center flex-1 h-24 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-pink-800"}>PC</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-red-500"}>Linux</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg shadow-lg"}>
              <p className={"text-3xl font-bold text-green-600"}>Xbox</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-blue-800"}>PlayStation</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-black"}>IOS</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-green-500"}>Android</p>
            </div>
          </div>
        </div>
        <div className={"w-full h-auto"}>
          <h1 className={"mt-1 ml-1 text-4xl text-white"}>Stores</h1>
          <div className={"flex flex-row w-full h-auto p-2 mt-2 rounded-lg bg-arc-dark_1"}>
            <div className={"flex items-center justify-center flex-1 h-24 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-indigo-800"}>Steam</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-yellow-600"}>Epic Games</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg shadow-lg"}>
              <p className={"text-3xl font-bold text-green-600"}>Xbox</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-blue-800"}>PlayStation</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-black"}>Apple Store</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-green-500"}>Google Play</p>
            </div>
          </div>
        </div>
        <div className={"w-full h-auto"}>
          <h1 className={"mt-1 ml-1 text-4xl text-white"}>Genres</h1>
          <div className={"flex flex-row w-full h-auto p-2 mt-2 rounded-lg bg-arc-dark_1"}>
            <div className={"flex items-center justify-center flex-1 h-24 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-black"}>Action</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-black"}>Puzzle</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg shadow-lg"}>
              <p className={"text-3xl font-bold text-black"}>FPS</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-black"}>Advanture</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-black"}>Platformer</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-24 ml-5 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-black"}>Sports</p>
            </div>
          </div>
        </div>
        {render_selections()}
      </div>
    </Scafold>
  )
}

export default Explorer
