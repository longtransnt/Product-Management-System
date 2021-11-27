import React, { Component } from "react";
import PropTypes from "prop-types";
import Site from "./Site";

class Sites extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            activeSite: this.props.children[0].props.label,
        };
    }

    onClickSiteItem = (site) => {
        this.setState({ activeSite: site });
    };

    render() {
        const {
            onClickSiteItem,
            props: { children },
            state: { activeSite },
        } = this;

        return (
            <div className="sites">
                <ol className="site-list">
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Site
                                activeSite={activeSite}
                                key={label}
                                label={label}
                                onClick={onClickSiteItem}
                            />
                        );
                    })}
                </ol>
                <div className="site-content">
                    {children.map((child) => {
                        if (child.props.label !== activeSite) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Sites;