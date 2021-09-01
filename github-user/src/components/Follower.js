import React from 'react';

class Follower extends React.Component {
  render() {
    return (
      <>
        <div className="sidecard">
          <div className="cardSegment" >
            <h3>Username: </h3>
            <p>{this.props.info.login}</p>
          </div>
          <div className="cardSegment" >
            <h3>User ID: </h3>
            <p>{this.props.info.id}</p>
          </div>
        </div>
      </>
    )
  }
}

export default Follower;