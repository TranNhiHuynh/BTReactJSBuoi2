import React from 'react'

const InforItem = ({ itemDetail }) => {
    return (
        <div style={{}}>
            <h1 style={{ color: 'white' }}>THÔNG TIN SẢN PHẨM</h1>
            <h2 className='fs-bold' style={{ color: 'red' }}>{itemDetail.name}</h2>
            <h5 style={{ color: 'yellow' }}>{itemDetail.desc}</h5>
        </div>
    )
}

export default InforItem