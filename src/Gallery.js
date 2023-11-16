import React, { useState } from 'react'
import './gallery.css'
import CloseIcon from '@mui/icons-material/Close';

import i1 from './img/2023/i1.jpg';
import i2 from './img/2023/i2.jpg';
import i3 from './img/2023/i3.jpg'
import i4 from './img/2023/i4.jpg'
import i6 from './img/2023/i6.jpg'
import i7 from './img/2023/i7.jpg'
import i8 from './img/2023/i8.jpg'
import i9 from './img/2023/i9.jpg'
import i10 from './img/2023/i10.jpg'
import i11 from './img/2023/i11.jpg' 
import i12 from './img/2023/i12.jpg'
import i13 from './img/2023/i13.jpg'
import i14 from './img/2023/i14.jpg'
import i15 from './img/2023/i15.jpg'
import i16 from './img/2023/i16.jpg'
import i17 from './img/2023/i17.jpg'
import i18 from './img/2023/i18.jpg'
import i19 from './img/2023/i19.jpg'
import i20 from './img/2023/i20.jpg'
import i21 from './img/2023/i21.jpg'
import i22 from './img/2023/i22.jpg'
import i23 from './img/2023/i23.jpg'
import i24 from './img/2023/i24.jpg'
import i25 from './img/2023/i25.jpg'
import i26 from './img/2023/i26.jpg'
import i27 from './img/2023/i27.jpg'
import i28 from './img/2023/i28.jpg'
import i29 from './img/2023/i29.jpg'
import i30 from './img/2023/i30.jpg'
import i31 from './img/2023/i31.jpg'
import i32 from './img/2023/i32.jpg'
import i33 from './img/2023/i33.jpg'
import i34 from './img/2023/i34.jpg'
import i35 from './img/2023/i35.jpg'
import i36 from './img/2023/i36.jpg'
import i37 from './img/2023/i37.jpg'
import i38 from './img/2023/i38.jpg'
import i39 from './img/2023/i39.jpg'
import i40 from './img/2023/i40.jpg'
import i41 from './img/2023/i41.jpg'
import i42 from './img/2023/i42.jpg'
import i43 from './img/2023/i43.jpg'
import i44 from './img/2023/i44.jpg'
// import i45 from './img/2023/i(45.jpg'
// import i46 from './img/2023/i(46.jpg'
// import i47 from './img/2023/i(47).jpg'
// import i48 from './img/2023/i(48).jpg'
// import i49 from './img/2023/i(49).jpg'
// import i50 from './img/2023/i(50).jpg'
// import i51 from './img/2023/i(51).jpg'
// import i52 from './img/2023/i(52).jpg'
// import i53 from './img/2023/i(53).jpg'
// import i54 from './img/2023/i(54).jpg'
// import i55 from './img/2023/i(55).jpg'
// import i56 from './img/2023/i(56).jpg'
// import i57 from './img/2023/i(57).jpg'
// import i58 from './img/2023/i(58).jpg'
// import i59 from './img/2023/i(59).jpg'





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
    {id:38,
    imgSrc: i38
    },
    {id:39,
    imgSrc: i39
    },
    {id:40,
      imgSrc: i40,
    },
    {id:41,
      imgSrc: i41
    },
    {id:42,
      imgSrc: i42
    },
    {id:43,
      imgSrc: i43
    },
    {id:44,
      imgSrc: i44
    },
  ]

  // //  {
  //   id:38,
  //   imgSrc: i38
  // },
  // {
  //   id:39,
  //   imgSrc: i39
  // },
  // {
  //   id:40,
  //   imgSrc: i40
  // },
  // {
  //   id:41,
  //   imgSrc: i41
  // },
  // {
  //   id:42,
  //   imgSrc: i42
  // },
  // {
  //   id:43,
  //   imgSrc: i43
  // },
  // {
  //   id:44,
  //   imgSrc: i44    },
  // {
  //   id:45,
  //   imgSrc: i45
  // },
  // {
  //   id:46,
  //   imgSrc: i46
  // },
  // {
  //   id:47,
  //   imgSrc: i47
  // },
  // {
  //   id:48,
  //   imgSrc: i48
  // },
  // {
  //   id:49,
  //   imgSrc: i49
  // },
  // {
  //   id:50,
  //   imgSrc: i50
  // },
  // {
  //   id:51,
  //   imgSrc: i51
  // },
  // {
  //   id:52,
  //   imgSrc: i52
  // },
  // {
  //   id:53,
  //   imgSrc: i53
  // },
  // {
  //   id:54,
  //   imgSrc: i54
  // },
  // {
  //   id:55,
  //   imgSrc: i55
  // },
  // {
  //   id:56,
  //   imgSrc: i56
  // },
  // {
  //   id:57,
  //   imgSrc: i57
  // },
  // {
  //   id:58,
  //   imgSrc: i58
  // },
  // {
  //   id:59,
  //   imgSrc: i59
  // },
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