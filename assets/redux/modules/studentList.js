const module = 'studentList'

export const FETCH_SET_STUDENT_LIST_FILTERS_VALUE = `${module}/FETCH_SET_STUDENT_LIST_FILTERS_VALUE`
export const FETCH_RESET_STUDENT_LIST_FILTERS_VALUE = `${module}/FETCH_RESET_STUDENT_LIST_FILTERS_VALUE`
export const FETCH_SET_STUDENT_LIST_FILTERS_SELECT_TROOP = `${module}/FETCH_SET_STUDENT_LIST_FILTERS_SELECT_TROOP`

export const FETCH_GET_STUDENT_LIST_DATA = `${module}/FETCH_GET_STUDENT_LIST_DATA`
export const FETCH_GET_STUDENT_LIST_DATA_SUCCESS = `${module}/FETCH_GET_STUDENT_LIST_DATA_SUCCESS`
export const FETCH_GET_STUDENT_LIST_DATA_FAILED = `${module}/FETCH_GET_STUDENT_LIST_DATA_FAILED`

export const FETCH_SET_STUDENT_LIST_FIELDS = `${module}/FETCH_SET_STUDENT_LIST_FIELDS`

export const FETCH_SET_STUDENT_STATUS = `${module}/FETCH_SET_STUDENT_STATUS`
export const FETCH_SET_STUDENT_POSITION = `${module}/FETCH_SET_STUDENT_POSITION`

export const FETCH_GET_TROOP_LIST = `${module}/FETCH_GET_TROOP_LIST`
export const FETCH_GET_TROOP_LIST_SUCCESS = `${module}/FETCH_GET_TROOP_LIST_SUCCESS`

const defaultState = {
    studentListFilters: {
        filters: {},
        selectTroop: '',
    },
    studentListFields: [],
    studentListData: [],
    dataLoading: false,
    errorLoadingMessage: '',
    troopList:[],
}

export default function reducer(studentListState = defaultState, action = {}) {
    const { type, payload } = action;
    switch (type) {

        case FETCH_GET_TROOP_LIST:
            return { // при обновлении данных, ставить контент лоадер
                ...studentListState,
            }
        case FETCH_GET_TROOP_LIST_SUCCESS:
            return {
                ...studentListState,
                troopList: payload,
            }
        case FETCH_SET_STUDENT_LIST_FILTERS_VALUE:
            return {
                ...studentListState, 
                studentListFilters: {
                    ...studentListState.studentListFilters,
                    filters: {
                        ...studentListState.studentListFilters.filters,
                        [payload.fieldName]: payload.value,
                    }
                }
            }

        case FETCH_RESET_STUDENT_LIST_FILTERS_VALUE:
            return {
                ...studentListState,
                studentListFilters: {
                    ...studentListState.studentListFilters,
                    filters: {},
                }
            }

        case FETCH_SET_STUDENT_LIST_FILTERS_SELECT_TROOP:
            return {
                ...studentListState,
                studentListFilters: {
                    ...studentListState.studentListFilters,
                    selectTroop: payload,
                }
            }
        case FETCH_SET_STUDENT_LIST_FIELDS:
            return {
                ...studentListState,
                studentListFields: [...payload],
            }
        case FETCH_SET_STUDENT_STATUS:
            {   // обновляем статус у студента, без вытягивания инфы с сервера
                var index = studentListState.studentListData.findIndex((val, i, arr) => { return val.id === payload.id });
                if (index != undefined) {
                    var Data = [...studentListState.studentListData]; 
                    Data[index].status = payload.status;
                    return {
                        ...studentListState,
                        studentListData: Data,
                    }
                }
                return {
                    ...studentListState
                }
            }
        case FETCH_SET_STUDENT_POSITION:
            {   // обновляем должность у студента, без вытягивания инфы с сервера
                var index = studentListState.studentListData.findIndex((val, i, arr) => { return val.id === payload.id });
                if (index != undefined) {
                    var Data = [...studentListState.studentListData];
                    Data[index].position = payload.position;
                    return {
                        ...studentListState,
                        studentListData: Data,
                    }
                }
                return {
                    ...studentListState
                }
            }
        case FETCH_GET_STUDENT_LIST_DATA:
            return { // при обновлении данных, ставить контент лоадер
                ...studentListState,
                dataLoading: true,
            }
        case FETCH_GET_STUDENT_LIST_DATA_SUCCESS:
            return {
                ...studentListState,
                dataLoading: false,
                studentListData: payload.studentList,
            }
        case FETCH_GET_STUDENT_LIST_DATA_FAILED:
            return {
                ...studentListState,
                dataLoading: false,
                studentListData: [],
                errorLoadingMessage: 'Произошла ошибка при загрузке данных', // обработать этот момент(подумать в какой момент я на серве кидаю ошибки)
            }
        default:
            return studentListState;
    }
}

export const fetchGetTroopList = data => ({
    type: FETCH_GET_TROOP_LIST,
})

export const fetchGetTroopListSuccess = data => ({
    type: FETCH_GET_TROOP_LIST_SUCCESS,
    payload: data,
})

//data example {fieldName: 'firstName', value: 'Иван',}
export const fetchSetStudentListFiltersValue = data => ({
    type: FETCH_SET_STUDENT_LIST_FILTERS_VALUE,
    payload: data,
})

export const fetchResetStudentListFiltersValue = () => ({
    type: FETCH_RESET_STUDENT_LIST_FILTERS_VALUE,
})

export const fetchSetStudentListFiltersSelectTroop = troopId => ({
    type: FETCH_SET_STUDENT_LIST_FILTERS_SELECT_TROOP,
    payload: troopId, // ид взвода
})

export const fetchSetStudentListFields = data => ({
    type: FETCH_SET_STUDENT_LIST_FIELDS,
    payload: data,
})

export const fetchGetStudentListData = data => ({
    type: FETCH_GET_STUDENT_LIST_DATA,
})

export const fetchGetStudentListDataSuccess = data => ({
    type: FETCH_GET_STUDENT_LIST_DATA_SUCCESS,
    payload: data,
})

export const fetchGetStudentListDataFailed = data => ({
    type: FETCH_GET_STUDENT_LIST_DATA_FAILED,
})

//{id:'1qwe1', status:2}
export const fetchSetStudentStatus = data => ({
    type: FETCH_SET_STUDENT_STATUS,
    payload: data,
})

//{id:'1', position:'test'}
export const fetchSetStudentPosition = data => ({
    type: FETCH_SET_STUDENT_POSITION,
    payload: data,
})