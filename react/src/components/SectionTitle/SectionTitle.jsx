import './SectionTitle.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const SectionTitle = ({title, subTitle}) => {
    return ( 
        <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
                <div className="header-section">
                    <h2 className="section-header-title">{title}</h2>
                    <p className="section-header-description">{subTitle}</p>
                </div>
            </div>
        </div>
     );
}
 
export default SectionTitle;