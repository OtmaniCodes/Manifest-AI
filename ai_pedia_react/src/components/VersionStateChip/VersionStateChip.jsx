import './VersionStateChip.css'
import React from 'react'

export default function VersionStateChip({state}) {
  var stateLabel = state.toString().slice(0,1).toUpperCase()+state.toString().slice(1).toLowerCase();
  const isFreeTool = stateLabel.toLowerCase() === 'fremium'; //! must be Freemium not Fremium
  const isPaidTool = stateLabel.toLowerCase() === 'premium';

  return (
    <div className='version-state-chip'>
      
        {isFreeTool && <div className="icon"><i class="fa-solid fa-check"></i></div>}
        {isPaidTool && <div className="icon"><i class="fa-solid fa-dollar-sign"></i></div>}
      
      <p>{stateLabel}</p>
    </div>
  )
}
