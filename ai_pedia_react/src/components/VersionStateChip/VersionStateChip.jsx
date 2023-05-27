import './VersionStateChip.css'
import React from 'react'

export default function VersionStateChip({state}) {
  var stateLabel = state.toString().slice(0,1).toUpperCase()+state.toString().slice(1).toLowerCase();
  const isFreeTool = stateLabel.toLowerCase() === 'fremium'; //! must be Freemium not Fremium
  const isPaidTool = stateLabel.toLowerCase() === 'premium';

  return (
    <div className='version-state-chip'>
      {isFreeTool && <i class="fa-regular fa-circle-check"></i>}
      {isPaidTool && <i class="fa-regular fa-circle-dollar"></i>}
      <p>{stateLabel}</p>
    </div>
  )
}
