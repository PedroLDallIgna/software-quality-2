const validateValue = (value) => {
  const regexp = /[^0-9]/g
  const newValue = value.replace(regexp, '')
  return newValue
}

const validateName = (name) => {
  const regexp1 = /^[^a-zA-Z]/g 
  const regexp2 = /[\W]/g
  const newName = name.replace(regexp1, '').replace(regexp2, '')
  return newName
}

module.exports = { validateValue, validateName }
