export function calculateVotingPower(holders) {
  console.log("Calculating voting power...");

  const totalSupply = holders.reduce((sum, h) => sum + h.balance, 0);

  return holders.map(h => {
    return {
      address: h.address,
      power: ((h.balance / totalSupply) * 100).toFixed(2) + "%"
    };
  });
}
