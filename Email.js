import React from 'react';

export default class EmailFrom extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      this.setState({value: e.target.value.toUpperCase() });
  }
  
  handleSubmit(e) {
    alert("Send message" + this.state.value)
    e.preventDefault();
  }
  
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Email @:
          <input className='input-text' 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
          />
        </label>
        <input className='input-send1' type="submit" value="Send" /> <br />       
      </form>
    )
  }
}