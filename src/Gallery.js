import React, { useState } from 'react'
import './gallery.css'
import CloseIcon from '@mui/icons-material/Close';

import i1 from './img/i1.jpg';
import i2 from './img/i2.jpg';
import i3 from './img/i3.jpg'
import i4 from './img/i4.jpg'
import i6 from './img/i6.jpg'
import i7 from './img/i7.jpg'
import i8 from './img/i8.jpg'
import i9 from './img/i9.jpg'
import i10 from './img/i10.jpg'
import i11 from './img/i11.jpg'
import i12 from './img/i12.jpg'
import i13 from './img/i13.jpg'
import i14 from './img/i14.jpg'
import i15 from './img/i15.jpg'
import i16 from './img/i16.jpg'
import i17 from './img/i17.jpg'
import i18 from './img/i18.jpg'
import i19 from './img/i19.jpg'
import i20 from './img/i20.jpg'
import i21 from './img/i21.jpg'
import i22 from './img/i22.jpg'
import i23 from './img/i23.jpg'
import i24 from './img/i24.jpg'
import i25 from './img/i25.jpg'
import i26 from './img/i26.jpg'
import i27 from './img/i27.jpg'
import i28 from './img/i28.jpg'
import i29 from './img/i29.jpg'
import i30 from './img/i30.jpg'
import i31 from './img/i31.jpg'
import i32 from './img/i32.jpg'
import i33 from './img/i33.jpg'
import i34 from './img/i34.jpg'
import i35 from './img/i35.jpg'
import i36 from './img/i36.jpg'
import i37 from './img/i37.jpg'
import i38 from './img/i38.jpg'
import i39 from './img/i39.jpg'
import i40 from './img/i40.jpg'
import i41 from './img/i41.jpg'
import i42 from './img/i42.jpg'





const Gallery = () => {
  let data = [
    {
      id:1,
      imgSrc: i1
    },
    {
      id:2,
      imgSrc: i2
    },
    {
      id:3,
      imgSrc: i3
    },
    {
      id:4,
      imgSrc: i4
    },
    {
      id:6,
      imgSrc: i6
    },
    {
      id:7,
      imgSrc: i7
    },
    {
      id:8,
      imgSrc: i8
    },
    {
      id:9,
      imgSrc: i9
    },
    {
      id:10,
      imgSrc: i10
    },
    {
      id:11,
      imgSrc: i11
    },
    {
      id:12,
      imgSrc: i12
    },
    {
      id:13,
      imgSrc: i13
    },
    {
      id:14,
      imgSrc: i14
    },
    {
      id:15,
      imgSrc: i15
    },
    {
      id:16,
      imgSrc: i16
    },
    {
      id:17,
      imgSrc: i17
    },
    {
      id:18,
      imgSrc: i18
    },
    {
      id:19,
      imgSrc: i19
    },
    {
      id:20,
      imgSrc: i20
    },
    {
      id:21,
      imgSrc: i21
    },
    {
      id:22,
      imgSrc: i22
    },
    {
      id:23,
      imgSrc: i23
    },
    {
      id:24,
      imgSrc: i24
    },
    {
      id:25,
      imgSrc: i25
    },
    {
      id:26,
      imgSrc: i26
    },
    {
      id:27,
      imgSrc: i27
    },
    {
      id:28,
      imgSrc: i28
    },
    {
      id:29,
      imgSrc: i29
    },
    {
      id:30,
      imgSrc: i30
    },
    {
      id:31,
      imgSrc: i31
    },
    {
      id:32,
      imgSrc: i32
    },
    {
      id:33,
      imgSrc: i33
    },
    {
      id:34,
      imgSrc: i34
    },
    {
      id:35,
      imgSrc: i35
    },
    {
      id:36,
      imgSrc: i36
    },
    {
      id:37,
      imgSrc: i37
    },
    {
      id:38,
      imgSrc: i38
    },
    {
      id:39,
      imgSrc: i39
    },
    {
      id:40,
      imgSrc: i40
    },
    {
      id:41,
      imgSrc: i41
    },
    {
      id:42,
      imgSrc: i42
    },
  ]
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc)=>{
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    <>
    <div className={model? 'model open' : 'model'}>
      <img src={tempimgSrc} alt=""/>
      <CloseIcon onClick={()=> setModel(false)}/>
    </div>

    <div className='gallery'>
      {data.map((item, index)=>{
        return(
          <div className='pics' key={index} onClick={()=>getImg(item.imgSrc)}>
            <img src={item.imgSrc} style={{width: '100%'}}alt="" />
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Gallery