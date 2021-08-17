import {types} from '../types/types';
import React from "react";

const initialState = {
    allActivities: [],
    activitiesFilter: [],

}

export const activitiesReducer = (state = initialState, action) => {


    switch (action.type) {

        case types.getActivities:
            return {
                ...state,
                allActivities: action.payload
            }


        case types.filterActivities:

            return {
                ...state,
                activitiesFilter: state.allActivities.data.filter(item => item.name === action.payload)
            }
        case types.postActivities:
            let array = {...state.allActivities}
            return {
                ...state,
                allActivities: array.data.push(action.payload)
            }
        default:
            return state;
    }

}
