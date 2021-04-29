import React, { useState, useEffect }  from 'react';
import data from './../api/data';

const User = () => {
  return (
    <div className='user-profile-container'>
      <div className='content-title'>Profile</div>
      <div className='content-details profile-details'>
        <div className='content-details-left-row'>
          <img className='profile-image' src={data.profile.avatarImage} />
        </div>
        <div className='content-details-right-row'>
          <div className='content-details-row'>
            <div className='detail-label'>First name</div>
            <div className='detail-value'>{data.profile.firstName}</div>
          </div>
          <div className='content-details-row'>
            <div className='detail-label'>Last name</div>
            <div className='detail-value'>{data.profile.lastName}</div>
          </div>
          <div className='content-details-row'>
            <div className='detail-label'>Phone</div>
            <div className='detail-value'>{data.profile.phone}</div>
          </div>
          <div className='content-details-row'>
            <div className='detail-label'>Email</div>
            <div className='detail-value'>{data.profile.email}</div>
          </div>
          <div className='content-details-row'>
            <div className='detail-label'>Bio</div>
            <div className='detail-value'>{data.profile.bio}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;