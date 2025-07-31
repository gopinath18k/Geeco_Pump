import './Contactus.css'
import { FaArrowUp } from 'react-icons/fa';

export const Contactus = () => {
    
  return (
    <div>
         <div className="containerfluid contact-first-container">
            <div className="contact-first-inner-container">
                <h1 className='contact-first-head'>Love To Hear From You,</h1>
                <h1 className='contact-first-head'>Get In Touch .</h1>
                <form action="" className='mt-5'>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="Name" className='contact-label-field'>Your Name</label><br />
                            <input className='contact-input-box' type="text" placeholder="" style={{ width: '90%', height: '40px', fontSize: '18px' }}/>
                        </div>
                        <div className="col">
                             <label htmlFor="Number" className='contact-label-field'>Your Phone Number</label><br />
                            <input className='contact-input-box' type="text" placeholder="" style={{ width: '90%', height: '40px', fontSize: '18px' }}/>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <label htmlFor="Message" className='contact-label-field'>Message</label><br />
                            <input className='contact-input-box' type="text" placeholder="" style={{ width: '95%', height: '100px', fontSize: '18px' }}/>
                            <button className='contact-submit-btn mt-5'>Send Message <FaArrowUp /></button>
                        </div>
                        
                    </div>
                </form>
                  
                    
                    
               
                
            </div>
         </div>

    </div>
  )
}
