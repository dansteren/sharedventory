export function toUSCurrency(n: number) {
  const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  return USD.format(n);
}
