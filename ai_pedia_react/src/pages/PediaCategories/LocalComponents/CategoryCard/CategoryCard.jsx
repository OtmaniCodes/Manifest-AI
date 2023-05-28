import './CategoryCard.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { FuncHelper } from '../../../../utils/func-helper'

export default function CategoryCard({category}) {
  return (
    <Link to={`${category.name}`}>
        <div className="category-card-item">
            <div className="category-card-item-image">
                <img src={FuncHelper.getCleanServerImageUrl(category.image)} alt={`${category.name} image`}/>
            </div>
            <div className="category-card-item-name">
                <p>{category.name}</p>
                <p className='tools-count'>{category.tools_count} tool{category.tools_count > 1 ? 's' : ''}</p>
            </div>
        </div>
    </Link>
  )
}
