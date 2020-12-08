import React, { useReducer } from 'react'

type State = {
  count: number;
}

const initialState:State = { count: 0 }

type ACTIONTYPES = | { type: "decrement"; payload: number } |  { type: "increment"; payload: string }

function reducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload }
    case "decrement":
      return { count: state.count - Number(action.payload) } 
    default:
      throw new Error("There is no the necessary type")
  }
}

export const exampleComponent:React.FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div>
      Hello world! With use Reducer :D
    </div>
  )
}