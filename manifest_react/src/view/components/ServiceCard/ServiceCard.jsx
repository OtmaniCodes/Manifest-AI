import { Link } from 'react-router-dom';
import './ServiceCard.css'
import React, { useState } from 'react'

export default function ServiceCard({service, index}) {
    // console.log(service)
    const {title, icon, smallDescription} = service;


    return (
        <div className={`service-card d-flex flex-column justify-content-between mx-md-2 mb-md-0 mb-5`}>
            <div className="icon-wrapper">
                <img src={icon} alt={title} />
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{smallDescription}</p>
            </div>
            <Link to={`/services/${service.slug}`} className='service-btn global-btn-white mt-4'>LEARN MORE</Link>
        </div>
    )
}

