import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FirstLoadStateProvider } from './state/first-load-state-provider'
import { DataProvider } from './state/data-provider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstLoadStateProvider>
      <DataProvider>
        <App/>  
      </DataProvider> 
    </FirstLoadStateProvider>
    {/* <FirstLoadStateProvider>
        <ArticlesProvider>
        <ServicesProvider>
        <JobOffersProvider>
            <App />
        </JobOffersProvider>
        </ServicesProvider>
        </ArticlesProvider>
    </FirstLoadStateProvider> */}
  </React.StrictMode>
)
