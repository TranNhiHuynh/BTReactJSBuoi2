import React from 'react'
import InforItem from './InforItem'
import Model from './Model'

const Body = ({ itemDetail, glassOfModel }) => {
    return (
        <div className='mt-5'>
            <div className='row d-flex'>
                <div className='col-6 text-center'>
                    <InforItem itemDetail={itemDetail} />
                </div>
                <div className='col-6'>
                    <Model glassOfModel={glassOfModel} />
                </div>
            </div>
        </div>
    )
}

export default Body