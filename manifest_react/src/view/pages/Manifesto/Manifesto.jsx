import './Manifesto.css'
import Fade from 'react-reveal/Fade'
import manifestoPDF from '../../../assets/manifest.pdf'
import commendmentsPDF from '../../../assets/commendments.pdf'
import logo from '../../../assets/images/ma_logo_ethics.png'
import { Helmet } from 'react-helmet';
import GradientTitle from '../../components/GradientTitle/GradientTitle';
import useScrollToTop from '../../../utils/custom-hooks/useScrollToTop'
import { manifestoData } from '../../../constants/data'
import DirectivesSection from '../../components/sections/DirectivesSection/DirectivesSection'


const Manifesto = () => {
  useScrollToTop()
    
    return ( 
        <div className="manifesto-page pt-5">
            <Helmet>
                <title>Manifesto & The 10 Directives - MANIFEST AI</title>
            </Helmet>
            {/* <SectionTitle title={"Manifest & The 10 commandments"} subTitle={""}/> */}
            <GradientTitle title={"Our Manifest"}/>
            <div className='commendments-header'>
                {/* <h3>MANIFEST</h3> */}
                <div className="container">
                    <div className="row">
                        <div className="col-mf-10">
                            <p className='fw-bold mb-2'>Dear friends of artificial intelligence,</p>
                            <p className='mb-2'>We live in a time where technology is evolving at a rapid pace, disrupting both our daily lives and our future. Artificial intelligence (AI) is at the heart of this revolution, transforming industries, creating new opportunities while solving problems that humanity has faced for decades. However, these technological advancements also raise ethical questions and important challenges.</p>
                            <p className='mb-5 pb-3'>We, the members of MANIFEST AI, are committed to ethical and beneficial AI to humanity. We are committed to promoting responsible, moral, and human-centered artificial intelligence. We write this manifesto to rally all those who believe in the power of AI to improve our lives, while preserving our humanity and ensuring a sustainable and equitable future for all.</p>
                            {
                                manifestoData.map((data, i) => {
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
            <div className='commendments-content pb-4'>
                <DirectivesSection/>
                <div className='lead download-manifest d-flex justify-content-center mt-5'>Download&nbsp;
                    <a href={commendmentsPDF} download>The 10 directives</a>
                </div>
            </div>

        </div>
     );
}
 
export default Manifesto;