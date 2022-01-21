import React, { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good + neutral - bad) / total} </p>
      <p>positive {(good / total) * 100}</p>
    </div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <Statistics good = {good} 
                  neutral = {neutral} 
                  bad = {bad} />
      {/* <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good + neutral - bad) / (good + neutral + bad)} </p>
      <p>positive {(good / (good + neutral + bad)) * 100}</p> */}
    </div>
  )
}

export default App
