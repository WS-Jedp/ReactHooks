import React, { useState } from 'react'

export const ExampleHook:React.FC<{title: string, text: string}> = ({children, title, text}) => {

  const [name, setName] = useState<string | null>(null)

  
  return (
    <div>
      Hello world!
    </div>
  )
}
