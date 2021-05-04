import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <img src={this.props.linkGambar} alt="Foods" width='500' />
        );
    }
} export default Image;