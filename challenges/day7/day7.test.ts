import { readLines } from "../helpers";
import { bridgeRepair, bridgeRepairPartTwo, concatenationOperator } from "./day7"

const testInput = readLines("./input/day7InputTest.txt");

describe('Test Functions', () => {
    it('Check bridge repair method', () => {
        const output = bridgeRepair(testInput);
        expect(output).toBe(3749);
    })
    it('Check bridge repair method: addition', () => {
        const simpleInput = [ "28: 10 8 10" ]
        const output = bridgeRepair(simpleInput);
        expect(output).toBe(28);
    })

    it('Check bridge repair method: multiplication', () => {
        const simpleInput = [ "100: 10 10" ]
        const output = bridgeRepair(simpleInput);
        expect(output).toBe(100);
    })

    it('Check bridge repair method: Simple Multi and Add', () => {
        const simpleInput = [ "100: 10 10", "28: 10 8 10" ]
        const output = bridgeRepair(simpleInput);
        expect(output).toBe(128);
    })
});

describe('Test Functions Part Two', () => {
    it('Check bridge repair method', () => {
        const output = bridgeRepairPartTwo(testInput);
        expect(output).toBe(11387);
    })
    it('Check bridge repair method: addition', () => {
        const simpleInput = [ "28: 10 8 10" ]
        const output = bridgeRepairPartTwo(simpleInput);
        expect(output).toBe(28);
    })

    it('Check bridge repair method: multiplication', () => {
        const simpleInput = [ "100: 10 10" ]
        const output = bridgeRepairPartTwo(simpleInput);
        expect(output).toBe(100);
    })

    it('Check bridge repair method: Simple Multi and Add', () => {
        const simpleInput = [ "100: 10 10", "28: 10 8 10" ]
        const output = bridgeRepairPartTwo(simpleInput);
        expect(output).toBe(128);
    })

    it('Check bridge repair method: Concatenation', () => {
        const simpleInput = [ "1010: 10 10" ]
        const output = bridgeRepairPartTwo(simpleInput);
        expect(output).toBe(1010);
    })

    it('Check bridge repair method: Concatenation', () => {
        const simpleInput = [ "1010: 10 10" ]
        const output = bridgeRepairPartTwo(simpleInput);
        expect(output).toBe(1010);
    })

    it('Validation Concatenation', () => {
        expect(concatenationOperator(1,2)).toBe(12);
        expect(concatenationOperator(2,1)).toBe(21);
    })
});