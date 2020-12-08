import React from 'react'

export const UseRef:React.FC = () => {

  const inputName = React.useRef<null | HTMLInputElement>(null)

  // inputName.current?.value

  return (
    <div>
      <input type="text" name="input" id="input" ref={inputName}/>
    </div> 
  )
}
