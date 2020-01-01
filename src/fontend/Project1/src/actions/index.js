import * as Types from './../contants/ActionTypes';


export const actGetStudents = (students) => {
    return{
        type : Types.GET_STUDENTS,
        students
    }
}

export const Search = (keyword) => {
    return {
        type : Types.SEARCH,
        keyword
    }
}