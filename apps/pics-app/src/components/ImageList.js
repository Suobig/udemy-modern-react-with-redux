import React from 'react';

const ImageList = (props) => {
  const images = props.images.map(image => <li key={image.id}><img src={image.thumbnailUrl} title={image.name}/></li>)
  return <div>{images}</div>
}

export default ImageList;