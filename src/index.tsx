import "bulmaswatch/superhero/bulmaswatch.min.css"
import React from "react"
import ReactDOM from "react-dom/client"
// import CodeCell from "./components/code-cell"
import TextEditor from "./components/text-editor"

const App = () => {
  return (
    <>
      {/* <CodeCell /> */}
      <TextEditor />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
