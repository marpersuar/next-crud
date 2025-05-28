export function formatDate(value: Date | string | number) {
  const date = new Date(value);

  return date.toLocaleDateString('es-CO', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
