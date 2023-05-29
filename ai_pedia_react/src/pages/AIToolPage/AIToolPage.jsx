import './AIToolPage.css'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ShareButton from './LocalComponents/ShareButton/ShareButton';
import { ToastContainer } from 'react-toastify';
import { FuncHelper } from '../../utils/func-helper';
import ResponsiveCompo from '../../components/responsive-compo';
import VersionStateChip from '../../components/VersionStateChip/VersionStateChip';
import Loader from '../../components/Loader/Loader';

export default function AIToolPage() {
  const {state: toolData} = useLocation();
  const [tool, setTool] = useState(null);

  useEffect(() => {
    window.scrollTo({'behavior': 'instant', top: 0})
    console.log("TOOL DATA", toolData);
    const theTool = {
        id: toolData.id,
        category: toolData.category.name,
        category_id: toolData.category.id,
        name: toolData.name,
        version_state: toolData.version_state,
        price: toolData.price,
        description: toolData.description,
        url: toolData.tool_link,
        review_video_url: toolData.video,
        screenshotImage: toolData.image,
        // tags: ['tag1', 'tag2', 'tag2'],
        created_at: toolData.created_at,
        related_categories_links: `
            <a target="_blank" href="/ai-tools/education-assistant">
              <p>Browse 152 AI education assistant tools.</p>
            </a>
            <a target="_blank" href="/ai-tools/social-media-assistant">
              <p>Browse 134 AI social media assistant tools.</p>
            </a>
            <a target="_blank" href="/ai-tools">
              <p>View All Categories</p>
            </a>
        `,
        tool_features: toolData.features,
    };
    setTool(theTool);
    
  }, []);

  // renders the navigation breadcrumbs at the very top
  const renderNavigationBreadcrumbs = () => {
    return (
      <div className="navigation-breadcrumbs">
        <div className="navigation-breadcrumbs-item">
          <Link to="/">Home</Link>
        </div>
        <i class="fa-solid fa-angle-right"></i>
        <div className="navigation-breadcrumbs-item">
          <Link to={`/categories/${tool.category}`}>{tool.category}</Link>
        </div>
        <i class="fa-solid fa-angle-right"></i>
        <div className="navigation-breadcrumbs-item">
          <p>{tool.name}</p>
        </div>
      </div>
    );
  }


  const renderPriceText = () => {
    return (
      <div className="price-text">
        <p>starts from ${tool.price}</p>        
      </div>
    );
  }

  if(!tool){
    return <Loader/>
  }


  console.log("VIDEO", tool.review_video_url);

  return (
    <div className="ai-tool-page">
      <div className="container">
        {renderNavigationBreadcrumbs()}

        <div className="upper-data mb-5">
          <div className="data1">
            <div className='d-flex align-items-center justify-content-start me-md-3 mb-2 mb-md-0'>
            <h1 className='me-1 me-md-0'>{tool.name}</h1>
            <ResponsiveCompo
              mobileChild={
                <ShareButton/>
              }
            />
            </div>
            <a href={tool.url} target='_blank'>
              <button className='visit-btn'>
                <p>Visit</p>
                <i className='bi bi-box-arrow-up-right'></i>
              </button>
            </a>
          </div>
          <div className="data2">
            <ResponsiveCompo
              desktopChild={
                <ShareButton/>
              }
            />
          </div>
        </div>

        <h2>Information about {tool.name}</h2>

        <div className="row mt-3 mb-5">
          <div className="col-md-5">
            <div className="tool-thumbnail mb-md-0 mb-4">
              <div className='image'style={{backgroundImage: `url(${tool.screenshotImage})`}}></div>
              <div className="visit-tool-layer">
                <a href={tool.url} target='_blank'>Visit Tool's Website</a>
                <i className='bi bi-box-arrow-up-right'></i>
              </div>
            </div>
            
          </div>
          <div className="col-md-7">
            <p className='tool-description'>{tool.description}</p>
            <div className="d-flex justify-content-start align-items-center">
              <i class="fa-solid fa-calendar-day me-2"></i>
              <p className='tool-added-on m-0'>{FuncHelper.getAddedOnDate(tool.created_at)}</p>
            </div>
            <div className="d-flex align-items-center mt-4">
              <VersionStateChip state={tool.version_state}/>
              {tool.price > 0 && renderPriceText()}
            </div>

          </div>
        </div>

        <div class="row">
          <div class="col-md-8 pe-md-5">
            <h2 class="mb-4">{`${tool.name} Features`}</h2>
            <div className='tool-features-content'  dangerouslySetInnerHTML={{ __html: tool.tool_features }}></div>
          </div>
          <div class="col-md-4">
            <h2 class="mb-4">Categories</h2>
            {/* <div className='related-categories-links-content'  dangerouslySetInnerHTML={{ __html: tool.related_categories_links }}></div> */}
            <div className='related-categories-links-content'>
              <Link to={`/categories/${tool.category}`}>
                <p className='m-0'>Browse more {tool.category} tools.</p>
              </Link>
              <Link to={`/categories`}>
                <p className='m-0'>Browse all categories.</p>
              </Link>
            </div>
          </div>
        </div>

        {tool.review_video_url &&
          (
            <>
              <h2>{tool.name} Video Review</h2>
              <div className="row">
                <div className="col-md-6">
                  <iframe style={{width: '100%', aspectRatio: 16/9}} src={tool.review_video_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              </div>
            </>
          )
        }


        <ToastContainer />
      </div>
    </div>
  )
}
