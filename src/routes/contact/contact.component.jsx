import React from 'react'
import './contact.style.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-background'></div>

      <div className='contact-form-container'>
        <h2>Contact Us</h2>
        <form className='form'>
          <section className='form-container'>
            <label htmlFor="name">Full Name</label>
            <input type="text" id='name'  placeholder='Enter full name...'/>
          </section>
          <section className='form-container'>
            <label htmlFor="email">Email</label>
            <input type="text" id='email'  placeholder='Enter email...'/>
          </section>
          <section className='form-container'>
            <label htmlFor="message">Message</label>
            <textarea name="" id="message" cols="30" rows="5" placeholder='Enter message...'></textarea>
          </section>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact