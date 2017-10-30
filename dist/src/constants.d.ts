export declare enum EVENT {
    UNSOLICITED_MESSAGE = 0,
    IS_CLOSED = 1,
    MAX_RECONNECTION_ATTEMPTS_REACHED = 2,
    CONNECTION_ERROR = 3,
    INVALID_AUTHENTICATION_DETAILS = 4,
    CONNECTION_STATE_CHANGED = "onConnectionStateChanged",
}
export declare enum TOPIC {
    ERROR = 0,
    PARSER = 1,
    CONNECTION = 2,
    AUTH = 3,
    EVENT = 4,
    RECORD = 5,
    RPC = 6,
    PRESENCE = 7,
}
export declare enum PARSER_ACTION {
    UNKNOWN_TOPIC = 64,
    UNKNOWN_ACTION = 65,
    INVALID_MESSAGE = 66,
    MESSAGE_PARSE_ERROR = 67,
    MAXIMUM_MESSAGE_SIZE_EXCEEDED = 68,
}
export declare enum CONNECTION_ACTION {
    ERROR = 0,
    PING = 1,
    PONG = 2,
    ACCEPT = 3,
    CHALLENGE = 4,
    CHALLENGE_RESPONSE = 5,
    REJECTION = 6,
    REDIRECT = 7,
    CONNECTION_AUTHENTICATION_TIMEOUT = 64,
}
export declare enum AUTH_ACTION {
    ERROR = 0,
    REQUEST = 1,
    AUTH_SUCCESSFUL = 2,
    AUTH_UNSUCCESSFUL = 3,
    TOO_MANY_AUTH_ATTEMPTS = 64,
    MESSAGE_PERMISSION_ERROR = 224,
    MESSAGE_DENIED = 225,
    INVALID_MESSAGE_DATA = 226,
}
export declare enum EVENT_ACTION {
    ERROR = 0,
    EMIT = 1,
    SUBSCRIBE = 2,
    SUBSCRIBE_ACK = 3,
    UNSUBSCRIBE = 4,
    UNSUBSCRIBE_ACK = 5,
    LISTEN = 6,
    LISTEN_ACK = 7,
    UNLISTEN = 8,
    UNLISTEN_ACK = 9,
    LISTEN_ACCEPT = 10,
    LISTEN_REJECT = 11,
    SUBSCRIPTION_FOR_PATTERN_FOUND = 12,
    SUBSCRIPTION_FOR_PATTERN_REMOVED = 13,
    MESSAGE_PERMISSION_ERROR = 224,
    MESSAGE_DENIED = 225,
    INVALID_MESSAGE_DATA = 226,
    MULTIPLE_SUBSCRIPTIONS = 227,
    NOT_SUBSCRIBED = 228,
}
export declare enum RECORD_ACTION {
    ERROR = 0,
    CREATE = 1,
    READ = 2,
    READ_RESPONSE = 3,
    HEAD = 4,
    HEAD_RESPONSE = 5,
    CREATEANDUPDATE = 6,
    CREATEANDUPDATE_WITH_WRITE_ACK = 7,
    CREATEANDPATCH = 8,
    CREATEANDPATCH_WITH_WRITE_ACK = 9,
    UPDATE = 10,
    UPDATE_WITH_WRITE_ACK = 12,
    PATCH = 13,
    PATCH_WITH_WRITE_ACK = 14,
    ERASE = 15,
    ERASE_WITH_WRITE_ACK = 16,
    WRITE_ACKNOWLEDGEMENT = 17,
    DELETE = 18,
    DELETE_ACK = 19,
    DELETED = 20,
    SUBSCRIBEANDHEAD = 32,
    SUBSCRIBEANDREAD = 34,
    SUBSCRIBECREATEANDREAD = 36,
    SUBSCRIBECREATEANDUPDATE = 38,
    SUBSCRIBE = 40,
    SUBSCRIBE_ACK = 41,
    UNSUBSCRIBE = 42,
    UNSUBSCRIBE_ACK = 43,
    LISTEN = 48,
    LISTEN_ACK = 49,
    UNLISTEN = 50,
    UNLISTEN_ACK = 51,
    LISTEN_ACCEPT = 52,
    LISTEN_REJECT = 53,
    SUBSCRIPTION_HAS_PROVIDER = 54,
    SUBSCRIPTION_HAS_NO_PROVIDER = 55,
    SUBSCRIPTION_FOR_PATTERN_FOUND = 56,
    SUBSCRIPTION_FOR_PATTERN_REMOVED = 57,
    CACHE_RETRIEVAL_TIMEOUT = 64,
    STORAGE_RETRIEVAL_TIMEOUT = 65,
    VERSION_EXISTS = 66,
    RECORD_LOAD_ERROR = 67,
    RECORD_CREATE_ERROR = 68,
    RECORD_UPDATE_ERROR = 69,
    RECORD_DELETE_ERROR = 70,
    RECORD_READ_ERROR = 71,
    RECORD_NOT_FOUND = 72,
    INVALID_VERSION = 73,
    INVALID_PATCH_ON_HOTPATH = 74,
    MESSAGE_PERMISSION_ERROR = 224,
    MESSAGE_DENIED = 225,
    INVALID_MESSAGE_DATA = 226,
    MULTIPLE_SUBSCRIPTIONS = 227,
    NOT_SUBSCRIBED = 228,
}
export declare enum RPC_ACTION {
    ERROR = 0,
    REQUEST = 1,
    ACCEPT = 2,
    RESPONSE = 3,
    REJECT = 4,
    REQUEST_ERROR = 5,
    PROVIDE = 6,
    PROVIDE_ACK = 7,
    UNPROVIDE = 8,
    UNPROVIDE_ACK = 9,
    NO_RPC_PROVIDER = 64,
    ACCEPT_TIMEOUT = 66,
    MULTIPLE_ACCEPT = 67,
    INVALID_RPC_CORRELATION_ID = 68,
    RESPONSE_TIMEOUT = 69,
    MULTIPLE_RESPONSE = 70,
    MESSAGE_PERMISSION_ERROR = 224,
    MESSAGE_DENIED = 225,
    INVALID_MESSAGE_DATA = 226,
    MULTIPLE_PROVIDERS = 227,
    NOT_PROVIDED = 228,
}
export declare enum PRESENCE_ACTION {
    ERROR = 0,
    QUERY_ALL = 1,
    QUERY_ALL_RESPONSE = 2,
    QUERY = 3,
    QUERY_RESPONSE = 4,
    PRESENCE_JOIN = 5,
    PRESENCE_LEAVE = 6,
    SUBSCRIBE = 7,
    SUBSCRIBE_ACK = 8,
    UNSUBSCRIBE = 9,
    UNSUBSCRIBE_ACK = 10,
    INVALID_PRESENCE_USERS = 64,
    MESSAGE_PERMISSION_ERROR = 224,
    MESSAGE_DENIED = 225,
    INVALID_MESSAGE_DATA = 226,
    MULTIPLE_SUBSCRIPTIONS = 227,
    NOT_SUBSCRIBED = 228,
}
export declare const ACTIONS: {
    [x: number]: typeof PARSER_ACTION | typeof CONNECTION_ACTION | typeof AUTH_ACTION | typeof EVENT_ACTION | typeof RECORD_ACTION | typeof RPC_ACTION | typeof PRESENCE_ACTION;
};
export declare enum CONNECTION_STATE {
    CLOSED = 0,
    AWAITING_CONNECTION = 1,
    CHALLENGING = 2,
    AWAITING_AUTHENTICATION = 3,
    AUTHENTICATING = 4,
    OPEN = 5,
    ERROR = 6,
    RECONNECTING = 7,
    TOO_MANY_AUTH_ATTEMPTS = 8,
    REDIRECTING = 9,
    CHALLENGE_DENIED = 10,
}
