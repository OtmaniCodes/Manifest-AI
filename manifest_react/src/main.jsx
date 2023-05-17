import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ArticlesProvider } from './state/aricles-provider'
import { FirstLoadStateProvider } from './state/first-load-state-provider'

import  store  from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <FirstLoadStateProvider>
      <ArticlesProvider>
        <App />
      </ArticlesProvider>
    </FirstLoadStateProvider>
    </Provider>
  </React.StrictMode>
)
