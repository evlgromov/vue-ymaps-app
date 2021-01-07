export function errorStatus(e) {
  const message = e.message
  return typeof message.substr(-3)
}