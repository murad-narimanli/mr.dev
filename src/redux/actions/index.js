import types from "./../types";
import profile from "../../const/api";
export const toggleMenu = () => {
    return {
        type: types.TOGGLE
    }
}

export const getAbout = () => async (dispatch) => {
    profile
        .get("about")
        .then((res) => {
            console.log(res)
            dispatch({
                type: types.GET_ABOUT,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: types.GET_ABOUT_ERROR,
                payload: { message: "Xəta baş verdi" },
            });
        });
};

export const getExperience = () => async (dispatch) => {
    profile
        .get("experiences")
        .then((res) => {
            dispatch({
                type: types.GET_EXPERİENCE,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: types.GET_EXPERİENCE_ERROR,
                payload: { message: "Xəta baş verdi" },
            });
        });
};

export const getEducation = () => async (dispatch) => {
    profile
        .get("educactions")
        .then((res) => {
            dispatch({
                type: types.GET_EDUCATION,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: types.GET_EDUCATION_ERROR,
                payload: { message: "Xəta baş verdi" },
            });
        });
};

export const getPortfolios = () => async (dispatch) => {
    profile
        .get("portfolios")
        .then((res) => {
            dispatch({
                type: types.GET_PORTFOLIOS,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: types.GET_PORTFOLIOS_ERROR,
                payload: { message: "Xəta baş verdi" },
            });
        });
};

export const getBlogs = () => async (dispatch) => {
    profile
        .get("blogs")
        .then((res) => {
            dispatch({
                type: types.GET_BLOGS,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: types.GET_BLOGS_ERROR,
                payload: { message: "Xəta baş verdi" },
            });
        });
};

export const getSkills = () => async (dispatch) => {
    profile
        .get("skills")
        .then((res) => {
            dispatch({
                type: types.GET_SKILLS,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: types.GET_SKILLS_ERROR,
                payload: { message: "Xəta baş verdi" },
            });
        });
};

export const getCategories = () => async (dispatch) => {
    profile
        .get("categories")
        .then((res) => {
            dispatch({
                type: types.GET_CATEGORIES,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: types.GET_CATEGORIES_ERROR,
                payload: { message: "Xəta baş verdi" },
            });
        });
};
