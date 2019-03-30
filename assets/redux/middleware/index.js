// код который сздаетм мидлвари

import { all, fork } from 'redux-saga/effects'

import studentList from './studentList'
import projects from './projects'

export default function rootMiddleware() {
    return function* () {
        yield all([fork(studentList), fork(projects),])
    }
}
