import React, { useContext, useEffect } from "react"
import { StateContext } from "../contexts/FormContext"

function ShowFields() {
  const state = useContext(StateContext)

  useEffect(() => console.log("Render 2nd component", state))

  return <div>ShowFields</div>
}

export default ShowFields
