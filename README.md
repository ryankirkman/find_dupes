find_dupes
==========

Find duplicates in an input JSON file.


Install (as a command line util)
================================
`npm install find_dupes -g`


Usage
=====
NB: The input file will be assigned to a variable called `json` for use in the `--array` command line argument.

`--array`: Where we can find the array. Remember the JSON input is assigned to a variable called `json`, so if the input file contained an array, we could simply specify `--array=json`

`--id`: A key that is looked up for each element in the array to find a value that uniquely identifies an element in the array. Assumes each element of the array is an object.

## Usage Example

### Simple
`find_dupes input.json --array=json --id=id`

### Advanced
`find_dupes input.json --array=json.content.result --id=product.meta.id`