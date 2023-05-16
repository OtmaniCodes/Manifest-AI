import React from 'react'
import ContactSection from '../../components/sections/ContactSection/ContactSection'
import useScrollToTop from '../../../utils/custom-hooks/useScrollToTop'
import { Helmet } from 'react-helmet'

export default function Contact() {
  useScrollToTop() 
  return (
    <div className="contact-page py-5">
        <Helmet>
          <title>CONTACT - MANIFEST AI</title>
        </Helmet>
        <ContactSection/>
    </div>
  )
}
