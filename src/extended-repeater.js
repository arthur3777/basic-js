module.exports = function repeater (str, options) {
  let result = ''

  if (str) {
    str = str.toString()
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }

  if (options.separator === undefined) {
    options.separator = '+'
  }

  if (options.addition === undefined) {
    options.addition = ''
  }

  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1
  }

  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    result += `${str}`
    for (let add = 0; add < options.additionRepeatTimes; add++) {
      result += `${options.addition}`
      if (options.additionRepeatTimes - 1 !== add) {
        result += `${options.additionSeparator}`
      }
    }
    if (options.repeatTimes - 1 !== i) {
      result += `${options.separator}`
    }
  }
  return result
}