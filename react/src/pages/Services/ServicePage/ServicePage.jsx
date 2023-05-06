import { useParams } from 'react-router-dom'
import './ServicePage.css'
import service from './data'
const ServicePage = (full) => {
    const {id}=useParams()
    console.log(service)
    const data=service.find((e)=>e.id==id)
    console.log(data)
    return ( 
    <div className="service-detail" style={{marginTop:full.full?'80px':''}}>
    <div className="container">
    <div className="row d-flex">
        <div className="col-md-6">
        <img src={data.image} width='95%' height='100%' alt="Service 1" className="img-responsive shadow-lg" />
        </div>
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
    </div>
    </div>
    </div>
     );
}
 
export default ServicePage;