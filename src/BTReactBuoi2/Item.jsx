import React from 'react'
import './Item.css'

const Item = ({ item, handleItemDetail, handleGlassOfModel }) => {
  return (
    <div className='item'>
      <a
        onClick={() => {
          handleItemDetail(item)
          handleGlassOfModel(item.url)
        }}
      >
        <img className='image-fluid' src={item.url} alt='...'
        ></img>
      </a>
    </div>
  )
}

export default Item