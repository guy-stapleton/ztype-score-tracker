import React from 'react'

const Add = props => {
  return (
    <div>
      <h2>Add Score</h2>
      <form id="add-score" method="POST">
        <label>Date <input type="date" name="date" /></label>
        <label>Score <input type="number" name="score" /></label>
        <label>Typing Accuracy <input type="number" name="typing_accuracy" /></label>
        <label>Wave <input type="number" name="wave" /></label>
        <label>Longest Streak <input type="number" name="longest_streak" /></label>
        <input type="submit" value="Add Score" />
      </form>
    </div>
  )
}

export default Add
