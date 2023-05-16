import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ArticlesProvider } from './state/aricles-provider'
import { FirstLoadStateProvider } from './state/first-load-state-provider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstLoadStateProvider>
      <ArticlesProvider>
        <App />
      </ArticlesProvider>
    </FirstLoadStateProvider>
  </React.StrictMode>
)
