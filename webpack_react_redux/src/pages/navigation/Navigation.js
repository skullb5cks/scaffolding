import React, { Component } from 'react';
import NavigationItem from './NavigationItem';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            backgroundColor: 'red'
        };

        return (
            <div data-area="navigation" style={styles}>
                <NavigationItem 
                    label="DASHBOARD"
                    onClick={() => {
                        console.log('DASHBOARD');
                    }}
                />
                <NavigationItem 
                    label="MY"
                    onClick={() => {
                        console.log('MY');
                    }}
                />
            </div>
        );
    }
}

export default Navigation;