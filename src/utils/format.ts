export function toUSCurrency(n?: number): string {
  if (!n) {
    return '';
  }
  const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  return USD.format(n);
}

export function toTitleCase(str?: string) {
  if (!str) {
    return str;
  }
  return str.replace(/\w\S*/g, (txt: string) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export function fromEnum(str?: string) {
  if (!str) {
    return str;
  }
  const dashless = str.replace(/_/g, ' ');
  return dashless.replace(/\w\S*/g, (txt: string) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
