# Advent of Code 2024
    Advent of Code Challenges for 2024 - https://adventofcode.com/2024

    Typescript solutions configured with [Bun](https://bun.sh/docs) as the Runtime

    ## Getting started 

        bun run-day.ts <#>            # runs the file at ./challenges/day#/day#.ts
        bun install <pkg>             # install a package
        bun build ./index.tsx         # bundle a project for browsers
        bun test                      # run tests

    ## Structure

    - Each challenge is split into a Day# folder, with the file main file in each day with the same name.
    - See https://adventofcode.com/2024 for the challenge text and input files for each day.
    - Input are expected in the ./input/day#Input.txt folder (not included in repo - see .gitignore)
    - Helper methods (such as reading the input txt file) are in the ./challenges/helpers.ts file
    - Test file are day#.test.ts, and run via 'bun test' (for all test) or 'npm jest day#.test.ts'