import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { topicIndex } from '../../api/topics'

class TopicIndex extends Component {
  constructor (props) {
    super(props)

    // keep track of the movies in our application
    // initially they will be null until we have fetched them from the api
    this.state = {
      topics: null
    }
  }

  // after we render the MovieIndex component for the first time
  componentDidMount () {
    const { msgAlert, user } = this.props

    // make a request to get all of our movies
    topicIndex(user)
      // set the movies state, to the movies we got back in the response's data
      .then(res => this.setState({ topics: res.data.topics }))
      // dummy data until we create actual movies
      // .then(res => this.setState({ movies: [{ _id: 1, title: 'jaws' }, { _id: 2, title: 'The Phantom Menace' }] }))
      .then(() => msgAlert({
        heading: 'Loaded Topics Successfully',
        message: 'All topics retrieved. Click on one to go to its page.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Load Topics!',
          message: 'Could not load topics with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    // destructure our movies state
    const { topics } = this.state

    // if we haven't fetched any movies yet from the API
    if (!topics) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    const topicsJsx = topics.map(topic => (
      <Link to={`/topics/${topic._id}`} key={topic._id}>
        <li>
          {topic.topic}
        </li>
      </Link>
    ))

    return (
      <div>
        <h3>Topics</h3>
        <ul>
          {topicsJsx}
        </ul>
      </div>
    )
  }
}

export default TopicIndex
