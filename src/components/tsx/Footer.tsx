import React from 'react';
import '../css/Footer.css';

const Footer: React.FC = () => {
  const email = 'anhtus2711@gmail.com'; // Thay thế bằng địa chỉ email thực của bạn
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert(`Email "${email}" đã được sao chép vào clipboard.`);
    }).catch((err) => {
      console.error('Lỗi khi sao chép email:', err);
    });
  };

  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=100026177912030">Facebook</a>
        <span className="copy-email" onClick={handleCopyEmail}>Email: {email}</span>
      </div>
    </footer>
  );
};

export default Footer;
