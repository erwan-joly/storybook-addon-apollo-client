"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloClientPanel = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var api_1 = require("@storybook/api");
var components_1 = require("@storybook/components");
var constants_1 = require("./constants");
var getOperationName = function (mockedResponse) {
    if (mockedResponse.request.operationName) {
        return mockedResponse.request.operationName;
    }
    var operationDefinition = mockedResponse.request.query.definitions.find(function (definition) {
        return definition.kind === 'OperationDefinition';
    });
    if (operationDefinition && operationDefinition.name) {
        return operationDefinition.name.value;
    }
    return 'Unnamed';
};
var ApolloClientPanel = function () {
    var _a;
    var globals = (0, api_1.useGlobals)()[0];
    var queries = (_a = globals["".concat(constants_1.ADDON_ID, "/queries")]) !== null && _a !== void 0 ? _a : [];
    var _b = (0, api_1.useParameter)(constants_1.PARAM_KEY, {}).mocks, mocks = _b === void 0 ? [] : _b;
    var _c = (0, react_1.useState)(function () {
        return mocks.length ? 0 : -1;
    }), activeMockIndex = _c[0], setActiveMockIndex = _c[1];
    if (mocks.length === 0) {
        return (0, jsx_runtime_1.jsx)(components_1.Placeholder, { children: "No mocks for this story" });
    }
    var mockedResponse = mocks[activeMockIndex];
    var query = queries[activeMockIndex];
    return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(components_1.Form.Field, tslib_1.__assign({ label: "Mocks" }, { children: (0, jsx_runtime_1.jsx)(components_1.Form.Select, tslib_1.__assign({ value: activeMockIndex, onChange: function (event) {
                        return setActiveMockIndex(Number(event.currentTarget.value));
                    }, size: "auto" }, { children: mocks.map(function (mock, index) { return ((0, jsx_runtime_1.jsxs)("option", tslib_1.__assign({ value: index }, { children: [index + 1, ". ", getOperationName(mock)] }), index)); }) })) })), mockedResponse && ((0, jsx_runtime_1.jsxs)(components_1.TabsState, tslib_1.__assign({ initial: "request" }, { children: [(0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ id: "request", title: "Request" }, { children: query ? ((0, jsx_runtime_1.jsx)(components_1.SyntaxHighlighter, tslib_1.__assign({ language: "graphql", copyable: true, bordered: true, padded: true }, { children: query }))) : ((0, jsx_runtime_1.jsx)(components_1.Placeholder, { children: "Could not parse query" })) }), "request"), (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ id: "variables", title: "Variables" }, { children: (0, jsx_runtime_1.jsx)(components_1.SyntaxHighlighter, tslib_1.__assign({ language: "json", copyable: true, bordered: true, padded: true }, { children: JSON.stringify(mockedResponse.request.variables, null, 2) })) }), "variables"), (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ id: "context", title: "Context" }, { children: mockedResponse.request.context ? ((0, jsx_runtime_1.jsx)(components_1.SyntaxHighlighter, tslib_1.__assign({ language: "json", copyable: true, bordered: true, padded: true }, { children: JSON.stringify(mockedResponse.request.context, null, 2) }))) : ((0, jsx_runtime_1.jsx)(components_1.Placeholder, { children: "No context in request" })) }), "context"), (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ id: "result", title: "Result" }, { children: mockedResponse.result ? ((0, jsx_runtime_1.jsx)(components_1.SyntaxHighlighter, tslib_1.__assign({ language: "json", copyable: true, bordered: true, padded: true }, { children: JSON.stringify(mockedResponse.result, null, 2) }))) : ((0, jsx_runtime_1.jsx)(components_1.Placeholder, { children: "No result in mockedResponse" })) }), "result"), (0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ id: "error", title: "Error" }, { children: mockedResponse.error ? ((0, jsx_runtime_1.jsx)(components_1.SyntaxHighlighter, tslib_1.__assign({ language: "json", copyable: true, bordered: true, padded: true }, { children: JSON.stringify(mockedResponse.error, Object.getOwnPropertyNames(mockedResponse.error), 2) }))) : ((0, jsx_runtime_1.jsx)(components_1.Placeholder, { children: "No error in mockedResponse" })) }), "error")] })))] }, activeMockIndex));
};
exports.ApolloClientPanel = ApolloClientPanel;
//# sourceMappingURL=panel.js.map