import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
// import withRouter so we have access to the match route prop
import { withRouter, Redirect, Link } from 'react-router-dom'
import { topicShow, topicDelete } from '../../api/topics'

class TopicShow extends Component {
  constructor (props) {
    super(props)

    // initially our topic state will be null, until it is fetched from the api
    this.state = {
      topic: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    // make a request for a single topic
    topicShow(match.params.id, user)
    // set the topic state, to the topic we got back in the response's data
    topicShow(match.params.id, user)
    // set the topic state, to the topic we got back in the response's data
      .then(res => {
        console.log(res)
        this.setState({ topic: res.data.topic })
      })
      .then(() => msgAlert({
        heading: 'Showing Topic Successfully',
        message: 'The topic is now displayed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Showing Topic Failed',
          message: 'Failed to show topic with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = event => {
    const { user, msgAlert, match } = this.props

    // make a delete axios request
    topicDelete(match.params.id, user)
      // set the deleted variable to true, to redirect to the topics page in render
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Deleted Topic Successfully!',
        message: 'Topic deleted!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Deleting Topic Failed',
          message: 'Failed with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { topic, deleted } = this.state

    // if we don't have a topic yet
    if (!topic) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    // if the topic is deleted
    if (deleted) {
      // redirect to the topics index page
      return <Redirect to="/topics" />
    }

    return (
      <div>
        <h4>Username:{topic.username}</h4>
        <h3>Topic: {topic.topic}</h3>
        <h4>Comment: {topic.comment}</h4>
        <button
          onClick={this.handleDelete}>Delete Topic</button>
        <button>
          <Link to={`/topics/${topic._id}/edit`}>Update Topic</Link>
        </button>
      </div>
    )
  }
}

export default withRouter(TopicShow)
