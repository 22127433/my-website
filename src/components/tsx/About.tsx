import React, { useState } from 'react';
import '../css/About.css';
import shutterIslandImg from '../assets/shutter-island.jpeg';

const About: React.FC = () => {
  const [zoomed, setZoomed] = useState(false);

  const handleDoubleClick = () => {
    setZoomed(!zoomed);
  };

  const closeZoomed = () => {
    setZoomed(false);
  };

  return (
    <section className="about">
      <img src={shutterIslandImg} 
           alt="Anh Tú"
           className={`avatar ${zoomed ? 'zoomed' : ''}`}
           onDoubleClick={handleDoubleClick}
           onClick={zoomed ? closeZoomed : undefined}/>
      <div className={`about-infor ${zoomed ? 'zoomed' : ''}`}>
        <h1 className="name">Anh Tú</h1>
        <div className="description">
          <h2>Giới Thiệu</h2>
          <h3>Xin chào!</h3>
          Tôi tên Nguyễn Ngọc Anh Tú, là một sinh viên khoa Công nghệ thông tin, trường Đại học Khoa học Tự nhiên, ĐHQG-HCM. 
          Tôi yêu thích lập trình và thích tìm hiểu về các công nghệ mới.
        </div>

        <div className="purpose">
          <h2>Mục Đích</h2>
          Website này được tạo ra để chia sẻ sở thích của bản thân, cũng như để luyện tập về việc sử dụng ReactJS, TypeScript, HTML, CSS để xây dựng một website cá nhân.
        </div>

        <div className="reference">
          <h2>Link tới source code: <a href="https://github.com/22127433/my-website.git">Github</a></h2>
        </div>
      </div>
    </section>
  );
};

export default About;
