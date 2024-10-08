/**
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
 * Copyright 2016 ForgeRock AS.
 */
/* eslint-disable */
 define([
    "jquery",
    "lodash",
    "org/forgerock/commons/ui/common/main/AbstractView",
    "org/forgerock/commons/ui/common/main/EventManager",
    "org/forgerock/commons/ui/common/main/ValidatorsManager",
    "org/forgerock/commons/ui/common/util/Constants",
    "org/forgerock/commons/ui/common/util/UIUtils"
], function ($, _, AbstractView, EventManager, ValidatorsManager, Constants, UIUtils) {
    return AbstractView.extend({
        template: "templates/user/process/KBAQuestionTemplate.html",
        noBaseTemplate: true,
        CUSTOM_QUESTION: "customQuestion",
        events: {
            "click  [data-delete-question]": "deleteQuestion",
            "change [data-select-question]": "changeQuestion",
            "blur   [data-custom-question]": "setCustomQuestion",
            "blur   [data-answer]"         : "setAnswer"
        },

        /**
         * @param {Object}  data
         * @param {array}   data.possibleQuestions           - all possible variants of questions
         * @param {boolean} data.numberOfQuestionsSufficient - whether the selected number of questions is greater than
         *                                                     the required minimum number of questions
         * @param {Object}  parent                           - parent jQuery element
         */
        render: function (data, parent) {
            _.extend(this.data, data);

            this.data.index = this.id;

            this.createAndSetEmptyDOMElement(parent);
            this.parentRender(this.bindValidators);
        },

        createAndSetEmptyDOMElement: function (parent) {
            var li = $("<li data-question-" + this.id + ">");
            parent.append(li);

            this.element = li;
        },

        deleteQuestion: function (e) {
            e.preventDefault();
            EventManager.sendEvent(Constants.EVENT_DELETE_KBA_QUESTION, { viewId: this.id });
        },

        changeQuestion: function (e) {
            var newQuestionId = $(e.target).val();

            if (newQuestionId !== this.data.questionId) {
                this.data.questionId = newQuestionId;
                delete this.data.answer;
                delete this.data.customQuestion;

                EventManager.sendEvent(Constants.EVENT_SELECT_KBA_QUESTION);
            }
        },

        setCustomQuestion: function (e) {
            this.data.customQuestion = $(e.target).val();
        },

        setAnswer: function (e) {
            this.data.answer = $(e.target).val();
        },

        getSelectedQuestionId: function () {
            return this.data.questionId;
        },

        getPair: function () {
            var pair = { answer: this.data.answer };

            if (this.data.questionId === this.CUSTOM_QUESTION) {
                pair.customQuestion = this.data.customQuestion;
            } else {
                pair.questionId = this.data.questionId;
            }

            return pair;
        },

        /**
         * @param {Object}  data
         * @param {array}   data.possibleQuestions           - all possible variants of questions
         * @param {boolean} data.numberOfQuestionsSufficient - whether the selected number of questions is greater than
         *                                                     the required minimum number of questions
         */
        updateQuestionWithNewData: function (data) {
            _.extend(this.data, data);

            UIUtils.fillTemplateWithData(this.template, this.data).then(_.bind(function (template) {
                this.$el.html(template);
                this.bindValidators();
            }, this));
        },

        bindValidators: function () {
            ValidatorsManager.bindValidators(this.$el, this.baseEntity, _.bind(function () {
                ValidatorsManager.validateAllFields(this.$el);
            }, this));
        }
    });
});