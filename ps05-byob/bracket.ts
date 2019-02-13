/*
  NOTE: You should not modify this code unless you just want to play around.
  You don't have to look at or understand this code at all for the problem set.
  But if you're curious, normal web development does not look this ugly,
  creating all the HTML elements for the bracket explicitly with typescript here
  was the easiest way to give you all an easy makeBracket function to import.
  This code is written so it can generate a bracket for any number of teams
  that would work out to a single team winning (meaning any number of teams
  that's a power of 2), and there's some interesting logic in figuring that out :)
*/

import { Player } from "./stats-app";

const startingPairs = [
  ["villanova", "mount-st-marys"],
  ["wisconsin", "virginia-tech"],
  ["virginia", "north-carolina-wilmington"],
  ["florida", "east-tennessee-state"],
  ["southern-methodist", "southern-california"],
  ["baylor", "new-mexico-state"],
  ["south-carolina", "marquette"],
  ["duke", "troy"],
  ["gonzaga", "south-dakota-state"],
  ["northwestern", "vanderbilt"],
  ["notre-dame", "princeton"],
  ["west-virginia", "bucknell"],
  ["maryland", "xavier"],
  ["florida-state", "florida-gulf-coast"],
  ["saint-marys-ca", "virginia-commonwealth"],
  ["arizona", "north-dakota"],
  ["kansas", "california-davis"],
  ["miami-fl", "michigan-state"],
  ["iowa-state", "nevada"],
  ["purdue", "vermont"],
  ["creighton", "rhode-island"],
  ["oregon", "iona"],
  ["michigan", "oklahoma-state"],
  ["louisville", "jacksonville-state"],
  ["north-carolina-chapel-hill", "texas-southern"],
  ["arkansas", "seton-hall"],
  ["minnesota", "middle-tennessee"],
  ["butler", "winthrop"],
  ["cincinnati", "kansas-state"],
  ["ucla", "kent-state"],
  ["dayton", "wichita-state"],
  ["kentucky", "northern-kentucky"]
];

type Scorer = (teamA: string, teamB: string, data: Player[]) => string;

let formatName = (name: string): string => {
  // These names would be too long and get cut off in the bracket
  if (name === "north-carolina-chapel-hill") {
    return "UNC Chapel Hill";
  }
  if (name === "north-carolina-wilmington") {
    return "UNC Wilmington";
  }
  return name.split("-").map(word => word[0].toUpperCase() + word.substring(1)).join(" ");
};

let pairArray = <T> (arr: T[]): T[][] => {
  if (arr.length === 0) {
    return [];
  }
  const result: T[][] = [];
  if (!(arr[0] instanceof Array)) {
    if (arr.length % 2 !== 0) {
      throw new Error(`Cannot pair array with odd number of elements: ${arr.length}`);
    }
    for (let i = 0; i < arr.length; i += 2) {
      result.push([arr[i], arr[i + 1]]);
    }
  }
  return result;
};

let drawBracket = (teamsCount: number, boxHeight: number, borderStyle?: string): HTMLDivElement => {
  const rounds = Math.log2(teamsCount);
  if (rounds % 1 !== 0) {
    throw new Error(`Cannot draw bracket for a number of teams that is not a power of two. teamsCount was: ${teamsCount}`);
  }
  const columnsCount = rounds * 2 - 1;
  borderStyle = borderStyle || "2px solid black";

  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.width = "100%";

  const columns: HTMLDivElement[] = [];
  for (let i = 0; i < columnsCount; i++) {
    const col = document.createElement("div");
    col.style.display = "flex";
    col.style.flexDirection = "column";
    col.style.width = "100%";
    columns.push(col);
    container.appendChild(col);
  }

  let boxesPerSide = teamsCount;
  boxHeight /= 2;
  for (let round = 0; round < rounds - 1; round++) {
    boxesPerSide /= 2;
    boxHeight *= 2;

    let makeBox = (): HTMLDivElement => {
      const box = document.createElement("div") as HTMLDivElement;
      box.style.height = boxHeight + "px";
      box.style.boxSizing = "border-box";
      box.style.position = "relative";
      box.style.borderBottom = borderStyle;
      return box;
    };

    // fill in boxes for both sides
    for (let i = 0; i < boxesPerSide * 2; i++) {
      const newBox = makeBox();
      newBox.style.top = `-${boxHeight / 2}px`;
      if (i % 2 !== 0) {
        if (i < boxesPerSide) {
          newBox.style.borderRight = borderStyle;
        } else {
          newBox.style.borderLeft = borderStyle;
        }
      }
      const columnIndex = i < boxesPerSide ? round : columnsCount - round - 1;
      columns[columnIndex].appendChild(newBox);
    }
  }
  return container;
};

let fillBracket = (bracket: HTMLDivElement, column: number, index: number, team: string): void => {
  const span = document.createElement("span");
  span.innerText = formatName(team);
  span.style.position = "absolute";
  span.style.bottom = "0px";
  if (column < Math.floor(bracket.childElementCount / 2)) {
    span.style.left = "1px";
  } else {
    span.style.right = "1px";
  }

  bracket.children[column].children[index].appendChild(span);
};

