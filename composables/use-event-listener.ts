export default function useEventListener(
  event: keyof WindowEventMap,
  callback: (event: (typeof window.addEventListener)['arguments']) => void,
) {
  onMounted(() => window.addEventListener(event, callback))
  onUnmounted(() => window.removeEventListener(event, callback))
}
