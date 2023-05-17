import { Fade } from 'react-reveal';
import './GradientTitle.css'

const GradientTitle = ({title, subTitle, alignStart, withBg}) => {
    return ( 
        <div className={`row justify-content-${alignStart ? 'start' : 'center'} ${alignStart ? "text-start" : "text-center"}`}>
            <div className={`col-md-10 col-lg-8 ${alignStart ? "text-start" : "text-center"}`}>
                <Fade bottom cascade={!withBg} duration={500}>
                    <div className={`${alignStart ? 'header-section-start' : 'header-section'} ${withBg ? 'header-section-bg' : ''}`}>
                        <h2 className="section-header-title">{title}</h2>
                        <p className="section-header-description">{subTitle}</p>
                    </div>
                </Fade>
            </div>
        </div>
     );
}
 
export default GradientTitle;