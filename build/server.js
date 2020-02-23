/**
 * Server
 */

import ts from 'gulp-typescript'
import { src, dest, series } from 'gulp'


const tsProject = ts.createProject('tsconfig.json');


function compileTS() {
    return src('**/*.ts', {cwd: 'src/server'}) 
        .pipe(tsProject())
        .pipe(dest('dist/server'))
}


const build = series(compileTS)

export {
    build
}
