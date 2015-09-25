#!/usr/bin/env node
var _ = require('lodash')
var argv = require('minimist')(process.argv.slice(2))
var fs = require('fs')

var json = JSON.parse(fs.readFileSync(argv._[0]))
var product_ids = _.pluck(eval(argv.array), argv.id_key)
var product_id_counts = _.countBy(product_ids)

_.each(product_id_counts, function(val, key) {
    if(val > 1) console.log("Key: " + key + ", count: " + val)
})