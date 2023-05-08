import { useParams } from 'react-router-dom'
import './ServicePage.css'
import service from './data'
import Fade from 'react-reveal/Fade'
import useScrollToTop from '../../../hooks/useScrollToTop'
import { Helmet } from 'react-helmet'



const ServicePage = (full) => {
    useScrollToTop()
    const {slug}=useParams()
    console.log(service)
    const data=service.find((e)=>e.title==slug)
    console.log(data)
    return ( 
    <div className="service-detail" style={{marginTop:full.full?'80px':''}}>
    <Helmet>
        <title>SERVICES | {slug} - MANIFEST AI</title>
    </Helmet>
    <div className="container">
    <div className="row d-flex">
        <Fade left duration={450}>
            <div className="col-md-6">
                <img src={data.image} width='95%' height='100%' alt="Service 1" className="img-responsive shadow-lg" />
            </div>
        </Fade>
        <Fade right duration={450}>
            <div className="col-md-6">
                <h1 className="service-title my-3">{data.title}</h1>
                <h4 className="service-date">{data.date}</h4>
                <p className="service-description">{data.description}</p>
                <div className="service-steps">
                    {/* <h3 className="service-subtitle">How We Do Service 1</h3> */}
                    <ul className='list-service'>
                        {data.list.map((e,i)=>(
                            <li key={i}>{e}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fade>
    </div>
    </div>
    </div>
     );
}
 
export default ServicePage;