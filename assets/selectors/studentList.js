// @flow
import * as _ from 'lodash'

export const getStudentListFields = state => _.get(state, ['studentList', 'studentListFields']);
export const getStudentListData = state => _.get(state, ['studentList', 'studentListData']);
export const getStudentListFiltersValue = state => _.get(state, ['studentList', 'studentListFilters', 'filters']);
export const getStudentListFiltersSelectedTroop = state => _.get(state, ['studentList', 'studentListFilters', 'selectTroop']);
export const getStudentListFilters = state => _.get(state, ['studentList', 'studentListFilters']);
export const getTroopList = state => _.get(state, ['studentList', 'troopList']);
export const getTroopNumberList = state => _.get(state, ['studentList.troopList.numberTroop']);
