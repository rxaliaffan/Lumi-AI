export function calculateRiskScore(medicines) {
  let score = 2;
  const warnings = [];

  if (medicines.length > 3) score += 2;

  medicines.forEach((med) => {
    if (med.name.toLowerCase().includes('cipro')) {
      score += 3;
      warnings.push('Potential high-risk antibiotic interaction.');
    }
  });

  return {
    score: Math.min(score, 10),
    warnings,
  };
}
