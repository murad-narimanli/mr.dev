import types from '../types'

export const toggleReducer = (data = false, action) =>{
    switch (action.type){
        case types.TOGGLE:
            return !data;
        default :
            return data;
    }
}

export function aboutReducer(about={}, action) {
    switch (action.type) {
        case types.GET_ABOUT:
            return action.payload;
        case types.GET_ABOUT_ERROR:
            return action.payload.message;
        default:
            return about;
    }
}

export function experienceReducer(experiences= [], action) {
    switch (action.type) {
        case types.GET_EXPERİENCE:
            return action.payload;
        case types.GET_EXPERİENCE_ERROR:
            return experiences;
        default:
            return experiences;
    }
}


export function educationReducer(educations= [], action) {
    switch (action.type) {
        case types.GET_EDUCATION:
            return action.payload;
        case types.GET_EDUCATION_ERROR:
            return educations;
        default:
            return educations;
    }
}


export function portfolioReducer(portfolios= [], action) {
    switch (action.type) {
        case types.GET_PORTFOLIOS:
            return action.payload;
        case types.GET_PORTFOLIOS_ERROR:
            return portfolios;
        default:
            return portfolios;
    }
}

export function doingReducer(doings= [], action) {
    switch (action.type) {
        case types.GET_DOINGS:
            return action.payload;
        case types.GET_DOINGS_ERROR:
            return doings;
        default:
            return doings;
    }
}



export function blogReducer(blogs= [], action) {
    switch (action.type) {
        case types.GET_BLOGS:
            return action.payload;
        case types.GET_BLOGS_ERROR:
            return blogs;
        default:
            return blogs;
    }
}

export function categoryReducer(blogs= [], action) {
    switch (action.type) {
        case types.GET_CATEGORIES:
            return action.payload;
        case types.GET_CATEGORIES_ERROR:
            return blogs;
        default:
            return blogs;
    }
}



export function skillReducer(skills= [], action) {
    switch (action.type) {
        case types.GET_SKILLS:
            return action.payload;
        case types.GET_SKILLS_ERROR:
            return skills;
        default:
            return skills;
    }
}