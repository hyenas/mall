function counter (state = {count: 0}, action) {
  let count = state.count
  switch (action.type) {
    case 'increase':
      return {count: count + 1}
    default:
      return state
  }
}