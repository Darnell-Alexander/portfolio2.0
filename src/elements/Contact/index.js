import './index.scss'


export const ContactForm =()=>{
    return(
        <div className="form-container">
            <form> 
              <h1>Contact Form</h1>   
              <ul>
                  <li>
                      <label>FullName</label>
                      <input type={'text'} />
                  </li>
                  <li>
                      <label>E-Mail</label>
                      <input type={'text'} />
                  </li>
                  <li>
                      <label>Phone</label>
                      <input type={'text'} />
                  </li>
                  <li>
                      <label>Reason</label>
                      <select>
                          <option>Social Media Marketing</option>
                          <option>Custom Software Solution</option>
                          <option>Web Development & Design</option>
                          <option>Other</option>
                      </select>
                  </li>
                  <li className='msg'>
                      <label>Message</label>
                      <textArea />
                  </li>
                  <input className='btn' type={'submit'} value='Send Message' />
              </ul>
            </form>
        </div>
    )
}

export const RightBox =()=>{
    return(
        <div className='rb-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.320432849269!2d-71.20851298488911!3d42.59094452848251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3a0bc8333e7f3%3A0xe672636272a97c41!2sAirport%20Rd%2C%20Tewksbury%2C%20MA%2001876!5e0!3m2!1sen!2sus!4v1658562745207!5m2!1sen!2sus" width={'100%'} height={'100%'}   referrerpolicy="no-referrer-when-downgrade"/>
        </div>
    )
}


const ContactPage =()=>{
    return(
        <div className="cpage-container">

        </div>
    )
}

export default ContactPage