import './AIToolPage.css'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import chatfast from '../../assets/pedia/chatfast.webp.png'
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import ShareButton from './LocalComponents/ShareButton/ShareButton';
import { ToastContainer } from 'react-toastify';
import { FuncHelper } from '../../utils/func-helper';
import ResponsiveCompo from '../../components/responsive-compo';
import VersionStateChip from '../../components/VersionStateChip/VersionStateChip';

export default function AIToolPage() {
  const {name: toolName} = useParams();
  const [tool, setTool] = useState(null);

  useEffect(() => {
    //TODO: use [toolName] and make a call to the server and get the tool that has this name, (also make sure that name is unique in the DB)
    
    //! This one is just fake data, replace it with the one coming from the server, bitch.
    const fakeTool = {
        id: 1,
        is_pouplar: false,
        is_manifest_selected: false,
        name: "ChatFast",
        version_state: 'Premium',
        price: "",
        short_description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente id eius doloribus rerum pariatur, quasi est itaque corrupti dolorum quidem.",
        long_description: "",
        url: "https://www.google.com",
        review_video_url: "https://www.youtube.com/embed/mpgYjTanhNc",
        screenshotImage: chatfast,
        tags: ['tag1', 'tag2', 'tag2'],
        category: 'Photography',
        created_at: "2023-05-26 14:30:00",
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
        tool_features: `
            <p>generate quizzes, flashcards, and notes from any text with AI. Save hours by quickly transforming text, web pages and files into different formats, using the latest learning science. Generate multiple choice, short answer and true/false style questions, then share with anyone. Perfect for teachers, e-learning, and corporate trainings.</p>
            <p><strong>Key Features</strong></p>
            <ul>
              <li>Versatile content sources: Generate quizzes from books, articles, documents, websites, and technical documentation</li>
              <li>Multiple question types: Create multiple choice, true/false, short answer, and fill in the blank questions</li>
              <li>Customization: Set difficulty levels, number of questions, and quiz language</li>
              <li>Chrome extension: Easily turn web pages into quizzes with a convenient browser add-on</li>
              <li>Pro feature: Input up to 5,000 characters for more accurate results, generate quizzes with up to 10 questions, and access all languages</li>
            </ul>
            <p><strong>Use cases</strong> for Quizgecko are suitable for various users:</p>
            <ul>
              <li>Educators seeking to generate quizzes for students based on course materials</li>
              <li>Content creators looking to engage their audience with interactive quizzes</li>
              <li>Individuals aiming to test their knowledge on various topics using personalized quizzes</li>
            </ul>
        `
    };
    setTool(fakeTool);
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

  if(!tool){
    return <p>Loading...</p>
  }

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
            <button className='visit-btn'>
              <p>Visit</p>
              <i className='bi bi-box-arrow-up-right'></i>
            </button>
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
              <img src={tool.screenshotImage} alt={tool.name} />
              <div className="visit-tool-layer">
                <a href={tool.url} target='_blank'>Visit Tool's Website</a>
                <i className='bi bi-box-arrow-up-right'></i>
              </div>
            </div>
            
          </div>
          <div className="col-md-7">
            <p className='tool-description'>{tool.short_description}</p>
            <div className="d-flex justify-content-start align-items-center">
              <i class="fa-solid fa-calendar-day me-2"></i>
              <p className='tool-added-on m-0'>{FuncHelper.getAddedOnDate(tool.created_at)}</p>
            </div>
            <div className="d-flex mt-4">
              <VersionStateChip state={tool.version_state}/>
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
            <div className='related-categories-links-content'  dangerouslySetInnerHTML={{ __html: tool.related_categories_links }}></div>
          </div>
        </div>


        <h2>{tool.name} Video Review</h2>
        <div className="row">
          <div className="col-md-6">
            <iframe style={{width: '100%', aspectRatio: 16/9}} src="https://www.youtube.com/embed/mpgYjTanhNc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>


        <ToastContainer />
      </div>
    </div>
  )
}
