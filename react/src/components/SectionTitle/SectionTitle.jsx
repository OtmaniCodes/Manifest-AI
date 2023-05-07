import './SectionTitle.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Fade from 'react-reveal/Fade'

const SectionTitle = ({title, subTitle, alignStart}) => {
    return ( 
        <div className={`row justify-content-center text-center`}>
            <div className={`col-md-10 col-lg-8 text-center`}>
                <Fade bottom cascade duration={500}>
                    <div className="header-section">
                        <h2 className="section-header-title">{title}</h2>
                        <p className="section-header-description">{subTitle}</p>
                    </div>
                </Fade>
            </div>
        </div>
     );
}
 
export default SectionTitle;