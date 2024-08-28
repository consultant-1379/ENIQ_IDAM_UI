define(["exports", "react"], function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * A block.
     * @module components/Block
     * @param {Object} props Properties passed to this component
     * @param {ReactNode[]} props.children Children to add within this component
     * @param {string} props.header Text to display for the block header
     * @param {string} [props.description] Text to display for the block description
     * @returns {ReactElement} Renderable React element
     */
    var Block = function Block(_ref) {
        var children = _ref.children,
            header = _ref.header,
            description = _ref.description;

        var blockDescription = description ? _react2.default.createElement(
            "p",
            { className: "block-description" },
            description
        ) : undefined;

        return _react2.default.createElement(
            "div",
            { className: "block clearfix" },
            _react2.default.createElement(
                "h3",
                { className: "block-header" },
                header
            ),
            blockDescription,
            children
        );
    }; /*
        * The contents of this file are subject to the terms of the Common Development and
        * Distribution License (the License). You may not use this file except in compliance with the
        * License.
        *
        * You can obtain a copy of the License at legal/CDDLv1.0.txt. See the License for the
        * specific language governing permission and limitations under the License.
        *
        * When distributing Covered Software, include this CDDL Header Notice in each file and include
        * the License file at legal/CDDLv1.0.txt. If applicable, add the following below the CDDL
        * Header, with the fields enclosed by brackets [] replaced by your own identifying
        * information: "Portions copyright [year] [name of copyright owner]".
        *
        * Copyright 2016-2017 ForgeRock AS.
        */

    Block.propTypes = {
        children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node).isRequired,
        description: _react2.default.PropTypes.string,
        header: _react2.default.PropTypes.string.isRequired
    };

    exports.default = Block;
});
