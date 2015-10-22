import React from 'react';

export default class JSONArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: JSON.stringify(this.props.value, null, '  '),
      error: undefined,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        json: JSON.stringify(nextProps.value, null, '  '),
      });
    }
  }
  onChange(ev) {
    var new_json = ev.target.value;
    try {
      var new_value = JSON.parse(new_json);
      this.setState({
        json: new_json,
        error: undefined,
      });
      ev.target = {value: new_value}; // kind of a hack
      if (this.props.onChange) {
        this.props.onChange(ev);
      }
    }
    catch (exc) {
      this.setState({
        json: new_json,
        error: exc.message.replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t'),
      });
    }
  }
  render() {
    var result_className = this.state.error ? 'invalid' : 'valid';
    var result_content = this.state.error ? `Invalid JSON: ${this.state.error}` : 'Valid JSON';
    return (
      <div className={this.props.className}>
        <textarea value={this.state.json} onChange={this.onChange.bind(this)}></textarea>
        <div className={result_className}>{result_content}</div>
      </div>
    );
  }
  static propTypes = {
    value: React.PropTypes.any,
    onChange: React.PropTypes.func,
  }
}
