import React from 'react';
import { Oval } from 'react-loader-spinner';

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <Oval
        height={80}
        width={80}
        color="#4CAF50"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4CAF50"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default LoadingSpinner;