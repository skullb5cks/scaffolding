import React from 'react';

class NavigationItem extends React.Component {
    render() {
        const {
            label
        } = this.props;

        return (
            <div data-index="{index}" onClick={this.props.onClick}>{label}</div>
        );
    }
}

export default NavigationItem;
