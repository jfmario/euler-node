
# Euler Workspace (NodeJs) #

This project is my Project Euler workspace for problems starting at 101. 
I may go back and convert my solutions for earlier problems later.

## Usage #

To run the test case of a problem:

```bash
node test.js <problemNumber>
```

To solve a problem:

```bash
node solve.js <problemNumber>
```

## Testing #

Runs all tests:

```bash
mocha tests --recursive
```

Currently the only test is to run all Project Euler test cases against
expected solutions.

## Files #

### `data` #

This folder contains data downloaded from Project Euler.

### `docs` #

This folder contains the JsDoc documentation of the utils library.

### `problems` #

This folder contains Node scripts for solving Project Euler problems.

### `scripts` #

* `make_docs.sh`: Generates the documentation of the `utils` modules.

### `templates` #

This folder contains boilerplate files.

### `tests` #

* `problem-examples-tests.js`: Runs the test cases of all Project Euler problems in order to ensure that the utils library continues working as changes are made.

### `utils` #

This folder contains utility classes.

### Root Folder #

* `solve.js`: Solves Project Euler problems.
* `test.js`: Tests Project Euler solutions.