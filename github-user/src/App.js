import React from 'react';
import axios from 'axios';

import Userpage from './components/Userpage';

class App extends React.Component {
  state = {
    userdata: {},
    followers: {}
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/techwulf')
      .then(res => {
        this.setState({
          ...this.state,
          userdata: res.data
        });
      })
      .catch(err => {console.error(err)});
  }


  render(){
    return (
      <div>
        {
          this.state.userdata.name ? 
          <Userpage userData={this.state.userdata}/> : 
          <h1>Loading...</h1>
        }
      </div>
    )
  }
}

export default App;
