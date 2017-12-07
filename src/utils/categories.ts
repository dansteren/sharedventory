export const categories = [
  'Appliances',
  'Arts, Crafts, & Sewing',
  'Baby',
  'Beauty & Personal Care',
  'Books',
  'CDs & Vinyl',
  'Cell Phones & Accessories',
  'Collectibles & Fine Art',
  'Computers',
  'Computer Games',
  'Electronics',
  'Health',
  'Home',
  'Luggage & Travel Gear',
  'Miscellaneous',
  'Movies',
  'Musical Instruments',
  'Office Supplies',
  'Patio, Lawn, & Garden',
  'Pet Supplies',
  'Software',
  'Sport & Outdoors',
  'Tabletop Games',
  'Tools & Home Improvement',
  'Toys',
  'Vehicles',
  'Video Games',
  'Wine'
];

/**
 * Converts a string to lowercase, removes commas, converts whitespace to
 * hyphens, and converts "&" to "and".
 */
export function sluggify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/&/g, 'and')
    .replace(/,/g, '');
}
