import { Link } from 'react-router-dom';
import './Service.css'
import Fade from 'react-reveal/Fade';

const Service = (props) => {
    return ( 
        <Fade bottom>
            <div className="col-md-3 text-center align-items-center">
            {/* <Link to={`/service/${props.title}`}> */}
                <div className="single-service"  onClick={() => props.onServiceClick(props.index)} style={{backgroundImage: `url(${props.image})`}}>
                    <div className='service-shadow'></div>
                    <div className="content">
                        <span className="icon my-4">
                            {/* <i className="fab fa-battle-net"></i> */}
                            <img src={props.icon} alt="" />
                        </span>
                        {/* <p className="services-description">{props.desc}</p> */}

                        <h3 className="services-title">{props.title}</h3>
                    </div>
                    <span className="circle-before"></span>
                </div>
            {/* </Link> */}
            </div>
        </Fade>
                        // <Link to={`/service/${props.title}`} className="learn-more">Learn More</Link>
     );
}
 
export default Service;