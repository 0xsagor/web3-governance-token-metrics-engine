export function simulateDistribution(holders, amount) {
  return holders.map(h => {
    return {
      ...h,
      balance: h.balance + amount
    };
  });
}
