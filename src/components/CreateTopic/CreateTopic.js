import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'

// import TopicForm from '../TopicForm/TopicForm'
import { topicCreate } from '../../api/topics'

class TopicCreate extends Component {
  constructor (props) {
    super(props)

    // initially our movies title and director will be empty until they are filled in
    this.state = {
      topic: {
        username: '',
        topic: '',
        comment: ''
      },
      // createdId will be null, until we successfully create a movie
      createdId: null
    }
  }

  handleSubmit = event => {
    console.log('is this working')
    event.preventDefault()

    const { user, msgAlert } = this.props
    const { topic } = this.state

    // create a movie, pass it the movie data and the user for its token
    topicCreate(topic, user)
      // set the createdId to the id of the movie we just created
      // .then(res => this.setState({ createdId: res.data.movie._id }))
      .then(res => {
        this.setState({ createdId: res.data.topic._id })
        // pass the response to the next .then so we can show the title
        return res
      })
      .then(res => msgAlert({
        heading: 'Created Topic Successfully',
        message: `Topic has been created successfully. ${res.data.topic.title}.`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Create Topic',
          message: 'Could not create topic with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  // when an input changes, update the state that corresponds with the input's name
  handleChange = event => {
    // in react, an event is actually a SyntheticEvent
    // to ensure the properties are not set to null after handleChange is finished
    // we must call event.persist
    event.persist()

    this.setState(state => {
      // return our state changge
      return {
        // set the movie state, to what it used to be (...state.movie)
        // but replace the property with `name` to its current `value`
        // ex. name could be `title` or `director`
        topic: { ...state.topic, [event.target.name]: event.target.value }
      }
    })
  }
  // <TopicForm
  // topic={topic}
  // onChange={this.handleChange}
  // onSubmit={this.handleSubmit}
  // />

  render () {
    // destructure our movie and createdId state
    const { topic, createdId } = this.state
    const { user } = this.props
    console.log('user', user)

    // if the movie has been created and we set its id
    if (createdId) {
      // redirect to the movies show page
      return <Redirect to={'/topics/'} />
    }
    return (
      <div>
        <h3 className="h3">Create Topic</h3>
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
              size="lg"
              value={topic.comment}
              onChange={this.handleChange}/>
          </Form.Group>
          <Button className="button" variant="primary" type='submit' size="lg">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default TopicCreate
