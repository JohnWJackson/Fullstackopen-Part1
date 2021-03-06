import React, { useState } from 'react'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const handleVotes = () => {
    const votesCopy = [...vote];
    votesCopy[selected] += 1;
    setVote(votesCopy);
  };

  const mostVotes = () => {
    const highest = Math.max(...vote);
    return anecdotes[vote.indexOf(highest)];
  }

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>{vote[selected]}</p>
      <button onClick={() => setSelected(getRandomInt(0, 6))}>Next Anecdote</button>
      <button onClick={() => handleVotes()}>Vote</button>

      <h1>Anecdote with the (most votes</h1>
      <p>{mostVotes()}</p>
    </div>
  )
}

export default App
