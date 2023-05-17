import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ArticlesProvider } from './state/aricles-provider'
import { FirstLoadStateProvider } from './state/first-load-state-provider'
import { JobOffersProvider } from './state/joboffers-provider'
import { ServicesProvider } from './state/services-provider'
import { RootLoaderProvider } from './state/root-loader-provider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstLoadStateProvider>
      {/* <RootLoaderProvider> */}
        <ArticlesProvider>
        <ServicesProvider>
        <JobOffersProvider>
            <App />
        </JobOffersProvider>
        </ServicesProvider>
        </ArticlesProvider>
      {/* </RootLoaderProvider> */}
    </FirstLoadStateProvider>
  </React.StrictMode>
)
