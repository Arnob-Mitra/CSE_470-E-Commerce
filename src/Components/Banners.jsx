import React from 'react'
import '../styles/banners.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faCheck, faPhoneVolume, faTruckFast } from '@fortawesome/free-solid-svg-icons'
const Banners = () => {
  return (
    <div className='b-container'>
        <div className='b-row'>
            <div className='b-col'>
                  <FontAwesomeIcon icon={faCheck} />
                  <span>  Quality Product  </span>
            </div>
            <div className='b-col'>
                  <FontAwesomeIcon icon={faTruckFast} />
                  <span>  Free Shipping  </span>

            </div>
            <div className='b-col'>
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                  <span>  7-Day Return  </span>  
            </div>
            <div className='b-col'>
                  <FontAwesomeIcon icon={faPhoneVolume} />
                  <span>  24/7 Support  </span>
            </div>
        </div>
        
        

    </div>
  )
}

export default Banners