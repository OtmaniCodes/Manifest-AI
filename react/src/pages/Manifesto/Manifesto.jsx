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
import useTranslator from '../../components/Translator/useTranslator';
// import AutoTypingText from '../../components/AutoTypingText/AutoTypingText';
const Manifesto = () => {
  useScrollToTop()
//   console.log(useTranslator(manifesto,'spainish'))
    const [targetLanguage, setTargetLanguage] = useState("original");
    const handleLanguage = (event) => {
        setTargetLanguage(event.target.value);
        setIsLoading(true)
    };
    const mydata=useTranslator(manifesto,targetLanguage)
    // console.log(mydata)
    // useEffect(async()=>{
    //     setMydata(useTranslator(manifesto,targetLanguage))
    // } ,[targetLanguage]); // Include argumentValue as a dependency
  
    
    return ( 
        <div className="commendments-container pt-5">
            <Helmet>
                <title>MANIFESTO & The 10 COMMANMENTS - MANIFEST AI</title>
            </Helmet>
            {/* <SectionTitle title={"Manifest & The 10 commandments"} subTitle={""}/> */}
            <SectionTitle title={"Our Manifest"}/>
            <div className='commendments-header'>
                {/* <h3>MANIFEST</h3> */}
                <div className="container">
                    {/* ===== */}
                <h1>Language</h1>
                <div>
                    <label htmlFor="language">Select Language:</label>
                    <select id="language" value={targetLanguage} onChange={handleLanguage}>
                        <option value="original">English</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Japanese">Japanese</option>
                        {/* Add more language options as needed */}
                    </select>
                </div>
                {/* ======= */}
                    <div className="row">
                        <div className="col-mf-10">
                            <p className='fw-bold mb-2'>Dear friends of artificial intelligence,</p>
                            <p className='mb-2'>We live in a time where technology is evolving at a rapid pace, disrupting both our daily lives and our future. Artificial intelligence (AI) is at the heart of this revolution, transforming industries, creating new opportunities while solving problems that humanity has faced for decades. However, these technological advancements also raise ethical questions and important challenges.</p>
                            <p className='mb-5 pb-3'>We, the members of MANIFEST AI, are committed to ethical and beneficial AI to humanity. We are committed to promoting responsible, moral, and human-centered artificial intelligence. We write this manifesto to rally all those who believe in the power of AI to improve our lives, while preserving our humanity and ensuring a sustainable and equitable future for all.</p>
                            {
                                mydata.map((data, i) => {
                                    var graphicsFirst = i % 2 === 0;
                                    return <div key={i} className="commendment-wrapper more-about-row row justify-content-between align-items-center">
                                        <Fade left={!graphicsFirst} right={graphicsFirst} cascade>
                                            <div className={`manifesto-text col-md-7 text-md-start text-center order-2 order-md-${graphicsFirst ? 2 : 1}`}>
                                                <h3 className='mb-md-3 mb-0 fw-bold'>{data.title}</h3>
                                                {
                                                    data.descriptions.map((d, j) => <p key={j}>{d}</p>)
                                                }
                                            </div>
                                        </Fade>
                                        <Fade left={graphicsFirst} right={!graphicsFirst}>
                                            <div style={{height:'200px'}} className={`col-md-4 mb-3 mb-md-0 text-md-start text-center order-1 order-md-${graphicsFirst ? 1 : 2}`}>
                                                <img src={data.graphic} className='commenment-img more-about-img order-1 shadow-lg' />
                                            </div>
                                        </Fade>
                                    </div>
                                })
                            }
                            <div className='lead download-manifest d-flex justify-content-center'>Download&nbsp;
                                <a href={manifestoPDF} download>The Manifest</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='commendments-content pb-4'>
              {/* <h3>THE 10 COMMANDMENTS</h3> */}
                <SectionTitle title={"The 10 Directives"}/>
                <CommendmentsSlider/>
                <div className='lead download-manifest d-flex justify-content-center mt-5'>Download&nbsp;
                    <a href={commendmentsPDF} download>The 10 directives</a>
                </div>
            </div>

        </div>
     );
}
 
export default Manifesto;