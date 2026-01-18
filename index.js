import { connectRPC } from "./rpc.client.js";
import { loadHolders } from "./holder.registry.js";
import { calculateVotingPower } from "./voting.engine.js";
import { analyzeParticipation } from "./participation.analyzer.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Governance Token Metrics Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const holders = loadHolders();

const votingPower = calculateVotingPower(holders);
const participation = analyzeParticipation(holders);

generateReport(votingPower, participation);
