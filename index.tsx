import * as React from 'react';

export interface JSONAreaProps {
  value?: any;
  space?: string | number;
  className?: string;
  onChange?: (value: any) => void;
}

class JSONArea extends React.Component<JSONAreaProps, {json?: string, error?: any}> {
  constructor(props: JSONAreaProps) {
    super(props);
    const {value, space = '  '} = props;
    const json = JSON.stringify(value, null, space);
    this.state = {json};
  }
  componentWillReceiveProps(nextProps: JSONAreaProps) {
    const {value, space = '  '} = nextProps;
    if (value !== this.props.value) {
      const json = JSON.stringify(value, null, space);
      this.setState({json});
    }
  }
  onChange(ev: React.FormEvent) {
    const textarea = ev.target as HTMLTextAreaElement;
    const json = textarea.value;
    this.setState({json});
    try {
      const value = JSON.parse(json);
      this.setState({error: undefined});
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    }
    catch (exc) {
      const error = exc.message.replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t');
      this.setState({error});
    }
  }
  render() {
    const {json, error} = this.state;
    const result_className = error ? 'invalid' : 'valid';
    const result_content = error ? `Invalid JSON: ${error}` : 'Valid JSON';
    return (
      <div className={this.props.className}>
        <textarea value={json} onChange={this.onChange.bind(this)}></textarea>
        <div className={result_className}>{result_content}</div>
      </div>
    );
  }
}

JSONArea['propTypes'] = {
  value: React.PropTypes.any,
  space: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
  className: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

export default JSONArea;
