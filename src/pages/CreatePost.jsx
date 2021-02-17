import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Cropper from 'react-easy-crop';
import { FiCrop, FiImage } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import FullPanel from '../conponents/FullPanel';
import Header from '../conponents/Header';
import IconButton from '../conponents/IconButton';
import Scafold from '../conponents/Scafold';
import getCroppedImg from '../helper/getImage';
import { findIdByName, select, tabs } from '../redux/gameTabSlice';
const Game = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [image, setImage] = useState('');
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)
  const _isMounted = useRef(true);
  const _uploadRef = useRef(null);

  useEffect(() => {
    const tab = findIdByName(tabs, "Posts");
    dispatch(select(tab.id));
    return () => {
      _isMounted.current = false;
    }
  }, [])

  const cropImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
        rotation
      );
      const image_data = await readURL(croppedImage);
      setImage(image_data)
      setZoom(1);
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixels, rotation, image])

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, [])

  const back = () => {
    history.goBack();
  }

  const onCropChange = (crop) => {
    setCrop(crop);
  }

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }

  const onZoomChange = (zoom) => {
    setZoom(zoom)
  }

  const onMediaLoaded = (imgae) => {
    // console.log({ imgae });
  }

  const readURL = file => {
    return new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = e => res(e.target.result);
      reader.onerror = e => rej(e);
      reader.readAsDataURL(file);
    });
  };

  const onInputImageChange = async (event) => {
    if (event.target.files.length > 0) {
      const img = await readURL(event.target.files[0]);
      setImage(img);
      setShowPreview(true);
    }
  }

  function isRTL(s) {
    var ltrChars = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF' + '\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
      rtlChars = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
      rtlDirCheck = new RegExp('^[^' + ltrChars + ']*[' + rtlChars + ']');
    return rtlDirCheck.test(s);
  };

  const handleUpload = event => {
    _uploadRef.current.click();
  };

  return (
    <Scafold className={'items-center '}>
      <Header />
      <div className={'flex flex-row w-full mt-0.5 h-auto p-1 rounded-lg bg-arc-dark_1 opacity-90'}>
        <div className={"flex flex-row items-start justify-center w-1/12 h-auto"}>
          <h1 onClick={back} className={"flex items-center justify-center w-32 h-12 text-xl font-medium text-center text-white bg-arc-dark_2"}>Back</h1>
        </div>
      </div>
      <div className={"flex flex-col items-center w-full mt-5"}>
        <FullPanel>
          <TextareaAutosize className={"w-full p-2 text-2xl text-white outline-none resize-none bg-arc-dark_1 font-shabnam"} placeholder={"عتوان"} dir={"rtl"} />
        </FullPanel>
        <FullPanel>
          <div className={"flex flex-row"}>
            <IconButton className={"rounded-md bg-all-blue-600 font-shabnam"} size={24} color={"#FFF"} icon={FiCrop} onClick={cropImage}>بریدن تصویر</IconButton>
            <IconButton className={"rounded-md bg-all-blue-600 font-shabnam"} size={24} color={"#FFF"} icon={FiImage} onClick={handleUpload}>اپلود تصویر</IconButton>
          </div>
          <input
            ref={_uploadRef}
            style={{ display: 'none' }}
            type="file"
            name="user[image]"
            multiple="true"
            onChange={onInputImageChange} />
        </FullPanel>
        <div style={{ display: (showPreview === false) ? 'none' : '' }} className={"relative flex flex-col items-center justify-center w-6/12 border border-gray-800 h-96"}>
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={16 / 9}
            zoomWithScroll={true}
            onCropChange={onCropChange}
            onCropComplete={onCropComplete}
            onZoomChange={onZoomChange}
            onMediaLoaded={onMediaLoaded}
          />
        </div>
        <FullPanel>
          <TextareaAutosize className={"w-full p-2 text-2xl text-white outline-none resize-none bg-arc-dark_1 font-shabnam"} placeholder={"متن پست"} dir={"rtl"} />
        </FullPanel>
        <FullPanel>
          <TextareaAutosize className={"w-full p-2 text-2xl text-white outline-none resize-none bg-arc-dark_1 font-shabnam"} placeholder={"لینک"} dir={"rtl"} />
        </FullPanel>
      </div>
    </Scafold >
  )
}

export default Game
