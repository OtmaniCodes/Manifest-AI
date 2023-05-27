import './VersionStateChip.css'
import React from 'react'

export default function VersionStateChip({state}) {
  var stateLabel = state.toString().slice(0,1).toUpperCase()+state.toString().slice(1).toLowerCase();
  return (
    <div className='version-state-chip'>{stateLabel}</div>
  )
}
