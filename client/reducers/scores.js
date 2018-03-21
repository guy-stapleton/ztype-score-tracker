function scores(state = [], action) {
  switch(action.type) {
    case 'ADD_SCORES_TO_STORE':
    return action.scores
    default:
    return state
  }
}

export default scores
