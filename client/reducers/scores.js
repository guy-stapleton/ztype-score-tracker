function scores(state = [], action) {
  let newState = [...state]
  switch(action.type) {
    case 'ADD_SCORES_TO_STORE':
    return action.scores
    case 'ADD_SCORE_TO_STORE':
    return [...newState, action.score]
    default:
    return state
  }
}

export default scores
