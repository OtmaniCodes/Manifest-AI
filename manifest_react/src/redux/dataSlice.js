// dataSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data:null,
  about: null,
  aboutContent: null,
  AiQuestions: null,
  articles: null,
  directives: null,
  jobsOffers: null,
  manifesto: null,
  manifestoContent: null,
  sections: null,
  services: null,
  teams: null
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setAbout: (state, action) => {
      console.log(action.payload)
      state.about = {
          title: action.payload.title,
          body: action.payload.body.split('_')
          .map((r) => r.toString().trim()),
          image:`${import.meta.env.VITE_SERVER_URL}/storage/${action.payload.image}` ,
        };
      // });
      // state.about={
      //   title:action.payload.title,
      //   body:action.payload.body.split('_')
      //   .map((r) => r.toString().trim()),
      //   image:`${import.meta.env.VITE_SERVER_URL}/storage/${action.payload.image}` ,
      // }
      // state.about = action.payload;
    },
    // setAboutContent: (state, action) => {
    //   state.aboutContent = action.payload;
    // },
    // setAiQuestions: (state, action) => {
    //   state.AiQuestions = action.payload;
    // },
    // setArticles: (state, action) => {
    //   state.articles = action.payload;
    // },
    // setDirectives: (state, action) => {
    //   state.directives = action.payload;
    // },
    // setJobsOffers: (state, action) => {
    //   state.jobsOffers = action.payload;
    // },
    // setManifesto: (state, action) => {
    //   state.manifesto = action.payload;
    // },
    // setManifestoContent: (state, action) => {
    //   state.manifestoContent = action.payload;
    // },
    // setSections: (state, action) => {
    //   state.sections = action.payload;
    // },
    // setServices: (state, action) => {
    //   state.services = action.payload;
    // },
    // setTeams: (state, action) => {
    //   state.teams = action.payload;
    // },
  },
});

export const { setData ,setAbout} = dataSlice.actions;
export default dataSlice.reducer;
