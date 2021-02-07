import React, { useCallback, useEffect, useState } from 'react';
import BlurHash from './BlurHash';

const BlurHashImage = ({ hash, width, height, punch, className, image, slug }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [unMount, setUnMount] = useState(false);
  const [error, setError] = useState(false);

  const onLoad = useCallback(() => {
    setTimeout(() => {
      setIsLoaded(true);
      setUnMount(true);
    }, 300);
  }, []);

  const onError = () => {
    console.log('error');
  }

  useEffect(() => {
    console.log(slug + ' ' + 'rerender');
  }, [])

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

export default React.memo(BlurHashImage);
