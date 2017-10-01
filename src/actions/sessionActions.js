export function changePasswordInput(newInput) {
  return {
    type: 'CHANGE_PASSWORD_INPUT',
    payload: newInput,
  }
}

export function changeEmailInput(newInput) {
  return {
    type: 'CHANGE_EMAIL_INPUT',
    payload: newInput,
  }
}

export function openLoginWindow() {
  return {
    type: 'OPEN_LOGIN_WINDOW'
  }
}

export function closeLoginWindow() {
  return {
    type: 'CLOSE_LOGIN_WINDOW'
  }
}

export function clearLoginInput() {
  return {
    type: 'CLEAR_LOGIN_INPUT'
  }
}
