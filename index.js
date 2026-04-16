const combineUsers = (...allArrays) => {
  return {
    users: [].concat(...allArrays),
    merge_date: new Date().toLocaleDateString()
  };
};

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};