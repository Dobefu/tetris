export default function (event: keyof WindowEventMap, callback: () => void) {
  onMounted(() => window.addEventListener(event, callback))
  onUnmounted(() => window.removeEventListener(event, callback))
}
