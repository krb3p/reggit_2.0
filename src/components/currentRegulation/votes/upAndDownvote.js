
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVote } from '../../../actions'

class UpAndDownVote extends Component {
  constructor(props) {
    super(props);
    this.handleDownVoteClicked = this.handleDownVoteClicked.bind(this);
    this.handleUpVoteClicked = this.handleUpVoteClicked.bind(this);
  }
  handleDownVoteClicked (event) {
    event.preventDefault();
    this.props.submitVote(this.props.regulation, "down")
  }
  handleUpVoteClicked (event) {
    event.preventDefault();
    this.props.submitVote(this.props.regulation, "up")
  }
  render() {
    return (
    <div>
      <div className="header1">What do you think?</div>
      <div className="votes-container">
          <button className="btn-default" onClick={this.handleUpVoteClicked}>I'm for it</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn-default" onClick={this.handleDownVoteClicked}>I'm against it</button>
      </div>
    </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   regulation: this.state.currentRegulation
// }
const mapDispatchToProps = (dispatch) => {
  return {
    submitVote: function(regulation, vote){
      dispatch(addVote(regulation, vote))
    }
  }
}
export default connect(null, mapDispatchToProps)(UpAndDownVote)
