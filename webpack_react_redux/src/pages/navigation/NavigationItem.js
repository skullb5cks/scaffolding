import React, { Component } from 'react';

class NavigationItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: props.selectedIndex
        };
    }

    render() {
        const {
            label,
            index
        } = this.props;

        return (
            <div data-index="{index}" onClick={this.props.onClick}>{label}</div>
        );
    }
}

export default NavigationItem;