import './PopUp.css'
const PopUp = (props) => {
    return ( 
        <div className="modal pop-container" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Apply Now</h5>
                        <button type="button" className="close" onClick={props.close}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="resume" className='mt-4 global-btn'>Upload Resume</label>
                                <input type="file" className="resume form-control-file" id="resume" required />
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={props.close}>Close</button>
                        <button type="button" className="btn btn-primary">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PopUp;