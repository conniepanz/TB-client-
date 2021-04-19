import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class AboutUs extends Component {
  render () {
    // const { oldPassword, newPassword } = this.state

    return (
      <div className="row">
        <div className="col-sm-12 col-md-10 mx-auto mt-5">
          <h3 className="h3">About Us</h3>
          <p className="h3">Female-identifying people need a space to freely discuss issues such as sexism and sexual harrassment. Timebomb is a space to do just that.  </p>
        </div>
      </div>
    )
  }
}
export default withRouter(AboutUs)
