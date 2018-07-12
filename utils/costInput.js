export default function validateCostInput(cost) {

  let validationStatus = {
    messageCost: '',
    valid: true
  }

  let isCostOK = validateCost(cost)

  if (!isCostOK) {
    validationStatus.messageCost = 'Please enter a valid cost over $0'
    validationStatus.valid = false
  }
  return validationStatus
}

function validateCost(cost) {
  return cost > -0.1
}