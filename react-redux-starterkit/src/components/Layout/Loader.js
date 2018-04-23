import React from 'react';
import loadercss from './Loader.css';

class Loader extends React.Component {

  // constructor(props) {
  //   super();
  //   this.state = {
  //     visible: false
  //   };
  // }
  //
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({
  //       visible: !this.state.visible
  //     });
  //   }, 3000);
  // }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="se-pre-con"></div>
    );
  }
}

export default Loader;
