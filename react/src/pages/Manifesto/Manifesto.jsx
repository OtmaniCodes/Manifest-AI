import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Manifesto.css'
import Fade from 'react-reveal/Fade'
import manifestoPDF from '../../assets/manifesto/manifest.pdf'
import commendmentsPDF from '../../assets/manifesto/commendments.pdf'
import logo from '../../assets/manifest_logo.png'
import manifesto from './Ten-Commendments'
import CommendmentsSlider from './CommendmentsSlider';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import { Helmet } from 'react-helmet';
import useScrollToTop from '../../hooks/useScrollToTop';
import { useEffect, useState } from 'react';
// import AutoTypingText from '../../components/AutoTypingText/AutoTypingText';
const Manifesto = () => {
  useScrollToTop()
    
    return ( 
        <div className="commendments-container px-5 pt-5">
            <Helmet>
                <title>MANIFESTO & The 10 COMMENMENTS - MANIFEST AI</title>
            </Helmet>
            <SectionTitle title={"Manifest & The 10 Commendments"} subTitle={""}/>
            <div className='commendments-header'>
                <h3>MANIFEST</h3>
                {/* <AutoTypingText text={text} delay={10} /> */}
                {/* <AutoTypingText text="hello \n younes \n how are you" /> */}

                <p>Dear friends of artificial intelligence,</p>
                <p>We live in a time where technology is evolving at a rapid pace, disrupting both our daily lives and our future. Artificial intelligence (AI) is at the heart of this revolution, transforming industries, creating new opportunities while solving problems that humanity has faced for decades. However, these technological advancements also raise ethical questions and important challenges.</p>
                <p>We, the members of MANIFEST AI, are committed to ethical and beneficial AI to humanity. We are committed to promoting responsible, moral, and human-centered artificial intelligence. We write this manifesto to rally all those who believe in the power of AI to improve our lives, while preserving our humanity and ensuring a sustainable and equitable future for all.</p>
                {
                manifesto.map((data, i) => {
                    var graphicsFirst = i % 2 === 0;
                    return <div key={i} className="commendment-wrapper more-about-row row justify-content-between align-items-center">
                        <Fade left={!graphicsFirst} right={graphicsFirst} cascade>
                        <div className={`more-about-text col-md-7 text-md-start text-center order-2 order-md-${graphicsFirst ? 2 : 1}`}>
                            <h3 className='mb-md-3 mb-0 fw-bold'>{data.title}</h3>
                            {
                            data.descriptions.map((d, j) => <p key={j}>{d}</p>)
                            }
                        </div>
                        </Fade>
                        <Fade left={graphicsFirst} right={!graphicsFirst}>
                            <div className={`col-md-4 mb-3 mb-md-0 text-md-start text-center order-1 order-md-${graphicsFirst ? 1 : 2}`}>
                                <img src={data.graphic} className='commenment-img more-about-img order-1 shadow-lg' />
                            </div>
                        </Fade>
                    </div>
                })
                }

                <div className='lead download-manifest'>Download -
                    <a href={manifestoPDF} download> The Manifest</a>
                </div>
            </div>
            <hr />
            <div className='commendments-content pb-4'>
              <h3>THE 10 COMMENDMENTS</h3>
                <CommendmentsSlider/>
                <div className='lead download-manifest'>Download -
                    <a href={manifestoPDF} download> The 10 Commendments</a>
                </div>
            </div>

        </div>
     );
}
 
export default Manifesto;