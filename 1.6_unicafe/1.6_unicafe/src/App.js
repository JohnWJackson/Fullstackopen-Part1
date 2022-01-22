import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
);

const StatisticLine = (props) => (
  <td>{props.text} {props.value}</td>
)

const Header = (props) => (
  <h1>{props.text}</h1>
)

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if (total == 0) return <div><h4>No feedback given.</h4></div>
  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine text="good" value={good} />
        </tr>
        <tr>
          <StatisticLine text="neutral" value={neutral} />
        </tr>
        <tr>
          <StatisticLine text="bad" value={bad} />
        </tr>
        <tr>
          <StatisticLine text="all" value={total} />
        </tr>
        <tr>
          <StatisticLine text="average" value={(good + neutral - bad) / total} />
        </tr>
        <tr>
          <StatisticLine text="positive" value={(good / total) * 100} />
        </tr>
      </tbody>
    </table>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <Header text="Give Feedback" />
      <Button handleClick={() => setGood(good + 1)} text ="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text ="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />

      <Header text="Statistics" />
      <Statistics good = {good} 
                  neutral = {neutral} 
                  bad = {bad} />
    </div>
  )
}

export default App
