import React, { useReducer } from 'react';

import ConferenceContext from './conferenceContext';
import ConferenceReducer from './conferenceReducer';

import url from '../../server';
import axios from 'axios';

import {
    GET_CONFERENCES,
    SET_INDIVIDUAL_CONF,
    GET_CONF_VISITORS,
    SET_INDIVIDUAL_CONF_VISITOR
} from '../types';

const ConferenceState = (props) => {
    const initialState = {
        conferences: null,
        individualConference: null,
        visitors: null,
        individualVisitor: null
    };

    const [state, dispatch] = useReducer(ConferenceReducer, initialState);

    const getConferences = async (eventId) => {
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token')
            }
        }
        const res = await axios.get(`${url}conference/getConferences/${eventId}`, config);
        dispatch({ type: GET_CONFERENCES, payload: res.data.conferences });
    }

    const getVisitors = async (conferenceId) => {
        let conferenceUrl = url + `conference/getVisitors/${conferenceId}`;
        const config = {
            headers: {
                'x-auth-token': localStorage.getItem('token')
            }
        };
        const res = await axios.get(conferenceUrl, config);
        dispatch({ type: GET_CONF_VISITORS, payload: res.data.visitors });
    }

    const setIndividualConference = (conference) => {
        dispatch({ type: SET_INDIVIDUAL_CONF, payload: conference });
        getVisitors(conference._id);
    }

    const setIndividualVisitor = (visitor) => {
        dispatch({ type: SET_INDIVIDUAL_CONF_VISITOR, payload: visitor });
    }


    return <ConferenceContext.Provider
        value={{
            conferences: state.conferences,
            individualConference: state.individualConference,
            visitors: state.visitors,
            individualVisitor: state.individualVisitor,
            getConferences,
            setIndividualConference,
            getVisitors,
            setIndividualVisitor
        }}
    >
        {props.children}
    </ConferenceContext.Provider>;
}

export default ConferenceState;
