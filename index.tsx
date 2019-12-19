import { h, render } from "preact"

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

render(<App />, document.querySelector("#app"))
