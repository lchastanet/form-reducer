import { createContext, useReducer } from "react"
import formReducer from "../reducers/formReducer"

const initialFormState = {
  username: "",
  email: "",
  password: "",
}

export const StateContext = createContext()
export const DispatchContext = createContext()

const FormContextProvider = ({ children }) => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={formState}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export default FormContextProvider
