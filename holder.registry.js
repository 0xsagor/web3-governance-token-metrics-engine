export function loadHolders() {
  console.log("Loading token holders...");

  return [
    { address: "0xHOLDER001", balance: 1000, voted: true },
    { address: "0xHOLDER002", balance: 500, voted: false },
    { address: "0xHOLDER003", balance: 2500, voted: true }
  ];
}
