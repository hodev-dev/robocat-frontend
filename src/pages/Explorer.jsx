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
          <div className={"w-8/12"}>
            <Loading />
          </div>
        );
      case STATUS.SUCCESS:
        return genres.map((selection, index) => {
          return (
            <div className={"w-8/12 h-auto"}>
              <div key={index * Math.random()} className={"flex flex-col flex-1 h-auto rounded-lg"}>
                <div className={"flex flex-row items-center w-full p-2 h-14"}>
                  <div className={"flex justify-start flex-1 "}>
                    <h1 className={"p-1 text-2xl text-gray-200"}>{'more'}</h1>
                  </div>
                  <div className={"flex justify-end flex-1"}>
                    <h1 className={"self-end text-4xl text-white"}>{selection.title}</h1>
                  </div>
                </div>
                <div className={"flex flex-row h-auto p-2 bg-arc-dark_1"}>
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
        <div className={"w-8/12 h-auto"}>
          <div className={"flex flex-row flex-wrap w-full h-auto p-2 mt-2 rounded-lg bg-arc-dark_1"}>
            <div className={"flex items-center justify-center flex-1 h-16 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-arc-dark_3"}>Genres</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-16 ml-5 bg-white rounded-lg"}>
              <p className={"text-3xl font-bold text-arc-dark_3"}>Platforms</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-16 ml-5 bg-white rounded-lg shadow-lg"}>
              <p className={"text-3xl font-bold text-arc-dark_3"}>Stores</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-16 ml-5 bg-white rounded-lg shadow-lg"}>
              <p className={"text-3xl font-bold text-arc-dark_3"}>Collections</p>
            </div>
            <div className={"flex items-center justify-center flex-1 h-16 ml-5 bg-white rounded-lg shadow-lg"}>
              <p className={"text-3xl font-bold text-arc-dark_3"}>Tags</p>
            </div>
          </div>
        </div>
        {render_selections()}
      </div>
    </Scafold>
  )
}

export default Explorer
