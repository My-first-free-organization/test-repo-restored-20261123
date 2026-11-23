export function search(items: string[], q: string) {
  return items.filter((i) => i.toLowerCase().includes(q.toLowerCase()));
}
