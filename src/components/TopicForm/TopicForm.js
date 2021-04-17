import React from 'react'

import Form from 'react-bootstrap/Form'

import Button from 'react-bootstrap/Button'

const TopicForm = (topic, handleChange, handleSubmit) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Username:</Form.Label>
      <Form.Control type="username"
        name="username"
        placeholder="Enter username"
        value={topic.username}
        onChange={handleChange}/>
    </Form.Group>
    <Form.Group>
      <Form.Label>Topic:</Form.Label>
      <Form.Control type="topic"
        name="topic"
        placeholder="Enter topic"
        value={topic.topic}
        onChange={handleChange}/>
    </Form.Group>
    <Form.Group>
      <Form.Label>Comment:</Form.Label>
      <Form.Control type="comment"
        name="comment"
        placeholder="Enter comment"
        value={topic.comment}
        onChange={handleChange}/>
    </Form.Group>
    <Button variant="primary" type='submit'></Button>
  </Form>
)

export default TopicForm
