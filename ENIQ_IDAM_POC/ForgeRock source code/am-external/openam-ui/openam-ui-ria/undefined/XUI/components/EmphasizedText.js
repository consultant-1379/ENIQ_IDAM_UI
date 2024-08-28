define(["exports", "react", "lodash"], function (exports, _react, _lodash) {
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
     * This function creates an array of snippets, with the odd array snippets being the ones with matched characters,
     * and the even snippets being the characters inbetween. The matched snippets are then wrapped in the <strong> element.
     * @param {string} children The string to which the emphasized text will be applied.
     * @param {string} match The characters of the string to emphasize.
     * @returns {Array<String|ReactElement>} An array of alternating strings and react elements.
     * @example
     * Given the string "/applications",
     *      a match of "a" will return the snippet array ["/", "a", "pplic", "a", "tions"]
     *      a match of "/AP" will return the snippet array ["", "/ap", "plications"]
     */
    /*
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
     * Copyright 2017 ForgeRock AS.
     */

    function emphasizeMatchingText(children, match) {
        var isOdd = function isOdd(number) {
            return number % 2 === 1;
        };
        var snippets = children.split(new RegExp("(" + match + ")", "gi"));
        return (0, _lodash.map)(snippets, function (snippet, index) {
            return isOdd(index) ? _react2.default.createElement(
                "strong",
                null,
                snippet
            ) : snippet;
        });
    }

    var EmphasizedText = function EmphasizedText(_ref) {
        var children = _ref.children,
            match = _ref.match;

        if (match) {
            return _react2.default.createElement(
                "span",
                null,
                emphasizeMatchingText(children, match)
            );
        } else {
            return _react2.default.createElement(
                "span",
                null,
                children
            );
        }
    };

    EmphasizedText.propTypes = {
        children: _react.PropTypes.string.isRequired,
        match: _react.PropTypes.string
    };

    exports.default = EmphasizedText;
});
//# sourceMappingURL=EmphasizedText.js.map
