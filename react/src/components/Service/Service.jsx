import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    return ( 
        <div className="col-md-6 col-lg-4 text-center">
            <div className="single-service" style={{backgroundImage: `url(${props.image})`}}>
                <div className='service-shadow'></div>
                <div className="content">
                    <span className="icon">
                        {/* <i className="fab fa-battle-net"></i> */}
                        <img src={props.icon} alt="" />
                    </span>
                    <h3 className="services-title">{props.title}</h3>
                    <p className="services-description">{props.desc}</p>
                    <Link to={`/service/${props.id}`} className="learn-more">Learn More</Link>
                </div>
                <span className="circle-before"></span>
            </div>
        </div>
     );
}
 
export default Service;