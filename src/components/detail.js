import React, { useState, useEffect } from 'react';
import data from './../api/data';
import dateAndTimeTransformer from './../helpers';

const Detail = ({ match: { params: { detailId } } }) => {
  const [ detailData, setDetailData ] = useState([]);
  const detailViewData = data.data.features.filter(item => item.id === detailId);

  const dateAndTime = dateAndTimeTransformer(detailData[0]?.properties?.time);
  
  useEffect(() => {
    setDetailData(detailViewData)
  }, [detailId])

  return (
    <div className='content-detail-container'>
      <div className='content-title'>{detailData[0]?.properties?.title}</div>
      <div className='content-details'>
        <div className='content-details-row'>
          <div className='detail-label'>Title</div>
          <div className='detail-value'>{detailData[0]?.properties?.title}</div>
        </div>
        <div className='content-details-row'>
          <div className='detail-label'>Magnitude</div>
          <div className='detail-value'>{detailData[0]?.properties?.mag}</div>
        </div>
        <div className='content-details-row'>
          <div className='detail-label'>Time</div>
          <div className='detail-value'>{dateAndTime}</div>
        </div>
        <div className='content-details-row'>
          <div className='detail-label'>Status</div>
          <div className='detail-value'>{detailData[0]?.properties?.status}</div>
        </div>
        <div className='content-details-row'>
          <div className='detail-label'>Tsunami</div>
          <div className='detail-value'>{detailData[0]?.properties?.tsunami}</div>
        </div>
        <div className='content-details-row'>
          <div className='detail-label'>Type</div>
          <div className='detail-value'>{detailData[0]?.properties?.type}</div>
        </div>
      </div>
    </div>
  )
}

export default Detail;