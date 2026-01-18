export function generateReport(power, participation) {
  console.log("----- Governance Metrics Report -----");

  power.forEach(p => {
    console.log("Holder:", p.address, "Voting Power:", p.power);
  });

  console.log("Total Holders:", participation.totalHolders);
  console.log("Voted:", participation.votedCount);
  console.log("Participation Rate:", participation.participationRate);
  console.log("-------------------------------------");
}
