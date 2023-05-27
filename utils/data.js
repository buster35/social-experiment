const thoughtIdSeeds = [
  "646fd5cb4d690e565dadf199",
  "646fd5d68f0f69bdafd17233",
  "646fd5e49ccf33cfab12c175",
  "646fd5ed2315aa6db66aad78",
  "646fd5fa6120db38cf00c8d7",
  "646fd604ea765bad79eb53e2",
  "646fd60d065e4aea2efd3056",
  "646fd617edff42c0037ccc35",
  "646fd6226b7f5977a566f8fb",
  "646fd62a1ae915e86e70f470"
];

const reactions = [
  "\u{1F600}",
  "\u{1F606}",
  "\u{1FAE2}",
  "\u{1F922}",
  "\u{1FAE4}",
  "\u{1F44D}",
  "\u{1F44E}",
];

console.log(reactions[0]);

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomReaction = () => {
  return getRandomArrItem(reactions);}

//can this be used to add to reaction array in Thought Object?
// const getRandomAssignments = (int) => {
//   const results = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       assignmentName: getRandomArrItem(appDescriptions),
//       score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
//     });
//   }
//   return results;
// };

module.exports = getRandomReaction;