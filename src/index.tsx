import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from './context/ThemeContext'

const App = () => <div>Hello World</div>

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>, window.document.getElementById('root'))
