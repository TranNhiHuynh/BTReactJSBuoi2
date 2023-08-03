import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import listItem from './data.json'
import ListItem from './ListItem'

const BTReactBuoi2 = () => {

  // Thông tin sản phẩm
  const [itemDetail, setItemDetail] = useState({})
  const handleItemDetail = (item) => {
    setItemDetail(item)
  }

  // Thay kính
  const [glassOfModel, setGlassOfModel] = useState('')
  const handleGlassOfModel = (url) => {
    setGlassOfModel(url)
  }


  return (
    <div className='w-100' style={{
      backgroundImage: `url("https://kenh14cdn.com/thumb_w/660/2018/2/27/roman-mager-59779-unsplash-15196887840271754162454.jpg")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity: 0.7,
      height: 1800,
    }}
    >
      <Header />
      <Body itemDetail={itemDetail} glassOfModel={glassOfModel} />
      <ListItem listItem={listItem} handleItemDetail={handleItemDetail} handleGlassOfModel={handleGlassOfModel} />
    </div>
  )
}

export default BTReactBuoi2