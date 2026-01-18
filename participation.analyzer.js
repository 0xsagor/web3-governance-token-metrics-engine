export function analyzeParticipation(holders) {
  const total = holders.length;
  const voted = holders.filter(h => h.voted).length;

  return {
    totalHolders: total,
    votedCount: voted,
    participationRate: ((voted / total) * 100).toFixed(2) + "%"
  };
}
