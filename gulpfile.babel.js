
import { series } from 'gulp'
import del from 'del'

import { build as server } from './build/server'


//
// Cleaning
//
function cleanAll(done) {
    del.sync(['dist/**', '!dist'])
    done()
}


//
// Top Level Tasks
//
const all = series(cleanAll, server)

export {
    cleanAll,
    server
}

exports.default = series(server)
