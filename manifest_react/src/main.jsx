import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FirstLoadStateProvider } from './state/first-load-state-provider'
import { DataProvider } from './state/data-provider'
import withErrorBoundary from './view/components/ErrorBoundary/ErrorBoundary'

// I wrapped this to catch every error and show a screen when that happens, dumbass Mr.Dashboard
const AppWithErrorBoundary = withErrorBoundary(App);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstLoadStateProvider>
      <DataProvider>
        <AppWithErrorBoundary />
      </DataProvider> 
    </FirstLoadStateProvider>
  </React.StrictMode>
)
