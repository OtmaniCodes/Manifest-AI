import './Manifesto.css'
import Fade from 'react-reveal/Fade'
import manifestoPDF from '../../../assets/manifest.pdf'
import commendmentsPDF from '../../../assets/commendments.pdf'
import { Helmet } from 'react-helmet';
import GradientTitle from '../../components/GradientTitle/GradientTitle';
import useScrollToTop from '../../../utils/custom-hooks/useScrollToTop'
// import { manifestoData } from '../../../constants/data'
import DirectivesSection from '../../components/sections/DirectivesSection/DirectivesSection'
import { useDataSource } from '../../../state/data-provider';


const Manifesto = () => {
  useScrollToTop()
  var {loading,manifesto,manifestoContent} = useDataSource();
  console.log(manifestoContent)
  console.log(loading)
    manifesto=manifesto[0]
    
    return ( 
        <div className="manifesto-page pt-5">
            <Helmet>
                <title>Manifesto & The 10 Directives - MANIFEST AI</title>
            </Helmet>
            {/* <SectionTitle title={"Manifest & The 10 commandments"} subTitle={""}/> */}
            <GradientTitle title={"OUR MANIFEST"}/>
            <div className='commendments-header'>
                {/* <h3>MANIFEST</h3> */}
                <div className="container">
                    <div className="row">
                        <div className="col-mf-10">
                            <p className='fw-bold mb-2'>{!loading && manifesto.title}</p>
                            {!loading && manifesto.body.map((e,i)=>(
                                <p key={i} className="mb-2 pb-3">
                                    {e}
                                </p>
                            ))}
                            <div style={{height: '100px'}} ></div>
                            {
                                manifestoContent.map((data, i) => {
                                    var graphicsFirst = i % 2 === 0;
                                    return <div key={i} className="commendment-wrapper more-about-row row justify-content-between align-items-center">
                                        <Fade left={!graphicsFirst} right={graphicsFirst} duration={500} cascade>
                                            <div className={`manifesto-text col-md-7 text-md-start text-center order-2 order-md-${graphicsFirst ? 2 : 1}`}>
                                                <h3 className='mb-md-3 mb-0 fw-bold'>{data.title}</h3>
                                                {
                                                    data.body.map((d, j) => <p key={j}>{d}</p>)
                                                }
                                            </div>
                                        </Fade>
                                        <Fade left={graphicsFirst} right={!graphicsFirst} duration={500}>
                                            <div className={`col-md-4 mb-3 mb-md-0 text-md-start text-center order-1 order-md-${graphicsFirst ? 1 : 2}`}>
                                                <img src={data.image} className='commenment-img more-about-img order-1 shadow-lg' />
                                            </div>
                                        </Fade>
                                    </div>
                                })
                            }
                            <div className='lead download-manifest d-flex justify-content-center text-white'>Download&nbsp;
                                <a href={manifestoPDF} download>The Manifest</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='commendments-content pb-4'>
                <DirectivesSection/>
                <div className='lead download-manifest d-flex justify-content-center mt-5 text-white'>Download&nbsp;
                    <a href={commendmentsPDF} download>The 10 directives</a>
                </div>
            </div>

        </div>
     );
}
 
export default Manifesto;
