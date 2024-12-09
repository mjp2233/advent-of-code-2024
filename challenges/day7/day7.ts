import { readLines } from "../helpers";

export function bridgeRepair(inputLines: string[]) : number {
    console.log("Starting Bridge Repair Method");
    var splitLines = inputLines.map(line => line.split(":"));
    var puzzleSolution = 0;
    for(const equation of splitLines) {
        const answer = Number(equation[0]);
        var inputs = equation[1].trim().split(" ").map((number: any) => Number(number));
        
        const summationAdd = inputs.reduce((input, total) => input + total);
        const summationMulti = inputs.reduce((input, total) => input * total);
        
        if(summationAdd == answer) {
            console.log("Solved with just addition")
            puzzleSolution += answer;
        } else if(summationMulti == answer) {
            console.log("Solved with just multiplication")
            puzzleSolution += answer;
        } else {
            const foundSolution = findOperations(inputs,answer, 0,0,'');
            if(foundSolution[0]) {
                puzzleSolution += answer;
            }
        }
    }
    return puzzleSolution;
}
function findOperations(input: number[], target: number, index: number = 0, currentValue: number = 0, currentOperation: string = ''): [boolean, string] {
    if (index == input.length ) {
        if(currentValue === target)
            return [true, currentOperation]
        return [false, ''];
    }

    var [found,operation] = findOperations(input, target, index+1, currentValue + input[index], currentOperation ?? '+');

    if(found) {
        return [true, operation]
    }

    [found,operation] = findOperations(input, target, index+1, currentValue * input[index], currentOperation ?? '*');

    if(found) {
        return [true, operation]
    }

    return [false, ''];

}

console.log(bridgeRepair(readLines("./input/day7Input.txt")));

//~~~~~~~~~~~~~~~~~~ Part 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function bridgeRepairPartTwo(inputLines: string[]) : number {
    console.log("Starting Bridge Repair Method: Part Two");
    var splitLines = inputLines.map(line => line.split(":"));
    var puzzleSolution = 0;
    for(const equation of splitLines) {
        const answer = Number(equation[0]);
        var inputs = equation[1].trim().split(" ").map((number: any) => Number(number));
        
        const foundSolution = findOperationsPartTwo(inputs,answer, 0,0,'');
        if(foundSolution[0]) {
            puzzleSolution += answer;
        }
    }
    return puzzleSolution;
}
function findOperationsPartTwo(input: number[], target: number, index: number = 0, currentValue: number = 0, currentOperation: string = ''): [boolean, string] {
    if (index == input.length ) {
        if(currentValue === target)
            return [true, currentOperation]
        return [false, ''];
    }

    var [found,operation] = findOperationsPartTwo(input, target, index+1, concatenationOperator(currentValue,input[index]), currentOperation ?? '||');
    if(found) {
        return [true, operation]
    }

    [found,operation] = findOperationsPartTwo(input, target, index+1, currentValue * input[index], currentOperation ?? '*');

    if(found) {
        return [true, operation]
    }

    [found,operation] = findOperationsPartTwo(input, target, index+1, currentValue + input[index], currentOperation ?? '+');
    if(found) {
        return [true, operation]
    }

    return [false, ''];

}

export function concatenationOperator(firstInput: number, secondInput: number): number {
    return Number(String(firstInput).concat(String(secondInput)))
}


console.log("Part 2: " + bridgeRepairPartTwo(readLines("./input/day7Input.txt")));