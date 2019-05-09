// код который сздаетм мидлвари

import { all, fork } from 'redux-saga/effects'

import projects from './projects'

export default function rootMiddleware() {
    return function* () {
        yield all([fork(projects),])
    }
}
