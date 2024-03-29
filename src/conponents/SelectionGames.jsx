import React, { useMemo } from 'react';
import BlurHashImage from '../conponents/BlurHashImage';
const SelectionGames = (props) => {
  const { selection } = props;
  const { games } = selection;

  const createPath = (game) => {
    const image_path = 'http://localhost:8000' + game.background_image;
    return image_path;
  }

  const memoCreatePath = useMemo(() => createPath, []);

  return games.map((game, index) => {
    return (
      <div key={String(game.slug + index)} className={`flex flex-1 h-auto flex-col  ${(index !== 0) ? 'ml-5' : 'ml-0'}`} >
        <BlurHashImage
          hash={game.background_image_hash}
          width={3}
          height={4}
          className={"flex object-cover object-top p-1 h-80 rounded-xl"}
          image={memoCreatePath(game)}
        />
        <div className={"flex flex-row items-center justify-center w-full h-auto p-1"}>
          <p className={"text-sm text-center text-white truncate"}>{game.name}</p>
        </div>
      </div >
    )
  });
}

export default React.memo(SelectionGames);
