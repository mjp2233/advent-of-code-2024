/*
Read in a set of Ordering Rules (pipe delimited),
then read rows of 'updates' and determine if they
are in the correct order based on the rules.

Then add up the middle value of each update row to
get the final answer.
*/
import { readFileSync } from 'fs';

function orderOrganizer() : Number {
    var summation: number = 0;
    
    var input = readInput();

    //Split rules, and create an array of number arrays
    const rules = input[0].split(/\r?\n/);
    var rulesArray: number[][] = rules.map(line  => line.split("|").map(value => Number(value)));
    //Spit updates, and create an array of number arrays
    const updates = input[1].split(/\r?\n/);
    var updatesArray: number[][] = updates.map(line  => line.split(",").map(value => Number(value)));
    console.log(updatesArray);
    for(const i of updatesArray) {
        var passedRules = true;
        for(const r of rulesArray) {
            if(!checkRulePasses(i,r)) {
                passedRules = false;
                break;
            }
            //All rules pass, find middle value
        }  
        if(passedRules){   
            console.log("passed")
            summation += i.at(Math.floor(i.length/2)) ?? 0 ;
        }
            
    }

    return summation;
}


function checkRulePasses(update: Number[], rule: Number[]) : Boolean {
   if(update.indexOf(rule[0]) == -1 || update.indexOf(rule[1]) == -1 || update.indexOf(rule[0]) < update.indexOf(rule[1])) {
        return true;
    } 

    return false;
}

function readInput() {
    const fileContent = readFileSync('./challenges/day5/day5Input.txt', 'utf-8');

    const lines = fileContent.trim().split(/\r\s*\r/);
    
    return lines;

}
//Run the file
//console.log(orderOrganizer());


//Answer = 4957

//~~~~~~~~~~~~~~ Part 2 ~~~~~~~~~~~~~~
/*
    Reorders Updates that are out of order, 
    then returns the summation of the middle 
    value from only the Updates that were
    reorder.
*/ 
function orderOrganizerTwo() : Number {
    var summation: number = 0;
    
    var input = readInput();

    //Split rules, and create an array of number arrays
    const rules = input[0].split(/\r?\n/);
    var rulesArray: number[][] = rules.map(line  => line.split("|").map(value => Number(value)));
    //Spit updates, and create an array of number arrays
    const updates = input[1].split(/\r?\n/);
    var updatesArray: number[][] = updates.map(line  => line.split(",").map(value => Number(value)));

    for(const i of updatesArray) {
        var hadFailure: Boolean = false;
        hadFailure = checkRules(rulesArray, i);
     
        if(hadFailure){   
            summation += i.at(Math.floor(i.length/2)) ?? 0 ;
        }
            
    }

    return summation;
}

/*Loop through rules, if it doesn't pass swap the update values, and
     recursively call the checkRules */
function checkRules(rules: Number[][], update: Number[]) : Boolean {
    var hadFailure = false;
    for(const r of rules) {
        if(!checkRulePassesTwo(update,r)) {
            hadFailure = true;
            reorderUpdates(update,r);
            checkRules(rules, update);
        } else {
            continue;
        }
    }  
    return hadFailure;
}

//Swap the two values in the updates list
//Used when rule isn't met
function reorderUpdates(update: Number[], rule: Number[]) {
    const index1 = update.indexOf(rule[0]);
    const index2 = update.indexOf(rule[1]);   
    [update[index1], update[index2]] = [update[index2], update[index1]];
 }

//Check that the values from the rule are present and in the correct order 
function checkRulePassesTwo(update: Number[], rule: Number[]) : Boolean {
   if(update.indexOf(rule[0]) == -1 || update.indexOf(rule[1]) == -1 || update.indexOf(rule[0]) < update.indexOf(rule[1])) {
        return true;
    } 
    return false;
}

//Run the file
console.log("Part2: " + orderOrganizerTwo());

//Answer
//Part2: 6938