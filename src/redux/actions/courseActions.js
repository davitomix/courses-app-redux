import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export const loadCoursesSuccess = courses => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export const loadCourses = () => {
  return async function (dispatch) {
    dispatch(beginApiCall());
    try {
      const courses = await courseApi.getCourses();
      dispatch(loadCoursesSuccess(courses));
    } catch (error) {
      dispatch(apiCallError(error));
      throw error;
    }
  };
};

export const saveCourse = course => {
  //eslint-disable-next-line no-unused-vars
  return async function (dispatch, getState) {
    dispatch(beginApiCall());
    try {
      const savedCourse = await courseApi.saveCourse(course);
      course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
    } catch (error) {
      dispatch(apiCallError(error));
      throw error;
    }
  };
};
