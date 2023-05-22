import { Fade } from 'react-reveal';
import './AIQuestionSection.css'
import React, { useEffect, useState } from 'react'
import AIQuestionGraphic2 from '../../../../assets/images/ai-question-2-graphic.png'



const aiQuestions = [
  {
    id: 1,
    question: 'What’s AI? ',
    descriptions: [
      "Artificial Intelligence or AI refers to the development of machine intelligence that can process information and learn from it without being explicitly programmed.",
      "Businesses are always looking for ways to boost their performance and increase efficiency, unlock value and unleash growth.",
      "AI offers a range of benefits to businesses, including automating mundane and repetitive tasks, analyzing large amounts of data, and providing valuable insights that can aid decision-making. In other words.",
    ],
    graphic: null,
  },
  {
    id: 2,
    question: '',
    graphic: AIQuestionGraphic2 ,
    descriptions: [
      "4 in 5 companies declare AI as a top priority, with 83% making it a critical part of their strategy, 80% of retail executives plan to adopt AI automation by 2025, a move endorsed by 86% of CEOs who see AI as mainstream technology.",
      "Most compelling, AI is projected to increase employee productivity by an impressive 40% by 2035. According to GrandViewResearch, by 2030, the AI market is projected to explode to an estimated $1.81 trillion. That's over 13 times its current size! With a predicted annual growth rate of 38.1%, there's never been a better time to introduce AI into your business.",
    ],
  },
  {
    id: 3,
    question: 'Are you ready to embrace the future?',
    graphic: null,
    descriptions: [
      "Start your AI journey with Manifest AI today and be a part of the revolution that is reshaping industries and economies across the globe.",
      "Embrace AI and stay ahead of the curve!",
    ]
  },
]


export default function AIQuestionSection() {
  const [expandedId, setExpandedId] = useState(null);

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

  // useEffect(() => {
  //   window.addEventListener('click', handleOutsideClick);
  //   return () => {
  //     window.removeEventListener('click', handleOutsideClick);
  //   };
  // }, []);


  return (
    <section id='ai-questions-section'>
        <div className="container">
            {
            aiQuestions.map((data, i) => {
                var thumbnailTextFirst = i % 2 === 0;
                return <div key={i} className="row justify-content-center align-items-center mb-3 mb-md-0">
                    <Fade left={!thumbnailTextFirst} right={thumbnailTextFirst} duration={500} cascade>
                        <div className={`texts col-md-6 text-start order-2 order-md-${thumbnailTextFirst ? 2 : 1}`}>
                            {/* <h3 className='mb-md-3 mb-0 fw-bold'>{data.title}</h3> */}
                            {
                              data.descriptions.map(d => {
                                return <p className="text-start fw-light fs-6 lh-lg">{d}</p>
                              })
                            }
                        </div>
                    </Fade>
                    <Fade left={thumbnailTextFirst} right={!thumbnailTextFirst} duration={500}>
                        <div className={`thumbnail-container col-md-6 order-1 p-0 order-md-${thumbnailTextFirst ? 1 : 2} ${expandedId === data.id ? 'expanded' : ''}`}>
                            <div className="thumbnail">
                                {data.graphic && <img src={data.graphic} alt={data.title??'quetion title'} /> }
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
                    </Fade>
                </div>
            })
            }
        </div>

    </section>
  )
}
