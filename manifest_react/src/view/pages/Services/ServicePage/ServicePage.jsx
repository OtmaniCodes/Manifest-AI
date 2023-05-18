import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesData } from '../../../../constants/data';
import './ServicePage.css';
import useScrollToTop from '../../../../utils/custom-hooks/useScrollToTop';
import { Helmet } from 'react-helmet';
import { Fade } from 'react-reveal';
import ResponsiveCompo from '../../../components/responsive-compo';
import { useDataSource } from '../../../../state/data-provider';

export default function ServicePage() {
  const {services, loading} = useDataSource();  


  useScrollToTop();
  const { slug } = useParams();
  const service = services.find((service) => service.slug === slug);
  const { title, image, bigDescription, list } = service;

  // debugger;
  return (
    <div className="service-page">
      <Helmet>
        <title>SERVICES | {slug} - MANIFEST AI</title>
      </Helmet>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <Fade left duration={500}>
            <div className="col-md-6 p-0 mb-4 mb-md-0 pe-md-5 text-center">
              <img src={image} alt={title} className="service-page__image" />
            </div>
          </Fade>
          <ResponsiveCompo
            desktopChild={
              <Fade cascade right duration={500}>
                <div className="col-md-6 ">
                  <h1 className="service-page__title">{title}</h1>
                  <p className="service-page__description">{bigDescription}</p>
                  <ul className="service-page__list">
                    {list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Fade>
            }
          />
          <ResponsiveCompo
            mobileChild={
              <Fade cascade bottom duration={500}>
                <div className="col-md-6 ">
                  <h1 className="service-page__title">{title}</h1>
                  <p className="service-page__description">{bigDescription}</p>
                  <ul className="service-page__list">
                    {list.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Fade>
            }
          />
        </div>
      </div>
    </div>
  );
}
