import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { Course } from "../model/course";

export const coursesFeatureKey = 'courses';

export interface CoursesState extends EntityState<Course> { }

export const adapter = createEntityAdapter<Course>();
export const initialState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialState,
  on(CourseActions.allCoursesLoaded, (state, action) => adapter.addAll(action.courses, state))
);
