import apiUrl from '../apiConfig'

import axios from 'axios'

export const topicIndex = user => {
  return axios({
    url: apiUrl + '/topics',
    method: 'GET',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const topicCreate = (topic, user) => {
  return axios({
    url: apiUrl + '/topics',
    method: 'POST',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Token token=${user.token}`
    },
    // send the movie object as our data for creating a movie
    data: { topic }
  })
}

// get a single movie
export const topicShow = (id, user) => {
  return axios({
    url: apiUrl + '/topics/' + id,
    method: 'GET',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const topicDelete = (id, user) => {
  return axios({
    url: apiUrl + '/topics/' + id,
    method: 'DELETE',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const topicUpdate = (id, topic, user) => {
  return axios({
    url: apiUrl + '/topics/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: { topic }
  })
}
