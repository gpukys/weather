import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';

class App extends React.Component {
  
  state = { lat: null, errorMessage: '' };
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (suc) => this.setState({lat: suc.coords.latitude}),
      (err) => this.setState({errorMessage: err.message})
    );
  }

  renderContent() {
    if (this.state.lat || this.state.errorMessage) {
      return this.state.lat ? 
              <SeasonDisplay lat={this.state.lat} /> :
              <div>Error: {this.state.errorMessage}</div>
    }
    return <Spinner text="Getting location ..."/>;
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
