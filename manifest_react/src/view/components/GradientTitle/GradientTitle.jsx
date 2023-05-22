import { Fade } from 'react-reveal';
import './GradientTitle.css'

const GradientTitle = ({title, subTitle, alignStart, withBg, titleColor, subTitleColor}) => {
    return ( 
        <div className={`row justify-content-${alignStart ? 'start' : 'center'} ${alignStart ? "text-start" : "text-center"}`}>
            <div className={`col-md-10 col-lg-8 ${alignStart ? "text-start" : "text-center"}`}>
                <Fade bottom cascade={!withBg} duration={500}>
                    <div className={`${alignStart ? 'header-section-start' : 'header-section'} ${withBg ? 'header-section-bg' : ''}`}>
                        <h2 className="section-header-title" style={{color: titleColor ? titleColor : null}}>{title}</h2>
                        <p className="section-header-description" style={{color: subTitleColor ? subTitleColor : null}}>{subTitle}</p>
                    </div>
                </Fade>
            </div>
        </div>
     );
}
 
export default GradientTitle;