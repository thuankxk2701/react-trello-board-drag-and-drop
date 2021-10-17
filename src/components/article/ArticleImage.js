import React from 'react';

const ArticleImage = ({ srcImg, typeAlt, typeClass }) => {
  return <img src={srcImg} alt={typeAlt} className={typeClass} />;
};

export default ArticleImage;
