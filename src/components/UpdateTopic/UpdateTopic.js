import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { Redirect, withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'

import { topicShow, topicUpdate } from '../../api/topics'

class UpdateTopic extends Component {
  constructor () {
    super()

    this.state = {
      movie: null,
      updated: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props
    topicShow(match.params.id, user)
      .then(res => this.setState({ topic: res.data.topic }))
      .then(() => {
        msgAlert({
          heading: 'Showing Topic Successfully',
          variant: 'success',
          message: 'You can now edit the topic.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Showing Topic Failed',
          variant: 'danger',
          message: 'Topic is not displayed due to error: ' + err.message
        })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, match, msgAlert } = this.props
    const { topic } = this.state

    topicUpdate(match.params.id, topic, user)
      .then(res => this.setState({ updated: true }))
      .then(() => {
        msgAlert({
          heading: 'Updated Topic Successfully',
          variant: 'success',
          message: 'Topic has been updated.'
        })
      })
      .catch(err => {
        msgAlert({
          heading: 'Updating Topic Failed',
          variant: 'danger',
          message: 'Topic was not updated due to error: ' + err.message
        })
      })
  }

  // same handleChange from MovieCreate
  handleChange = event => {
    this.setState({ topic: { ...this.state.topic, [event.target.name]: event.target.value } })
  }

  render () {
    const { topic, updated } = this.state

    // if we don't have a movie yet
    if (!topic) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    // if the movie is deleted
    if (updated) {
      // redirect to the movies index page
      return <Redirect to={`/topics/${this.props.match.params.id}`} />
    }

    return (
      <div>
        <h3 className="h3">Update Topic</h3>
        <Form onSubmit={this.handleSubmit} className="createform">
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control type="username"
              name="username"
              placeholder="Enter username"
              value={topic.username}
              onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Topic:</Form.Label>
            <Form.Control type="topic"
              name="topic"
              placeholder="Enter topic"
              value={topic.topic}
              onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Comment:</Form.Label>
            <Form.Control type="comment"
              name="comment"
              placeholder="Enter comment"
              value={topic.comment}
              onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="primary" type='submit'></Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(UpdateTopic)
