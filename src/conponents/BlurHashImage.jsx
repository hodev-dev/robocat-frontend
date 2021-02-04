import React, { useState } from 'react';
import BlurHash from './BlurHash';

const BlurHashImage = ({ hash, width, height, punch, className, image }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [unMount, setUnMount] = useState(false);
  const [error, setError] = useState(false);

  const onLoad = () => {
    console.log('run');
    setTimeout(() => {
      setIsLoaded(true);
      setUnMount(true);
    }, 2000);
  }
  const onError = () => {
    console.log('error');
  }
  return (
    <>
      {(unMount === false)
        ?
        <BlurHash
          className={className}
          hash={hash}
          width={width}
          height={height}
          punch={punch}
        />
        :
        null
      }
      {(error === true) ?
        <BlurHash
          className={className}
          hash={hash}
          width={width}
          height={height}
          punch={punch}
        />
        :
        <img
          loading={"eager"}
          onLoad={() => onLoad()}
          onError={() => onError()}
          className={(isLoaded === true) ? className : "hidden"}
          src={image}
          alt="cover"
        />
      }

    </>
  )
}

export default BlurHashImage
