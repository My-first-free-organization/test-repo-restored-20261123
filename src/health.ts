export function health() {
  return { status: 'ok', time: new Date().toISOString() };
}
