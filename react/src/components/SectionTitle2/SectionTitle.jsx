import './SectionTitle.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
const SectionTitle = (props) => {
    return ( 
        <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
                <div className="header-section">
                    <h2 className="section-header-title">{props.title}</h2>
                    {props.visibility && <p className="section-header-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et.</p>}
                </div>
            </div>
        </div>
     );
}
 
export default SectionTitle;