export default function createAutoCorrectedDatePipe(dateFormat = 'mm dd yyyy', {
  minYear = 1,
  maxYear = 9999
} = {}) {
  return function(conformedValue) {
    const indexesOfPipedChars = []
    const dateFormatArray = dateFormat.split(/[^dmyHMS]+/)
    const maxValue = {'dd': 31, 'mm': 12, 'yy': 99, 'yyyy': maxYear, 'HH': 23, 'MM': 59, 'SS': 59}
    const minValue = {'dd': 1, 'mm': 1, 'yy': 0, 'yyyy': minYear, 'HH': 0, 'MM': 0, 'SS': 0}
    const conformedValueArr = conformedValue.split('')

    // Check first digit
    dateFormatArray.forEach((format) => {
      const position = dateFormat.indexOf(format)
      const maxFirstDigit = parseInt(maxValue[format].toString().substr(0, 1), 10)

      if (parseInt(conformedValueArr[position], 10) > maxFirstDigit) {
        conformedValueArr[position + 1] = conformedValueArr[position]
        conformedValueArr[position] = 0
        indexesOfPipedChars.push(position)
      }
    })

    // Check for invalid date
    const isInvalid = dateFormatArray.some((format) => {
      const position = dateFormat.indexOf(format)
      const length = format.length
      const textValue = conformedValue.substr(position, length).replace(/\D/g, '')
      const value = parseInt(textValue, 10)
      if (format === 'yyyy' && minYear !== 1 || maxYear !== 9999) {
        const scopedMaxValue = parseInt(maxValue[format].toString().substring(0, textValue.length), 10)
        const scopedMinValue = parseInt(minValue[format].toString().substring(0, textValue.length), 10)
        return value < scopedMinValue || value > scopedMaxValue
      }
      return value > maxValue[format] || (textValue.length === length && value < minValue[format])
    })

    if (isInvalid) {
      return false
    }

    return {
      value: conformedValueArr.join(''),
      indexesOfPipedChars
    }
  }
}
