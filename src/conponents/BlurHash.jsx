import React from 'react';
import { useBlurhash } from '../helper/use-blurhash';
const BlurHash = ({ hash, width, height, punch, className, hide }) => {
  const [url] = useBlurhash(hash, width, height, punch);

  const onLoad = (event) => { }

  const onError = (event) => {
    console.log('error');
  }

  if (url === null) {
    return (
      <h1 className={"text-2xl text-center text-yellow-500"}>loading</h1>
    )
  } else if (url === undefined) {
    return (
      <h1 className={"text-2xl text-center text-red-500"}>error</h1>
    )
  } else {
    return (
      <img
        style={{ "display": (hide) ? "none" : "flex" }}
        loading={"lazy"}
        onLoad={(event) => onLoad(event)}
        onError={(event) => onError(event)}
        className={className}
        src={url}
      />
    );
  }
}

export default BlurHash
