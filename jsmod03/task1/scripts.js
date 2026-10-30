"use strict";

const numberOfCandidates = prompt("Give number of candidates:");
const candidates = [];

for(let i = 0; i < numberOfCandidates; i++){
  let candidateName = prompt(`Name for candidate ${i+1}:`);
  candidates.push({name: candidateName, votes: 0});
};

const numberOfVoters = prompt("Give number of voters: ");

for(let i = 0; i < numberOfVoters; i++){
  let givenVote = prompt("Please vote for a candidate:");
  const person = candidates.find(candidate => candidate.name === givenVote);
  if (person){
    person.votes += 1;
  } else {
    continue;
  };
};

candidates.sort((a, b) => b.votes - a.votes);
document.body.append(document.createTextNode(`The winner of the poll is: ${candidates[0].name}!`));
document.body.append(document.createElement("br"))
document.body.append(document.createTextNode("results:"));
for(let i = 0; i < candidates.length; i++){
  document.body.append(document.createElement("br"))
  document.body.append(document.createTextNode(`${candidates[i].name}: ${candidates[i].votes}`));
};


console.log(candidates);