import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "96ed43cf-73cc-48d2-9d13-fc0aee672f43");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita obcaecati, modi autem ratione atque sed eaque error quia amet sunt nemo molestiae, suscipit beatae praesentium.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@gmail.com</li>
            <li> <img src={phone_icon} alt="" />+810909213456</li>
            <li> <img src={location_icon} alt="" />Sydney,Opera House <br />MA 02139, Australia</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Phone Number' required />
            <label>Write Your Message</label>
            <textarea name="message" rows="6" placeholder='Enter your query' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
