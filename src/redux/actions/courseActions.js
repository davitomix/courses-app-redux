import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export const createCourse = course => {
  return { type: types.CREATE_COURSE, course };
};

export const loadCoursesSuccess = courses => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

export const loadCourses = () => {
  return async function (dispatch) {
    try {
      const courses = await courseApi.getCourses();
      dispatch(loadCoursesSuccess(courses));
    } catch (error) {
      throw error;
    }
  };
};
