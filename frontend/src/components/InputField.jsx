import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    label: PropTypes.string,
    isPassword: PropTypes.bool,
    iconStart: PropTypes.object,
    iconEnd: PropTypes.object
};

export default function InputField(props) {
    const {
        label = "Label",
        isPassword = false,
        iconStart:IconStart = undefined,
        iconEnd:IconEnd = undefined
    } = props;

    const additionalInputContainerClasses = `${IconStart ? 'material-input-with-icon-start': ''} ${IconEnd ? 'material-input-with-icon-end' : ''}`;

    return (
        <div className={`material-input-container ${additionalInputContainerClasses}`}>
            {
                IconStart && <IconStart className="material-input-icon material-input-icon-start" />
            }
            {
                IconEnd && <IconEnd className="material-input-icon material-input-icon-end" />
            }
            <input className="material-input" type={isPassword ? 'password' : 'text'} required pattern=".*" />
            <label className="material-input-label">
                <span className="material-input-label-inner">
                    {label}
                </span>
            </label>
            <div className="material-input-border"></div>
        </div>
    );
}

InputField.propTypes = propTypes;