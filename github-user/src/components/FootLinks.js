import React from 'react';

class Userpage extends React.Component {

  render() {
    return (
      <nav class="foot-content">
        <a href={this.props.data.html_url}>Github</a>
        <a href={this.props.data.followers_url}>Github Followers</a>
        <a href={this.props.data.repos_url}>Repositories</a>
      </nav>
    )
  }
}

export default Userpage;