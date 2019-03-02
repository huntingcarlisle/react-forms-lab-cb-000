import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        value={this.state.value}
        onChange={this.handleChange}
        />
        <strong>{thos.props.maxChars - this.state.value.length} characters remaining</strong>
      </div>
    );
  }
}

export default TwitterMessage;
