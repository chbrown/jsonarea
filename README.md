# jsonarea

`JSONArea` is a React component for editing/validating JSON.
Not a tree builder, just a simple `<textarea>` along with a message saying whether it's valid JSON or not.

    import JSONArea from 'jsonarea';

...

    <JSONArea value={this.state.complex_response} onChange={this.onChange.bind(this)} />


## License

Copyright 2015 Christopher Brown. [MIT Licensed](http://chbrown.github.io/licenses/MIT/#2015).
