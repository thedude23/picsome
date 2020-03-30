import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./js/App"
import {ContextProvider} from "./Context"

// All the main logic is set up in Context
ReactDOM.render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>, 
    document.getElementById("app")
)
