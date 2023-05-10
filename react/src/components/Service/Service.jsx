import { Link } from 'react-router-dom';
import './Service.css'
import Fade from 'react-reveal/Fade';

const Service = (props) => {
    var index = props.index;

    return ( 
        <Fade bottom>
            {/* <Link to={`/service/${props.title}`}> */}
            <>
                <div className="single-service" onClick={() => props.onServiceClick(index)} style={{backgroundImage: `url(${props.service.image})`}}>
                    <div className='service-shadow'></div>
                    <div className="content">
                        <span className="icon my-4">
                            {/* <i className="fab fa-battle-net"></i> */}
                            <img src={props.service.icon} alt="service icon" />
                        </span>
                        <h3 className="services-title">{props.service.title}</h3>
                        <p className="services-description">{props.desc}</p>

                    </div>
                    <span className="circle-before"></span>
                </div>



                {/* <div className="mobile-content mt-2 mb-5">
                    <p className="description">{props.service.bigDescription}</p>
                    <div className='list-service'>
                    <div className="row justify-content-center">
                        {props.service.list.map((e,i)=>(
                        <div className="mb-2">
                            <p key={i}>{e}</p>
                        </div>
                        ))}
                    </div>
                    </div>
                </div> */}

                <div className="accordion mobile-content" id={`collapsibleList-${index}`}>
                    <div className="card">
                            <button
                                className="btn btn-link text-black"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapseContent-${index}`}
                                aria-expanded="true"
                                aria-controls={`collapseContent-${index}`}
                                >
                                LEARN MORE
                            </button>
                        <div id={`collapseContent-${index}`} className="collapse" aria-labelledby={`heading-${index}`} data-bs-parent={`#collapsibleList-${index}`}>
                        <div className="card-body">
                            <div className="">
                            {/* <h3 className="title">{service.title}</h3> */}
                            <p className="description">{props.service.bigDescription}</p>
                            <div className="list-service">
                                <div className="row justify-content-center">
                                {props.service.list.map((e, i) => (
                                    <div className="mb-2" key={i}>
                                    <p>{e}</p>
                                    </div>
                                ))}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>



            </>
            {/* </Link> */}
        </Fade>
                        // <Link to={`/service/${props.title}`} className="learn-more">Learn More</Link>
     );
}
 
export default Service;