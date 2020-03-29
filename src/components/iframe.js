import React from 'react';

export const Iframe = ({ className, src, width, height }) => {
  return (
    <iframe
      className={ className }
      title="spotify-iframe"
      src={ src }
      width={ width }
      height={ height }
      frameBorder="0"
      allowTransparency="true"
      allow="encrypted-media"
    />
  );
};

export default Iframe;