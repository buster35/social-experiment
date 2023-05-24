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

const getRandomReaction = () => `${getRandomArrItem(reactions)}`;

//can this be used to add to reaction array in Thought Object?
const getRandomAssignments = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      assignmentName: getRandomArrItem(appDescriptions),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};
