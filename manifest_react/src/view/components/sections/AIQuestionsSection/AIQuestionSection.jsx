import { Fade } from 'react-reveal';
import './AIQuestionSection.css'
import React, { useEffect, useState } from 'react'
// import AIQuestionGraphic2 from '../../../../assets/images/ai-question-2-graphic.png'
import ResponsiveCompo from '../../responsive-compo';
import { useDataSource } from '../../../../state/data-provider';


export default function AIQuestionSection() {
  const [expandedId, setExpandedId] = useState(null);
  var {aiQuestions} = useDataSource();

  const handleThumbnailClick = (id) => {
    if (expandedId === id) {
      // If the clicked thumbnail is already expanded, collapse it
      setExpandedId(null);
    } else {
      // Expand the clicked thumbnail
      setExpandedId(id);
    }
  };

  const handleOutsideClick = () => {
    setExpandedId(null);
  };

  useEffect(() => {
    const handleEscapeClose = (event) => {
        if (event.keyCode === 27) {
          setExpandedId(null);
        }
    }

    if (expandedId !== null) {
      document.addEventListener('keydown', handleEscapeClose);
    }
    return () => {
        document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [expandedId]);

    const renderLeftSide = (thumbnailTextFirst, data) => {
        return (
            <div className={`texts col-md-6 text-start order-2 order-md-${thumbnailTextFirst ? 2 : 1}`}>
                {/* <h3 className='mb-md-3 mb-0 fw-bold'>{data.title}</h3> */}
                {
                  data.descriptions.map(d => {
                    return <p className="text-start fw-light fs-6 lh-lg">{d}</p>
                  })
                }
            </div>
        );
    }


    const renderRightSide = (thumbnailTextFirst, data) => {
        return (
            <div className={`thumbnail-container col-md-6 order-1 p-0 order-md-${thumbnailTextFirst ? 1 : 2} ${expandedId === data.id ? 'expanded' : ''}`}>
                <div className="thumbnail">
                    {data.image && <img src={data.image} alt={data.title??'quetion title'} /> }
                    {data.question && <p>{data.question}</p>}
                </div>
                {
                  expandedId === null && (
                    <div className="expand-thumbnail-layer">
                      <i class="fa-solid fa-expand" onClick={() => handleThumbnailClick(data.id)}></i>
                    </div>
                  )
                }
                {
                  expandedId !== null && (
                  <div className="shrink-thumbnail-layer">
                    <i class="fa-solid fa-compress" onClick={() => handleOutsideClick()}></i>
                  </div>
                  )
                }
              </div>
        );
    }

  return (
    <section id='ai-questions-section'>
        <div className="container">
            {
            aiQuestions.map((data, i) => {
                var thumbnailTextFirst = i % 2 === 0;
                return <div key={i} className="row justify-content-center align-items-center mb-3 mb-md-0">
                    <ResponsiveCompo
                        desktopChild={
                            <Fade left={!thumbnailTextFirst} right={thumbnailTextFirst} duration={500} cascade>
                                {renderLeftSide(thumbnailTextFirst, data)}
                            </Fade>
                        }
                    />
                    <ResponsiveCompo
                        mobileChild={
                            <Fade bottom duration={500} cascade>
                                {renderLeftSide(thumbnailTextFirst, data)}
                            </Fade>
                        }
                    />
                    <ResponsiveCompo
                        desktopChild={
                            <Fade left={thumbnailTextFirst} right={!thumbnailTextFirst} duration={500}>
                                {renderRightSide(thumbnailTextFirst, data)}
                            </Fade>
                        }
                    />
                    <ResponsiveCompo
                        mobileChild={
                            <Fade bottom duration={500}>
                                {renderRightSide(thumbnailTextFirst, data)}
                            </Fade>
                        }
                    />
                </div>
            })
            }
        </div>

    </section>
  )
}
