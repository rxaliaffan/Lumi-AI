export function parseMedicines(text) {
  const lines = text.split('\n');

  return lines
    .filter((line) => line.trim())
    .map((line) => ({
      raw: line,
      name: line.split(' ')[0],
      dosage: line.match(/\d+mg|\d+ml/i)?.[0] || 'Unknown',
    }));
}
