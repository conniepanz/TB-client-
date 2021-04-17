import apiUrl from '../apiConfig'

import axios from 'axios'

export const topicIndex = user => {
  return axios({
    url: apiUrl + '/topics',
    method: 'GET',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const topicCreate = (topic, user) => {
  console.log('this is user in topic create', user)
  return axios({
    url: apiUrl + '/topics',
    method: 'POST',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
    },
    // send the topic object as our data for creating a topic
    data: { topic }
  })
}

// get a single topic
export const topicShow = (id, user) => {
  return axios({
    url: apiUrl + '/topics/' + id,
    method: 'GET',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Bearer ${user.token}`
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
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const topicUpdate = (id, topic, user) => {
  return axios({
    url: apiUrl + '/topics/' + id,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { topic }
  })
}
