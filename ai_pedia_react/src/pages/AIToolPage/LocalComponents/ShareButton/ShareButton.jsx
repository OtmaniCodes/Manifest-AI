import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'
import './ShareButton.css'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function ShareButton() {
  const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleEscapeClose = (event) => {
            if (event.keyCode === 27) {
                setIsActive(false);
            }
        }

        // const handleWindowClick = () => {
        //     if (isActive) {
        //         setIsActive(false);
        //     }
        // };

        if (isActive) {
            document.addEventListener('keydown', handleEscapeClose);
            // window.addEventListener('click', handleWindowClick);
        }
        return () => {
            document.removeEventListener('keydown', handleEscapeClose);
            // window.removeEventListener('click', handleWindowClick);
        };
    }, [isActive]);


    const handleCopyToClipBoard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast.success('Copied to clipboard!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
      })
      .catch((error) => {
        toast.error('Couldn\'t copy to clipboard!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
      });
  };

  return (
    <div className="share-btn-container">
        <i className="fa fa-share-nodes share-icon" onClick={() => setIsActive((oldVal) => !oldVal)}></i>
        <div className={`share-btns ${isActive ? 'share-active' : ''}`}>
            <div className="links">
                <FacebookShareButton url={window.location.href}>
                    <a className="facebook"><i className="bu bi-facebook"></i></a>
                </FacebookShareButton >
                <TwitterShareButton  url={window.location.href}>
                    <a className="twitter"><i className="bu bi-twitter"></i></a>
                </TwitterShareButton>
                <LinkedinShareButton url={window.location.href}>
                    <a className="linkedin"><i className="bu bi-linkedin"></i></a>
                </LinkedinShareButton>
            </div>
            <div className='copy-link-btn' onClick={handleCopyToClipBoard}>
                <i class="fa-regular fa-copy"></i>
                <p>Copy Link</p>
            </div>
        </div>
    </div>
  )
}
