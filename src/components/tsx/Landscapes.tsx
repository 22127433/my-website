import React, { useState, useRef } from 'react';
import dalatImg1 from '../assets/da-lat-sang-som.jpg';
import dalatImg2 from '../assets/da-lat-dinh-bao-dai.jpg';
import dalatImg3 from '../assets/da-lat-ho-tuyet-lam.jpg';
import nhatrangImg1 from '../assets/nha-trang-bien.jpg';
import nhatrangImg2 from '../assets/nha-trang-vinpearland.jpg';
import nhatrangImg3 from '../assets/nha-trang-hon-chong.jpg';
import phanthietImg1 from '../assets/phan-thiet-doi-cat-bay.jpg';
import phanthietImg2 from '../assets/phan-thiet-mui-ne.jpg';
import phanthietImg3 from '../assets/phan-thiet-ganh-son.jpg';

import '../css/Landscapes.css'

type LandscapeInfo = {
  title: string;
  description: string;
  img: string[];
  imgDescription: string[];
}

const landscapesData: LandscapeInfo[] = [
  {
    title: 'Đà Lạt',
    description: 'Đà Lạt là một thành phố nằm ở miền Trung Việt Nam, nổi tiếng với khí hậu mát mẻ quanh năm và cảnh đẹp thiên nhiên hữu tình.',
    img: [dalatImg1, dalatImg2, dalatImg3],
    imgDescription: ['Đà Lạt Sáng Sớm', 'Đà Lạt Đỉnh Bảo Đại', 'Đà Lạt Hồ Tuyết Lâm']
  },
  {
    title: 'Nha Trang',
    description: 'Nha Trang là một thành phố nằm ở miền Nam Việt Nam, nổi tiếng với bãi biển dài và sạch, cùng với các khu vui chơi giải trí nổi tiếng như Vinpearland.',
    img: [nhatrangImg1, nhatrangImg2, nhatrangImg3],
    imgDescription: ['Nha Trang Biển', 'Nha Trang Vinpearland', 'Nha Trang Hòn Chồng']
  },
  {
    title: 'Phan Thiết',
    description: 'Phan Thiết là một thành phố nằm ở miền Nam Việt Nam, nổi tiếng với bãi biển đẹp và các món ăn hải sản tươi ngon.',
    img: [phanthietImg1, phanthietImg2, phanthietImg3],
    imgDescription: ['Phan Thiết Đồi Cát Bay', 'Phan Thiết Mũi Né', 'Phan Thiết Gành Sơn']
  },
];

const Landscapes: React.FC = () => {
  const [currentImages, setCurrentImages] = useState<number[]>([0, 0, 0]);
  const [isMenuActive, setMenuIsActive] = useState(false);
  const landscapeRefs = useRef<(HTMLLIElement | null)[]>([]);

  const handleMenuClick = () => {
    setMenuIsActive(!isMenuActive);
  };

  const handleImageClick = (index: number, numNextImg: number, changeImg:boolean) => {
    if (!changeImg || numNextImg < 0) {
      return;
    }

    if (numNextImg >= landscapesData[index].img.length) {
      numNextImg = 0;
    }

    const newImages = [...currentImages];
    newImages[index] = numNextImg;
    console.log(newImages);
    setCurrentImages(newImages);
  };


  const handleScrollTo = (index: number, numNextImg: number) => {
    landscapeRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    handleImageClick(index, numNextImg, true)
  };


  return (
    <section className="landscapes">
      <button onClick={handleMenuClick} 
              className='nav-icons'>
        <div className='nav-icon'></div>
      </button>
      <ul className={`menu-block ${isMenuActive ? '' : 'hidden'}`}>
        <h1 className='menu-header'>Landscapes</h1>
        <li className='menu-landscape'>
          <h2 onClick={() => handleScrollTo(0, currentImages[0])}>{landscapesData[0].title}</h2>
          <ul>
            <li className='menu-landscape-item'
                onClick={() => handleScrollTo(0, 0)}>{landscapesData[0].imgDescription[0]}</li>
            <li className='menu-landscape-item'
                onClick={() => handleScrollTo(0, 1)}>{landscapesData[0].imgDescription[1]}</li>
            <li className='menu-landscape-item'
                onClick={() => handleScrollTo(0, 2)}>{landscapesData[0].imgDescription[2]}</li>
          </ul>
        </li>

        <li className='menu-landscape'>
          <h2 onClick={() => handleScrollTo(0, currentImages[0])}>{landscapesData[1].title}</h2>
          <ul>
          <li className='menu-landscape-item'
                onClick={() => handleScrollTo(1, 0)}>{landscapesData[1].imgDescription[0]}</li>
            <li className='menu-landscape-item'
                onClick={() => handleScrollTo(1, 1)}>{landscapesData[1].imgDescription[1]}</li>
            <li className='menu-landscape-item'
                onClick={() => handleScrollTo(1, 2)}>{landscapesData[1].imgDescription[2]}</li>
          </ul>
        </li>

        <li className='menu-landscape'>
          <h2 onClick={() => handleScrollTo(0, currentImages[0])}>{landscapesData[2].title}</h2>
          <ul>
          <li className='menu-landscape-item'
                onClick={() => handleScrollTo(2, 0)}>{landscapesData[2].imgDescription[0]}</li>
            <li className='menu-landscape-item'
                onClick={() => handleScrollTo(2, 1)}>{landscapesData[2].imgDescription[1]}</li>
            <li className='menu-landscape-item'
                onClick={() => handleScrollTo(2, 2)}>{landscapesData[2].imgDescription[2]}</li>
          </ul>
        </li>        
      </ul>
      <ul className={`landscapes-list ${isMenuActive ? 'active' : ''}`}>
        <li className="landscapes"
            ref={(el) => (landscapeRefs.current[0] = el)}>
          <img src={landscapesData[0].img[currentImages[0]]}
            alt={landscapesData[0].imgDescription[currentImages[0]]}
            onClick={() => handleImageClick(0, currentImages[0] + 1, true)}
            className="landscapes-poster" />
          <div className="landscapes-infor">
            <h2 className="landscapes-title">{landscapesData[0].title}</h2>
            <p className="landscapes-description">{landscapesData[0].description}</p>
          </div>
        </li>
        <li className="landscapes"
            ref={(el) => (landscapeRefs.current[1] = el)}>
          <img src={landscapesData[1].img[currentImages[1]]}
            alt={landscapesData[1].imgDescription[currentImages[1]]}
            onClick={() => handleImageClick(1, currentImages[1] + 1, true)}
            className="landscapes-poster" />
          <div className="landscapes-infor">
            <h2 className="landscapes-title">{landscapesData[1].title}</h2>
            <p className="landscapes-description">{landscapesData[1].description}</p>
          </div>
        </li>
        <li className="landscapes"
            ref={(el) => (landscapeRefs.current[2] = el)}>
          <img src={landscapesData[2].img[currentImages[2]]}
            alt={landscapesData[2].imgDescription[currentImages[2]]}
            onClick={() => handleImageClick(2, currentImages[2] + 1, true)}
            className="landscapes-poster" />
          <div className="landscapes-infor">
            <h2 className="landscapes-title">{landscapesData[2].title}</h2>
            <p className="landscapes-description">{landscapesData[2].description}</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Landscapes;