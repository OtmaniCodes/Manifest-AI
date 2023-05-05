import './Service.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
const Service = (props) => {
    return ( 
        <div className="col-md-6 col-lg-4 text-center">
            <div className="single-service" style={{backgroundImage: `url(${props.image})`}}>
                <div className='service-shadow'></div>
                <div className="content">
                    <span className="icon">
                        <i className="fab fa-battle-net"></i>
                    </span>
                    <h3 className="services-title">{props.title}</h3>
                    <p className="services-description">{props.desc}</p>
                    <a href="#" className="learn-more">Learn More</a>
                </div>
                <span className="circle-before"></span>
            </div>
        </div>
     );
}
 
export default Service;