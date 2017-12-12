export function toUSCurrency(n: number) {
  const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  return USD.format(n);
}

export function toTitleCase(str: string | undefined) {
  if (!str) {
    return str;
  }
  return str.replace(/\w\S*/g, (txt: string) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
