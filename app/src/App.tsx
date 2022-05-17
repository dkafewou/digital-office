import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import routes from "./lib/routes"
import Home from "./components/Home"
import OfficeViewer from "./components/OfficeViewer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={routes.OFFICE_VIEWER_ROUTE} exact component={OfficeViewer}/>
          <Route path={routes.HOME} component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
