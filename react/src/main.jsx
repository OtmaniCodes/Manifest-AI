import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ArticlesProvider } from './state/aricles-provider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ArticlesProvider>
      <App />
    </ArticlesProvider>
  </React.StrictMode>,
)
