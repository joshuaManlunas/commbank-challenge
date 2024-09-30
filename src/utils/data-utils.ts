/**
 * Generate a random id with the specified number of digits
 * @param digits
 */
export function generateId(digits: number): number {
  return Number(
    Math.random()
      .toString()
      .substring(2, 2 + digits),
  );
}

// Sample usage
// console.log(generateId(5));
