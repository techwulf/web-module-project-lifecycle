import React from 'react';
import axios from 'axios';

import FootLinks from '../components/FootLinks';
import Follower from '../components/Follower';

class Userpage extends React.Component {
  state = {
    followerInfo: {}
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/techwulf/followers')
      .then(res => {
        this.setState({
          ...this.state,
          followerInfo: res.data
        });
      })
      .catch(err => {console.error(err)});
  }
  render() {
    return (
      <>
        <h1>{this.props.userData.name}</h1>
        <div className="main">
          <img src={this.props.userData.avatar_url} alt="avatar"/>
          <div className="sidecard" >
            <div className="cardSegment" >
              <h3>Username: </h3>
              <p>{this.props.userData.login}</p>
            </div>
            <div className="cardSegment" >
              <h3>User ID: </h3>
              <p>{this.props.userData.id}</p>
            </div>
            <div className="cardSegment" >
              <h3>Location: </h3>
              <p>{this.props.userData.location}</p>
            </div>
            <div className="cardSegment" >
              <h3>Public Repos: </h3>
              <p>{this.props.userData.public_repos}</p>
            </div>
          </div>
        </div>
        <h2>Bio</h2>
        <p>{this.props.userData.bio}</p>
        <h2>Follower Details</h2>
        <div class="followerDeets">
        {
          this.state.followerInfo[0] ? 
          this.state.followerInfo.map(follower => <Follower info={follower}/>) :
          <h3>Loading</h3>
        }
        </div>
        <FootLinks data={this.props.userData}/>
      </>
    )
  }
}

export default Userpage;