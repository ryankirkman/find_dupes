find_dupes
==========

Find duplicates in an input JSON file.


Usage
=====
NB: The input file will be assigned to a variable called `json` for use in the `--array_key` command line argument.

`--array`: Where we can find the array. Remember the JSON input is assigned to a variable called `json`, so if the input file contained an array, we could simply specify `--arary=json`

`--id_key`: A key that is looked up to find a value that uniquely identifies an element in the array.

## Usage Example

### Simple
`node find_dupes input.json --array_key='json' --id_key='id'`

### Advanced
`node find_dupes input.json --array_key='json.content.result' --id_key='product.meta.id'`