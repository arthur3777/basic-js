const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (!date) {return 'Unable to determine the time of year!'}
  if ( date.hasOwnProperty('getMonth') ) throw new Error()
  const year = ['winter','winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn','autumn','autumn','winter']
  return year[date.getMonth()]

};
