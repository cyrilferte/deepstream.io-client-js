"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EVENT;
(function (EVENT) {
    EVENT[EVENT["UNSOLICITED_MESSAGE"] = 0] = "UNSOLICITED_MESSAGE";
    EVENT[EVENT["IS_CLOSED"] = 1] = "IS_CLOSED";
    EVENT[EVENT["MAX_RECONNECTION_ATTEMPTS_REACHED"] = 2] = "MAX_RECONNECTION_ATTEMPTS_REACHED";
    EVENT[EVENT["CONNECTION_ERROR"] = 3] = "CONNECTION_ERROR";
    EVENT[EVENT["INVALID_AUTHENTICATION_DETAILS"] = 4] = "INVALID_AUTHENTICATION_DETAILS";
    EVENT["CONNECTION_STATE_CHANGED"] = "onConnectionStateChanged";
})(EVENT = exports.EVENT || (exports.EVENT = {}));
var TOPIC;
(function (TOPIC) {
    TOPIC[TOPIC["ERROR"] = 0] = "ERROR";
    TOPIC[TOPIC["PARSER"] = 1] = "PARSER";
    TOPIC[TOPIC["CONNECTION"] = 2] = "CONNECTION";
    TOPIC[TOPIC["AUTH"] = 3] = "AUTH";
    TOPIC[TOPIC["EVENT"] = 4] = "EVENT";
    TOPIC[TOPIC["RECORD"] = 5] = "RECORD";
    TOPIC[TOPIC["RPC"] = 6] = "RPC";
    TOPIC[TOPIC["PRESENCE"] = 7] = "PRESENCE";
})(TOPIC = exports.TOPIC || (exports.TOPIC = {}));
var PARSER_ACTION;
(function (PARSER_ACTION) {
    PARSER_ACTION[PARSER_ACTION["UNKNOWN_TOPIC"] = 64] = "UNKNOWN_TOPIC";
    PARSER_ACTION[PARSER_ACTION["UNKNOWN_ACTION"] = 65] = "UNKNOWN_ACTION";
    PARSER_ACTION[PARSER_ACTION["INVALID_MESSAGE"] = 66] = "INVALID_MESSAGE";
    PARSER_ACTION[PARSER_ACTION["MESSAGE_PARSE_ERROR"] = 67] = "MESSAGE_PARSE_ERROR";
    PARSER_ACTION[PARSER_ACTION["MAXIMUM_MESSAGE_SIZE_EXCEEDED"] = 68] = "MAXIMUM_MESSAGE_SIZE_EXCEEDED";
})(PARSER_ACTION = exports.PARSER_ACTION || (exports.PARSER_ACTION = {}));
var CONNECTION_ACTION;
(function (CONNECTION_ACTION) {
    CONNECTION_ACTION[CONNECTION_ACTION["ERROR"] = 0] = "ERROR";
    CONNECTION_ACTION[CONNECTION_ACTION["PING"] = 1] = "PING";
    CONNECTION_ACTION[CONNECTION_ACTION["PONG"] = 2] = "PONG";
    CONNECTION_ACTION[CONNECTION_ACTION["ACCEPT"] = 3] = "ACCEPT";
    CONNECTION_ACTION[CONNECTION_ACTION["CHALLENGE"] = 4] = "CHALLENGE";
    CONNECTION_ACTION[CONNECTION_ACTION["CHALLENGE_RESPONSE"] = 5] = "CHALLENGE_RESPONSE";
    CONNECTION_ACTION[CONNECTION_ACTION["REJECTION"] = 6] = "REJECTION";
    CONNECTION_ACTION[CONNECTION_ACTION["REDIRECT"] = 7] = "REDIRECT";
    CONNECTION_ACTION[CONNECTION_ACTION["CONNECTION_AUTHENTICATION_TIMEOUT"] = 64] = "CONNECTION_AUTHENTICATION_TIMEOUT";
})(CONNECTION_ACTION = exports.CONNECTION_ACTION || (exports.CONNECTION_ACTION = {}));
var AUTH_ACTION;
(function (AUTH_ACTION) {
    AUTH_ACTION[AUTH_ACTION["ERROR"] = 0] = "ERROR";
    AUTH_ACTION[AUTH_ACTION["REQUEST"] = 1] = "REQUEST";
    AUTH_ACTION[AUTH_ACTION["AUTH_SUCCESSFUL"] = 2] = "AUTH_SUCCESSFUL";
    AUTH_ACTION[AUTH_ACTION["AUTH_UNSUCCESSFUL"] = 3] = "AUTH_UNSUCCESSFUL";
    AUTH_ACTION[AUTH_ACTION["TOO_MANY_AUTH_ATTEMPTS"] = 64] = "TOO_MANY_AUTH_ATTEMPTS";
    AUTH_ACTION[AUTH_ACTION["MESSAGE_PERMISSION_ERROR"] = 224] = "MESSAGE_PERMISSION_ERROR";
    AUTH_ACTION[AUTH_ACTION["MESSAGE_DENIED"] = 225] = "MESSAGE_DENIED";
    AUTH_ACTION[AUTH_ACTION["INVALID_MESSAGE_DATA"] = 226] = "INVALID_MESSAGE_DATA";
})(AUTH_ACTION = exports.AUTH_ACTION || (exports.AUTH_ACTION = {}));
var EVENT_ACTION;
(function (EVENT_ACTION) {
    EVENT_ACTION[EVENT_ACTION["ERROR"] = 0] = "ERROR";
    EVENT_ACTION[EVENT_ACTION["EMIT"] = 1] = "EMIT";
    EVENT_ACTION[EVENT_ACTION["SUBSCRIBE"] = 2] = "SUBSCRIBE";
    EVENT_ACTION[EVENT_ACTION["SUBSCRIBE_ACK"] = 3] = "SUBSCRIBE_ACK";
    EVENT_ACTION[EVENT_ACTION["UNSUBSCRIBE"] = 4] = "UNSUBSCRIBE";
    EVENT_ACTION[EVENT_ACTION["UNSUBSCRIBE_ACK"] = 5] = "UNSUBSCRIBE_ACK";
    EVENT_ACTION[EVENT_ACTION["LISTEN"] = 6] = "LISTEN";
    EVENT_ACTION[EVENT_ACTION["LISTEN_ACK"] = 7] = "LISTEN_ACK";
    EVENT_ACTION[EVENT_ACTION["UNLISTEN"] = 8] = "UNLISTEN";
    EVENT_ACTION[EVENT_ACTION["UNLISTEN_ACK"] = 9] = "UNLISTEN_ACK";
    EVENT_ACTION[EVENT_ACTION["LISTEN_ACCEPT"] = 10] = "LISTEN_ACCEPT";
    EVENT_ACTION[EVENT_ACTION["LISTEN_REJECT"] = 11] = "LISTEN_REJECT";
    EVENT_ACTION[EVENT_ACTION["SUBSCRIPTION_FOR_PATTERN_FOUND"] = 12] = "SUBSCRIPTION_FOR_PATTERN_FOUND";
    EVENT_ACTION[EVENT_ACTION["SUBSCRIPTION_FOR_PATTERN_REMOVED"] = 13] = "SUBSCRIPTION_FOR_PATTERN_REMOVED";
    EVENT_ACTION[EVENT_ACTION["MESSAGE_PERMISSION_ERROR"] = 224] = "MESSAGE_PERMISSION_ERROR";
    EVENT_ACTION[EVENT_ACTION["MESSAGE_DENIED"] = 225] = "MESSAGE_DENIED";
    EVENT_ACTION[EVENT_ACTION["INVALID_MESSAGE_DATA"] = 226] = "INVALID_MESSAGE_DATA";
    EVENT_ACTION[EVENT_ACTION["MULTIPLE_SUBSCRIPTIONS"] = 227] = "MULTIPLE_SUBSCRIPTIONS";
    EVENT_ACTION[EVENT_ACTION["NOT_SUBSCRIBED"] = 228] = "NOT_SUBSCRIBED";
})(EVENT_ACTION = exports.EVENT_ACTION || (exports.EVENT_ACTION = {}));
var RECORD_ACTION;
(function (RECORD_ACTION) {
    RECORD_ACTION[RECORD_ACTION["ERROR"] = 0] = "ERROR";
    RECORD_ACTION[RECORD_ACTION["CREATE"] = 1] = "CREATE";
    RECORD_ACTION[RECORD_ACTION["READ"] = 2] = "READ";
    RECORD_ACTION[RECORD_ACTION["READ_RESPONSE"] = 3] = "READ_RESPONSE";
    RECORD_ACTION[RECORD_ACTION["HEAD"] = 4] = "HEAD";
    RECORD_ACTION[RECORD_ACTION["HEAD_RESPONSE"] = 5] = "HEAD_RESPONSE";
    RECORD_ACTION[RECORD_ACTION["CREATEANDUPDATE"] = 6] = "CREATEANDUPDATE";
    RECORD_ACTION[RECORD_ACTION["CREATEANDUPDATE_WITH_WRITE_ACK"] = 7] = "CREATEANDUPDATE_WITH_WRITE_ACK";
    RECORD_ACTION[RECORD_ACTION["CREATEANDPATCH"] = 8] = "CREATEANDPATCH";
    RECORD_ACTION[RECORD_ACTION["CREATEANDPATCH_WITH_WRITE_ACK"] = 9] = "CREATEANDPATCH_WITH_WRITE_ACK";
    RECORD_ACTION[RECORD_ACTION["UPDATE"] = 10] = "UPDATE";
    RECORD_ACTION[RECORD_ACTION["UPDATE_WITH_WRITE_ACK"] = 12] = "UPDATE_WITH_WRITE_ACK";
    RECORD_ACTION[RECORD_ACTION["PATCH"] = 13] = "PATCH";
    RECORD_ACTION[RECORD_ACTION["PATCH_WITH_WRITE_ACK"] = 14] = "PATCH_WITH_WRITE_ACK";
    RECORD_ACTION[RECORD_ACTION["ERASE"] = 15] = "ERASE";
    RECORD_ACTION[RECORD_ACTION["ERASE_WITH_WRITE_ACK"] = 16] = "ERASE_WITH_WRITE_ACK";
    RECORD_ACTION[RECORD_ACTION["WRITE_ACKNOWLEDGEMENT"] = 17] = "WRITE_ACKNOWLEDGEMENT";
    RECORD_ACTION[RECORD_ACTION["DELETE"] = 18] = "DELETE";
    RECORD_ACTION[RECORD_ACTION["DELETE_ACK"] = 19] = "DELETE_ACK";
    RECORD_ACTION[RECORD_ACTION["DELETED"] = 20] = "DELETED";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIBEANDHEAD"] = 32] = "SUBSCRIBEANDHEAD";
    // SUBSCRIBEANDHEAD_RESPONSE = 0x21,
    RECORD_ACTION[RECORD_ACTION["SUBSCRIBEANDREAD"] = 34] = "SUBSCRIBEANDREAD";
    // SUBSCRIBEANDREAD_RESPONSE = 0x23,
    RECORD_ACTION[RECORD_ACTION["SUBSCRIBECREATEANDREAD"] = 36] = "SUBSCRIBECREATEANDREAD";
    // SUBSCRIBECREATEANDREAD_RESPONSE = 0x25,
    RECORD_ACTION[RECORD_ACTION["SUBSCRIBECREATEANDUPDATE"] = 38] = "SUBSCRIBECREATEANDUPDATE";
    // SUBSCRIBECREATEANDUPDATE_RESPONSE = 0x27,
    RECORD_ACTION[RECORD_ACTION["SUBSCRIBE"] = 40] = "SUBSCRIBE";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIBE_ACK"] = 41] = "SUBSCRIBE_ACK";
    RECORD_ACTION[RECORD_ACTION["UNSUBSCRIBE"] = 42] = "UNSUBSCRIBE";
    RECORD_ACTION[RECORD_ACTION["UNSUBSCRIBE_ACK"] = 43] = "UNSUBSCRIBE_ACK";
    RECORD_ACTION[RECORD_ACTION["LISTEN"] = 48] = "LISTEN";
    RECORD_ACTION[RECORD_ACTION["LISTEN_ACK"] = 49] = "LISTEN_ACK";
    RECORD_ACTION[RECORD_ACTION["UNLISTEN"] = 50] = "UNLISTEN";
    RECORD_ACTION[RECORD_ACTION["UNLISTEN_ACK"] = 51] = "UNLISTEN_ACK";
    RECORD_ACTION[RECORD_ACTION["LISTEN_ACCEPT"] = 52] = "LISTEN_ACCEPT";
    RECORD_ACTION[RECORD_ACTION["LISTEN_REJECT"] = 53] = "LISTEN_REJECT";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIPTION_HAS_PROVIDER"] = 54] = "SUBSCRIPTION_HAS_PROVIDER";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIPTION_HAS_NO_PROVIDER"] = 55] = "SUBSCRIPTION_HAS_NO_PROVIDER";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIPTION_FOR_PATTERN_FOUND"] = 56] = "SUBSCRIPTION_FOR_PATTERN_FOUND";
    RECORD_ACTION[RECORD_ACTION["SUBSCRIPTION_FOR_PATTERN_REMOVED"] = 57] = "SUBSCRIPTION_FOR_PATTERN_REMOVED";
    RECORD_ACTION[RECORD_ACTION["CACHE_RETRIEVAL_TIMEOUT"] = 64] = "CACHE_RETRIEVAL_TIMEOUT";
    RECORD_ACTION[RECORD_ACTION["STORAGE_RETRIEVAL_TIMEOUT"] = 65] = "STORAGE_RETRIEVAL_TIMEOUT";
    RECORD_ACTION[RECORD_ACTION["VERSION_EXISTS"] = 66] = "VERSION_EXISTS";
    RECORD_ACTION[RECORD_ACTION["RECORD_LOAD_ERROR"] = 67] = "RECORD_LOAD_ERROR";
    RECORD_ACTION[RECORD_ACTION["RECORD_CREATE_ERROR"] = 68] = "RECORD_CREATE_ERROR";
    RECORD_ACTION[RECORD_ACTION["RECORD_UPDATE_ERROR"] = 69] = "RECORD_UPDATE_ERROR";
    RECORD_ACTION[RECORD_ACTION["RECORD_DELETE_ERROR"] = 70] = "RECORD_DELETE_ERROR";
    RECORD_ACTION[RECORD_ACTION["RECORD_READ_ERROR"] = 71] = "RECORD_READ_ERROR";
    RECORD_ACTION[RECORD_ACTION["RECORD_NOT_FOUND"] = 72] = "RECORD_NOT_FOUND";
    RECORD_ACTION[RECORD_ACTION["INVALID_VERSION"] = 73] = "INVALID_VERSION";
    RECORD_ACTION[RECORD_ACTION["INVALID_PATCH_ON_HOTPATH"] = 74] = "INVALID_PATCH_ON_HOTPATH";
    RECORD_ACTION[RECORD_ACTION["MESSAGE_PERMISSION_ERROR"] = 224] = "MESSAGE_PERMISSION_ERROR";
    RECORD_ACTION[RECORD_ACTION["MESSAGE_DENIED"] = 225] = "MESSAGE_DENIED";
    RECORD_ACTION[RECORD_ACTION["INVALID_MESSAGE_DATA"] = 226] = "INVALID_MESSAGE_DATA";
    RECORD_ACTION[RECORD_ACTION["MULTIPLE_SUBSCRIPTIONS"] = 227] = "MULTIPLE_SUBSCRIPTIONS";
    RECORD_ACTION[RECORD_ACTION["NOT_SUBSCRIBED"] = 228] = "NOT_SUBSCRIBED";
})(RECORD_ACTION = exports.RECORD_ACTION || (exports.RECORD_ACTION = {}));
var RPC_ACTION;
(function (RPC_ACTION) {
    RPC_ACTION[RPC_ACTION["ERROR"] = 0] = "ERROR";
    RPC_ACTION[RPC_ACTION["REQUEST"] = 1] = "REQUEST";
    RPC_ACTION[RPC_ACTION["ACCEPT"] = 2] = "ACCEPT";
    RPC_ACTION[RPC_ACTION["RESPONSE"] = 3] = "RESPONSE";
    RPC_ACTION[RPC_ACTION["REJECT"] = 4] = "REJECT";
    RPC_ACTION[RPC_ACTION["REQUEST_ERROR"] = 5] = "REQUEST_ERROR";
    RPC_ACTION[RPC_ACTION["PROVIDE"] = 6] = "PROVIDE";
    RPC_ACTION[RPC_ACTION["PROVIDE_ACK"] = 7] = "PROVIDE_ACK";
    RPC_ACTION[RPC_ACTION["UNPROVIDE"] = 8] = "UNPROVIDE";
    RPC_ACTION[RPC_ACTION["UNPROVIDE_ACK"] = 9] = "UNPROVIDE_ACK";
    RPC_ACTION[RPC_ACTION["NO_RPC_PROVIDER"] = 64] = "NO_RPC_PROVIDER";
    RPC_ACTION[RPC_ACTION["ACCEPT_TIMEOUT"] = 66] = "ACCEPT_TIMEOUT";
    RPC_ACTION[RPC_ACTION["MULTIPLE_ACCEPT"] = 67] = "MULTIPLE_ACCEPT";
    RPC_ACTION[RPC_ACTION["INVALID_RPC_CORRELATION_ID"] = 68] = "INVALID_RPC_CORRELATION_ID";
    RPC_ACTION[RPC_ACTION["RESPONSE_TIMEOUT"] = 69] = "RESPONSE_TIMEOUT";
    RPC_ACTION[RPC_ACTION["MULTIPLE_RESPONSE"] = 70] = "MULTIPLE_RESPONSE";
    RPC_ACTION[RPC_ACTION["MESSAGE_PERMISSION_ERROR"] = 224] = "MESSAGE_PERMISSION_ERROR";
    RPC_ACTION[RPC_ACTION["MESSAGE_DENIED"] = 225] = "MESSAGE_DENIED";
    RPC_ACTION[RPC_ACTION["INVALID_MESSAGE_DATA"] = 226] = "INVALID_MESSAGE_DATA";
    RPC_ACTION[RPC_ACTION["MULTIPLE_PROVIDERS"] = 227] = "MULTIPLE_PROVIDERS";
    RPC_ACTION[RPC_ACTION["NOT_PROVIDED"] = 228] = "NOT_PROVIDED";
})(RPC_ACTION = exports.RPC_ACTION || (exports.RPC_ACTION = {}));
var PRESENCE_ACTION;
(function (PRESENCE_ACTION) {
    PRESENCE_ACTION[PRESENCE_ACTION["ERROR"] = 0] = "ERROR";
    PRESENCE_ACTION[PRESENCE_ACTION["QUERY_ALL"] = 1] = "QUERY_ALL";
    PRESENCE_ACTION[PRESENCE_ACTION["QUERY_ALL_RESPONSE"] = 2] = "QUERY_ALL_RESPONSE";
    PRESENCE_ACTION[PRESENCE_ACTION["QUERY"] = 3] = "QUERY";
    PRESENCE_ACTION[PRESENCE_ACTION["QUERY_RESPONSE"] = 4] = "QUERY_RESPONSE";
    PRESENCE_ACTION[PRESENCE_ACTION["PRESENCE_JOIN"] = 5] = "PRESENCE_JOIN";
    PRESENCE_ACTION[PRESENCE_ACTION["PRESENCE_LEAVE"] = 6] = "PRESENCE_LEAVE";
    PRESENCE_ACTION[PRESENCE_ACTION["SUBSCRIBE"] = 7] = "SUBSCRIBE";
    PRESENCE_ACTION[PRESENCE_ACTION["SUBSCRIBE_ACK"] = 8] = "SUBSCRIBE_ACK";
    PRESENCE_ACTION[PRESENCE_ACTION["UNSUBSCRIBE"] = 9] = "UNSUBSCRIBE";
    PRESENCE_ACTION[PRESENCE_ACTION["UNSUBSCRIBE_ACK"] = 10] = "UNSUBSCRIBE_ACK";
    PRESENCE_ACTION[PRESENCE_ACTION["INVALID_PRESENCE_USERS"] = 64] = "INVALID_PRESENCE_USERS";
    PRESENCE_ACTION[PRESENCE_ACTION["MESSAGE_PERMISSION_ERROR"] = 224] = "MESSAGE_PERMISSION_ERROR";
    PRESENCE_ACTION[PRESENCE_ACTION["MESSAGE_DENIED"] = 225] = "MESSAGE_DENIED";
    PRESENCE_ACTION[PRESENCE_ACTION["INVALID_MESSAGE_DATA"] = 226] = "INVALID_MESSAGE_DATA";
    PRESENCE_ACTION[PRESENCE_ACTION["MULTIPLE_SUBSCRIPTIONS"] = 227] = "MULTIPLE_SUBSCRIPTIONS";
    PRESENCE_ACTION[PRESENCE_ACTION["NOT_SUBSCRIBED"] = 228] = "NOT_SUBSCRIBED";
})(PRESENCE_ACTION = exports.PRESENCE_ACTION || (exports.PRESENCE_ACTION = {}));
exports.ACTIONS = {
    [TOPIC.PARSER]: PARSER_ACTION,
    [TOPIC.CONNECTION]: CONNECTION_ACTION,
    [TOPIC.AUTH]: AUTH_ACTION,
    [TOPIC.EVENT]: EVENT_ACTION,
    [TOPIC.RECORD]: RECORD_ACTION,
    [TOPIC.RPC]: RPC_ACTION,
    [TOPIC.PRESENCE]: PRESENCE_ACTION
};
var CONNECTION_STATE;
(function (CONNECTION_STATE) {
    CONNECTION_STATE[CONNECTION_STATE["CLOSED"] = 0] = "CLOSED";
    CONNECTION_STATE[CONNECTION_STATE["AWAITING_CONNECTION"] = 1] = "AWAITING_CONNECTION";
    CONNECTION_STATE[CONNECTION_STATE["CHALLENGING"] = 2] = "CHALLENGING";
    CONNECTION_STATE[CONNECTION_STATE["AWAITING_AUTHENTICATION"] = 3] = "AWAITING_AUTHENTICATION";
    CONNECTION_STATE[CONNECTION_STATE["AUTHENTICATING"] = 4] = "AUTHENTICATING";
    CONNECTION_STATE[CONNECTION_STATE["OPEN"] = 5] = "OPEN";
    CONNECTION_STATE[CONNECTION_STATE["ERROR"] = 6] = "ERROR";
    CONNECTION_STATE[CONNECTION_STATE["RECONNECTING"] = 7] = "RECONNECTING";
    CONNECTION_STATE[CONNECTION_STATE["TOO_MANY_AUTH_ATTEMPTS"] = 8] = "TOO_MANY_AUTH_ATTEMPTS";
    CONNECTION_STATE[CONNECTION_STATE["REDIRECTING"] = 9] = "REDIRECTING";
    CONNECTION_STATE[CONNECTION_STATE["CHALLENGE_DENIED"] = 10] = "CHALLENGE_DENIED";
})(CONNECTION_STATE = exports.CONNECTION_STATE || (exports.CONNECTION_STATE = {}));
//# sourceMappingURL=constants.js.map