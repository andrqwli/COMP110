/**
 * Author: Andrew Li
 *
 * ONYEN: andrqwli
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff,
 * the problem set code I am submitting.
 */


import { print, csvToArray } from "introcs";
import { makeBracket } from "./bracket";
import { MemberExpression } from "babel-types";

// Player Class
export class Player {
    team: string = "";
    season: number = 0;
    conference: string = "";
    winPercent: number = 0;
    avgPoints: number = 0;
    player: string = "";
    gamesPlayed: number = 0;
    gamesStarted: number = 0;
    avgMinutesPerGame: number = 0;
    fieldGoalPercent: number = 0; // field goals; all goals except free throws
    twoPointPercent: number = 0;
    threePointPercent: number = 0;
    freeThrowPercent: number = 0;
    avgReboundsPerGame: number = 0;
    avgAssistsPerGame: number = 0;
    avgStealsPerGame: number = 0;
    avgBlocksPerGame: number = 0;
    avgTurnoversPerGame: number = 0;
    avgPointsPerGame: number = 0;
    coach: string = "";
}

// Functional Interfaces
interface Predicate<T> {
    (item: T): boolean;
}    

interface Reducer<T, U> {
    (memo: U, item: T): U;
}

interface Transform<T, U> {
    (item: T): U;
}

export let main = async () => {
    let data = await csvToArray("NCAA Data", Player);
    print(getSeasonMVP(data));
    print(avgTotalPoints(data));
    print(numAboveAvgPoints(data));
    makeBracket(winner, data);
    // TODO: 2.8 Print Report -- using: getSeasonMVP, avgTotalPoints, and numAboveAvgPts

    // TODO: 3.3 Generate Bracket -- Use makeBracket

};

// TODO: 1.1-1.3 Filter, Map, Reduce
export let filter = <T>(arr: T[], f: Predicate<T>): T[] => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i])) {
            result[result.length] = arr[i];
        }
    }
    return result;
};
export let map = <T, U>(arr: T[], t: Transform<T, U>): U[] => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = t(arr[i]);
    }
    return result;
};
export let reduce = <T, U>(arr: T[], r: Reducer<T, U>, memo: U): U => {
    let result = memo;
    for (let i = 0; i < arr.length; i++) {
        result = r(result, arr[i]);
    }
    return result;
};
// TODO: 2.1 reduceByPoints
export let reduceByMaxPoints = (p1: Player, p2: Player): Player => {
    if (p1.avgPointsPerGame < p2.avgPointsPerGame) {
        return p2;
    } else {
        return p1;
    }
};

// TODO: 2.2 getSeasonMVP
export let getSeasonMVP = (arr: Player[]): Player => {
    return reduce(arr, reduceByMaxPoints, arr[0]);
};

// TODO: 2.3 mapToPoints
export let mapToPoints = (p: Player): number => {
    return p.avgPointsPerGame;
};

// TODO: 2.4 sum
export let sum = (m: number, n: number): number => {
    return m + n;
};

// TODO: 2.5 avgTotalPoints
export let avgTotalPoints = (arr: Player[]): number => {
    return reduce(map(arr, mapToPoints), sum, 0) / arr.length;
};
// TODO 2.6 aboveAvgPoints
export let aboveAvgPoints = (p: Player): boolean => {
    return p.avgPointsPerGame > 6.094696156323789;
};

// TODO 2.7 numAboveAvgPoints
export let numAboveAvgPoints = (arr: Player[]): number => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (aboveAvgPoints(arr[i])) {
            count++;
        }
    }
    return count;
};

// TODO: 3.1 playerScorer
export let playerScorer = (p: Player): number => {
    let points = p.player.length;
    return points;
};

// TODO 3.2 winner
export let winner = (team1Name: string, team2Name: string, arr: Player[]): string => {
    let team1 = filter(arr, (p: Player) => p.team === team1Name);
    let team2 = filter(arr, (p: Player) => p.team === team2Name);
    let team1Points = map(team1, playerScorer);
    let team2Points = map(team2, playerScorer);
    let team1Total = reduce(team1Points, sum, 0);
    let team2Total = reduce(team2Points, sum, 0);
    if (team1Total < team2Total) {
        return team2Name;
    } else {
        return team1Name;
    }
};

main();