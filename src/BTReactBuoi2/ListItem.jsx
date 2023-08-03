import React from 'react'
import Item from './Item'

const ListItem = ({ listItem, handleItemDetail, handleGlassOfModel }) => {
  return (
    <div className='row m-lg-5' style={{ backgroundColor: 'white' }}>
      {
        listItem.map((item) => {
          return (
            <div className='col-3 mt-5'>
              <Item key={item.id}
                item={item}
                handleItemDetail={handleItemDetail}
                handleGlassOfModel={handleGlassOfModel}
              />
            </div>
          )

        })
      }
    </div>
  )
}

export default ListItem