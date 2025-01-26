import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import criblLogo from './assets/cribl-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://cribl.io" target="_blank">
          <img src={criblLogo} className="logo" alt="Cribl logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>GoatScript</h1>
      <div className="card">
        <p>
          GoatScript is the first and only programming language for goats!
          &#128016; &#128016; &#128016;
        </p>
        <p>
          Here's a quick breakdown:
        </p>
        <ul>
          <li>
            <p>
            Common keywords are replaced with goat-related terms
            </p>
            <table>
          <tr>
            <th>JavaScript</th>
            <th>GoatScript</th>
          </tr>
          <tr>
            <td>Array</td>
            <td>Herd</td>
          </tr>
          <tr>
            <td>console.log</td>
            <td>stable.say</td>
          </tr>
          <tr>
            <td>function</td>
            <td>goat</td>
          </tr>
          <tr>
            <td>let</td>
            <td>bleat</td>
          </tr>
          <tr>
            <td>true</td>
            <td>yes</td>
          </tr>
          <tr>
            <td>false</td>
            <td>no</td>
          </tr>
        </table>
          </li>
        </ul>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
