import React, { useState } from 'react'

const ThemeContext = React.createContext({})

export const ThemeProvider:React.FC = ({children}) => {

  const [theme, setTheme] = useState<string>('white')

  const initialState:object = {
    theme,
    setTheme
  }

  return (
    <ThemeContext.Provider value={initialState}>
      {
        children
      }
    </ThemeContext.Provider>
  )
} 
