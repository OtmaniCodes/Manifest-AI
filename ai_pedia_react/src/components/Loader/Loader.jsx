import './Loader.css'
const Loader = () => {
    return ( 
        <div className='loader-container container'>
            <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
            </div>
        </div>
     );
}
 
export default Loader;