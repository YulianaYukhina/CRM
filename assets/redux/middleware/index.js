import { all, fork } from 'redux-saga/effects'

import studentList from './studentList'

export default function rootMiddleware() {
    return function* () {
        yield all([fork(studentList)])
    }
}
