import { useContext, useEffect } from "react"
import { DispatchContext } from "./contexts/FormContext"

function App() {
  const dispatch = useContext(DispatchContext)

  useEffect(() => {
    console.log("Render !")
  })

  return (
    <div className="App">
      <form>
        <label htmlFor="username">
          Username
          <input
            onChange={(e) =>
              dispatch({
                type: "HANDLE_INPUT",
                field: e.target.name,
                payload: e.target.value,
              })
            }
            type="text"
            name="username"
            id="username"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            onChange={(e) =>
              dispatch({
                type: "HANDLE_INPUT",
                field: e.target.name,
                payload: e.target.value,
              })
            }
            type="email"
            name="email"
            id="email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            onChange={(e) =>
              dispatch({
                type: "HANDLE_INPUT",
                field: e.target.name,
                payload: e.target.value,
              })
            }
            type="password"
            name="password"
            id="password"
          />
        </label>
        <input type="button" value="Envoyer" />
      </form>
    </div>
  )
}

export default App
