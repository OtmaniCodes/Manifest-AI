import React from "react"
import useScrollToTop from "../../../utils/custom-hooks/useScrollToTop"
import ServicesSection from "../../components/sections/ServicesSection/ServicesSection"
import { Helmet } from "react-helmet"

export default function Services() {
  useScrollToTop() 
  
  return (
    <div className="services-page pt-5">
        <Helmet>
          <title>SERVICES - MANIFEST AI</title>
        </Helmet>
        <ServicesSection/>
    </div>
  )
}