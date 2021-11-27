import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Site extends Component {
    static propTypes = {
        activeSite: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeSite,
                label,
            },
        } = this;

        let className = 'site-list-item';

        if (activeSite === label) {
            className += 'site-list-active';
        }

        return (
            <li
                className={className}
                onClick={onClick}
            >
                {label}
            </li>
        );
    }
}

export default Site