let fillBracketRound = (bracket: HTMLDivElement, round: number, teamPairs: string[][]) => {
  let roundTeamsCount = bracket.children[0].childElementCount * 2;
  for (let i = 0; i < round; i++) {
    roundTeamsCount /= 2;
  }
  if (teamPairs.length * 2 !== roundTeamsCount) {
    throw new Error(`Tried to fill bracket round ${round}, expected ${roundTeamsCount / 2} team pairs, got ${teamPairs.length}`);
  }

  let rowIndex = 0;
  for (let i = 0; i < teamPairs.length; i++) {
    const pair = teamPairs[i];
    if (pair.length !== 2) {
      throw new Error(`Team pair did not contain two elements: ${pair}`);
    }
    const columnIndex = i < teamPairs.length / 2 ? round : bracket.childElementCount - round - 1;
    fillBracket(bracket, columnIndex, rowIndex++, pair[0]);
    fillBracket(bracket, columnIndex, rowIndex++, pair[1]);
    if (rowIndex === roundTeamsCount / 2) {
      rowIndex = 0;
    }
  }
};

export let makeBracket = (scorer: Scorer, data: Player[]): void => {
  const teamsCount = 64;
  const rounds = Math.log2(teamsCount);
  const initialCellHeight = 40;
  const bracket = drawBracket(teamsCount, initialCellHeight);
  bracket.style.fontSize = "11px";

  // fill in initial pairings
  fillBracketRound(bracket, 0, startingPairs);
  // fill in up to final four
  let winners = startingPairs;
  for (let i = 1; i < rounds - 1; i++) {
    winners = computeAndFillBracketRound(bracket, i, winners, scorer, data);
  }
  fillChampionshipGame(bracket, winners, scorer, data);
  
  document.body.appendChild(bracket);
};

let fillChampionshipGame = (bracket: HTMLDivElement, finalFourPairs: string[][], scorer: Scorer, data: Player[]) => {
  if (finalFourPairs.length !== 2 || finalFourPairs[0].length !== 2 || finalFourPairs[1].length !== 2) {
    throw new Error(`Tried to fill championship game but array was not like [[a, b], [c, d]]: ${finalFourPairs}`);
  }
  const bigBox = document.createElement("div");
  bigBox.style.width = "40vw";
  bigBox.style.height = "70px";
  bigBox.style.position = "absolute";
  bigBox.style.top = "50%";
  bigBox.style.left = "50%";
  bigBox.style.transform = "translate(-50%, -50%)";
  bigBox.style.backgroundColor = "lightgray";
  bigBox.style.borderRadius = "7px";
  bigBox.style.zIndex = "9999";
  bigBox.style.display = "flex";

  const leftBox = document.createElement("div");
  const centerBox = document.createElement("div");
  const rightBox = document.createElement("div");
  leftBox.style.width = "30%";
  centerBox.style.width = "40%";
  rightBox.style.width = "30%";
  leftBox.style.display = "flex";
  leftBox.style.justifyContent = "center";
  leftBox.style.alignItems = "center";
  leftBox.style.textAlign = "center";
  centerBox.style.display = "flex";
  centerBox.style.justifyContent = "center";
  centerBox.style.alignItems = "center";
  centerBox.style.textAlign = "center";
  rightBox.style.display = "flex";
  rightBox.style.justifyContent = "center";
  rightBox.style.alignItems = "center";
  rightBox.style.textAlign = "center";
  bigBox.appendChild(leftBox);
  bigBox.appendChild(centerBox);
  bigBox.appendChild(rightBox);

  const leftA = finalFourPairs[0][0];
  const leftB = finalFourPairs[0][1];
  const rightA = finalFourPairs[1][0];
  const rightB = finalFourPairs[1][1];
  const leftWinner = scorer(leftA, leftB, data);
  const rightWinner = scorer(rightA, rightB, data);

  const leftSpan = document.createElement("span");
  const rightSpan = document.createElement("span");
  leftSpan.innerText = formatName(leftWinner);
  rightSpan.innerText = formatName(rightWinner);
  leftBox.appendChild(leftSpan);
  rightBox.appendChild(rightSpan);

  const overlay = document.createElement("div");
  overlay.style.width = "15vw";
  overlay.style.height = "90px";
  overlay.style.position = "absolute";
  overlay.style.top = "50%";
  overlay.style.left = "50%";
  overlay.style.transform = "translate(-50%, -50%)";
  overlay.style.border = "2px solid black";
  overlay.style.backgroundColor = "white";
  overlay.style.borderRadius = "7px";
  overlay.style.zIndex = "9999";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  const overlaySpan = document.createElement("span");
  const champion = scorer(leftWinner, rightWinner, data);
  overlaySpan.innerText = formatName(champion);
  overlay.appendChild(overlaySpan);
  centerBox.appendChild(overlay);

  const column = bracket.children[Math.floor(bracket.childElementCount / 2)] as HTMLDivElement;
  column.style.position = "relative";

  column.appendChild(bigBox);
};

let computeAndFillBracketRound = (bracket: HTMLDivElement, newRoundIndex: number, pairings: string[][], scorer: Scorer, data: Player[]): string[][] => {
  const winners: string[] = [];
  for (let i = 0; i < pairings.length; i++) {
    if (pairings[i].length !== 2) {
      throw new Error(`Pairing did not contain two elements: ${pairings[i]}`);
    }
    const teamA = pairings[i][0];
    const teamB = pairings[i][1];
    const winner = scorer(teamA, teamB, data);
    winners.push(winner);
  }
  const pairedWinners = pairArray(winners);
  fillBracketRound(bracket, newRoundIndex, pairedWinners);
  return pairedWinners;
};