"use strict";

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
 * Copyright 2016-2017 ForgeRock AS.
 */

define(["jquery", "lodash", "org/forgerock/commons/ui/common/util/URIUtils"], function ($, _, URIUtils) {
    function getAllfragments() {
        return _.compact(URIUtils.getCurrentFragment().split("/"));
    }

    function getBaseURI(allFragments) {
        return _.take(allFragments, 2).join("/");
    }

    function getLastFragmentPattern(pattern) {
        return _.last(pattern.split("/"));
    }

    function getPathFragments(allFragments, droppedFragments) {
        return _.drop(allFragments, droppedFragments);
    }

    function getTitle(fragment, index) {
        var title = index === 0 ? $.t("console.common.navigation." + fragment) : fragment;
        return decodeURIComponent(title);
    }

    function createPath(allFragments, index, base) {
        return "#" + base + "/" + _.take(allFragments, index + 1).join("/");
    }

    function shiftStartPosition(fragmentPaths, lastFragmentPattern) {
        return lastFragmentPattern === "?" ? 0 : 1;
    }

    function throwOnNoPattern(pattern) {
        if (!pattern) {
            throw new Error("[createBreadcrumbs] No \"pattern\" found.");
        }
    }

    return function (pattern) {
        var droppedFragments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

        throwOnNoPattern(pattern);

        /* Under Realms all routes will follow a repeating pattern of -
         * COLLECTION, ACTION, INSTANCE, COLLECTION, ACTION, INSTANCE etc. Some examples of this might be
         * PolicySet/  EDIT/   mySet/    Policies/   NEW
         * Services/   EDIT/   audit/    CSV/        EDIT/   csv1
         * Within the breadcrumb we use the following rules:
         * 1: The last crumb (the current page) is just a title and never a link.
         * 2: The first crumb will always be a link - unless its also the last crumb.
         * 3: Instances are links.
         * 4: Collections are not links, just titles.
         * 5: Actions are not displayed - unless its also the last crumb.
         * */

        var allFragments = getAllfragments();
        var base = getBaseURI(allFragments);
        var fragmentPaths = getPathFragments(allFragments, droppedFragments);
        var fragmentTypes = ["INSTANCE", "ACTION", "COLLECTION"];
        var FIRST_CRUMB = 0;
        var LAST_CRUMB = fragmentPaths.length - 1;
        var breadcrumbs = [];
        var lastFragmentPattern = getLastFragmentPattern(pattern);

        /* We work this out in reverse because while the beginings of the routes vary, they all end in either an
         * INSTANCE or the NEW-action. So the reversed pattern we look for becomes:
         * INSTANCE, ACTION, COLLECTION, INSTANCE, ACTION, COLLECTION...
         * NEW, COLLECTION, INSTANCE, ACTION, COLLECTION...
         * */
        var count = shiftStartPosition(fragmentPaths, lastFragmentPattern);
        _.forEachRight(fragmentPaths, function (crumb, index) {
            var title = getTitle(crumb, index);
            var path = createPath(fragmentPaths, index, base);

            if (index === LAST_CRUMB) {
                breadcrumbs.unshift({ title: title });
            } else if (fragmentTypes[count] === "INSTANCE" || index === FIRST_CRUMB) {
                breadcrumbs.unshift({ title: title, path: path });
            } else if (fragmentTypes[count] === "COLLECTION") {
                breadcrumbs.unshift({ title: title });
            }
            count = count < fragmentTypes.length - 1 ? count + 1 : 0;
        });

        return breadcrumbs;
    };
});
