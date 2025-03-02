export default function () {
  const inputs: Record<string, boolean> = reactive({})
  const inputsPressed: Record<string, boolean> = reactive({})
  const inputsWerePressed: Record<string, boolean> = reactive({})

  useEventListener('keydown', handleKeyDown)
  useEventListener('keyup', handleKeyUp)

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key !== 'F5' && event.key !== 'F12') {
      event.preventDefault()
    }

    const key = mapInputs(event.key)

    inputs[key] = true
    inputsPressed[key] = true
  }

  function handleKeyUp(event: KeyboardEvent) {
    event.preventDefault()
    const key = mapInputs(event.key)

    inputs[key] = false
    inputsPressed[key] = false
  }

  const isKeyDown = (key: string) => {
    return inputs[key]
  }

  const isKeyPressed = (key: string) => {
    return inputs[key] && !inputsWerePressed[key]
  }

  return {
    isKeyDown,
    isKeyPressed,
  }
}

function mapInputs(key: string): string {
  switch (key) {
    case '0':
      return 'c'
    case '8':
      return ' '
    case '4':
      return 'ArrowLeft'
    case '6':
      return 'ArrowRight'
    case '2':
      return 'ArrowDown'
    case '1':
    case '5':
    case '9':
      return 'x'
    case '3':
    case '7':
      return 'z'
    case 'F1':
      return 'Escape'
    default:
      return key
  }
}
