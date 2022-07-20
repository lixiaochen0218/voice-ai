const testFn = (fn: () => unknown) => {
  try {
    return fn()
  } catch (e) {
    return null
  }
}

export const isFinclipAndroid = false
