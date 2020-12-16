import redditTypes from "./types";

export const request = () => ({
  type: redditTypes.REQUEST});

export const receive = (posts) => ({
  type: redditTypes.RECEIVE,
  payload: posts});

export const failedRequest = (error) => ({
  type: redditTypes.FAILED_REQUEST, 
  payload: error });
