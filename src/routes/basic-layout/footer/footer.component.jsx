import React from 'react'
import './footer.style.scss'

import FacebookIcon from '@mui/icons-material/Facebook';

import InstagramIcon from '@mui/icons-material/Instagram';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
      <footer>
          <div className="social-container">
                <FacebookIcon 
                    sx={{ fontSize: 50 }}
                />
                <InstagramIcon 
                sx={{ fontSize: 50 }}
                />
                <TwitterIcon 
                    sx={{ fontSize: 50 }}
                />
                <LinkedInIcon 
                    sx={{ fontSize: 50 }}
                />
          
          </div>

          <small>@2022 JapaneseFood.simon.com</small>
          

    
      </footer>
  )
}

export default Footer