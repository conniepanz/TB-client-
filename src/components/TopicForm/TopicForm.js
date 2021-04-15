import React from 'react'

const TopicForm = ({ topic, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Username:</label>
    <input
      required
      placeholder = "Enter Username"
      name = "Username"
      value = {topic.username}
      onChange={handleChange}
    />
    <label>Topic:</label>
    <input
      required
      placeholder = "Enter Topic"
      name = "Topic"
      value = {topic.topic}
      onChange = {handleChange}
    />
    <label>Comment:
      <textarea value={this.state.value} onChange={this.handleChange} />
    </label>
    <input
      required
      placeholder = "Enter Topic"
      name = "Topic"
      value = {topic.comment}
      onChange = {handleChange}
    />
    <button type='submit'>Submit</button>
  </form>
)
export default TopicForm
