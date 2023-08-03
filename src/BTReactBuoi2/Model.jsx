import React from 'react'

const Model = ({ glassOfModel }) => {
  return (
    <div style={{ backgroundImage: `url("./image/model.jpg")`, height: 500, width: 600, backgroundRepeat: 'no-repeat', zIndex: 1, position: 'relative', alignItems: 'center' }}>
      <img src={glassOfModel} style={{
        position: 'absolute',
        top: 100,
        left: 90,
        height: 120,
        opacity: 0.9

      }}></img>
    </div>
  )
}

export default Model