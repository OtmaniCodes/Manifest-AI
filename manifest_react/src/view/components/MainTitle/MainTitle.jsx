import './MainTitle.css'
import React from 'react'
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom'

export default function MainTitle({ title, subTitle, alignStart, alignEnd, color, splitMarign, sizeFactor, onClick, to, asButton, asLink }) {
  if (!title) {
    throw Error('MainTitle needs title prop to work.');
  }

  if (asButton && typeof onClick !== 'function') {
    throw Error('MainTitle expects an onClick function prop when asButton is true.');
  }

  if (asLink && typeof to !== 'string') {
    throw Error('MainTitle expects a to string prop when asLink is true.');
  }

  if (asButton && asLink) {
    throw Error('MainTitle expects either asButton or asLink, not both.');
  }

  let TitleTag = 'h3';
  let additionalProps = {};
  if (asButton) {
    TitleTag = 'button';
    additionalProps.onClick = onClick;
  } else if (asLink) {
    TitleTag = Link;
    additionalProps.to = to;
  }
  
  return (
    <React.Fragment>
        <div className={`main-title d-flex justify-content-${alignEnd ? 'end' : (alignStart ? "start" : "center")} align-items-center`} style={{scale: sizeFactor ? sizeFactor : null}}>
            <i className='side-spike-triangle side-to-left' style={{backgroundColor: color ? color: null}}></i>
            <Fade duration={500}>
              <TitleTag className='mx-md-5' style={{color: color ? color: null, margin: splitMarign ? `0 ${splitMarign}px` : null}} {...additionalProps}>
                {title}
              </TitleTag>
            </Fade>
            <i className='side-spike-triangle side-to-right' style={{backgroundColor: color ? color: null}}></i>
        </div>
        {subTitle && <Fade><p style={{color: color ? color : null, opacity: color ? 0.8 : null}} className='main-subtitle'>{subTitle}</p></Fade>}
    </React.Fragment>
  );
}
