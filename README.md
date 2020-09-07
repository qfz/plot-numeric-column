## Introduction

The program is a Node commandline program, it take a URL as argument and generates a file named `chart.txt` in the working directory.

It parses the downloaded HTML into a DOM tree, finds the first numeric column in a table and plots it to an ASCII line chart.

The entry point of the program is the `src/index.js` file.

## Prerequisites

- Latest NodeJS
- In the project root directory, prior to running the program or unit tests, run:

```sh
npm install
```

## Running the program

In the project root directory, run:

```sh
node src/index.js <URL>
```

For example:

```sh
node src/index.js https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression
```

## Runing unit tests

In the project root directory, run:

```sh
npm test
```

## Assumptions

- URL is alwasy HTTPS
- There is always one table in the web page
- It only needs to parse the first table if there are multiple
- The table uses standard HTML table markup, ie `<table> <tbody> <tr> <td>` etc
- Only the first numeric column is plotted
- The program is for demonstration purpose only, no extensive error handling is required

## Changes to Spec

- This program plots to an ASCII chart instead of an image file
