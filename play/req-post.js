IncomingMessage {
  _readableState:
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: BufferList { length: 0
    },
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: true,
     ended: true,
     endEmitted: true,
     reading: false,
     errorEmitted: false,
     sync: false,
     needReadable: false,
     emittedReadable: false,
     readableListening: false,
     resumeScheduled: false,
     emitClose: true,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null
  },
  readable: false,
  _events: {},
  _eventsCount: 0,
  _maxListeners: undefined,
  socket:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        reading: true,
        owner: [Circular
      ],
        onread: [Function: onread
      ],
        onconnection: null,
        _consumed: true
    },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { length: 0
      },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        errorEmitted: false,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        emitClose: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null
    },
     readable: true,
     _events: { end: [Array
      ],
        drain: [Array
      ],
        timeout: [Function: socketOnTimeout
      ],
        data: [Function: bound socketOnData
      ],
        error: [Function: socketOnError
      ],
        close: [Array
      ],
        resume: [Function: onSocketResume
      ],
        pause: [Function: onSocketPause
      ]
    },
     _eventsCount: 8,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite
      ],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object
      ]
    },
     writable: true,
     allowHalfOpen: true,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        _events: [Object
      ],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP
      ],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6: : : : 0',
      [Symbol(IncomingMessage)
      ]: [Function
      ],
      [Symbol(ServerResponse)
      ]: [Function
      ],
      [Symbol(asyncId)
      ]: 2667
    },
     _server:
      Server {
        _events: [Object
      ],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP
      ],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6: : : : 0',
      [Symbol(IncomingMessage)
      ]: [Function
      ],
      [Symbol(ServerResponse)
      ]: [Function
      ],
      [Symbol(asyncId)
      ]: 2667
    },
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders
      ],
        '1': [Function: parserOnHeadersComplete
      ],
        '2': [Function: parserOnBody
      ],
        '3': [Function: parserOnMessageComplete
      ],
        '4': [Function: bound onParserExecute
      ],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular
      ],
        incoming: [Circular
      ],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming
      ]
    },
     on: [Function: socketOnWrap
    ],
     _paused: false,
     _httpMessage:
      ServerResponse {
        _events: [Object
      ],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: false,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular
      ],
        connection: [Circular
      ],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData
      ],
        _sent100: false,
        _expect_continue: false,
        req: [Circular
      ],
        locals: {},
      [Symbol(isCorked)
      ]: false,
      [Symbol(outHeadersKey)
      ]: [Object
      ]
    },
    [Symbol(asyncId)
    ]: 2675,
    [Symbol(lastWriteQueueSize)
    ]: 0,
    [Symbol(timeout)
    ]:
      Timeout {
        _called: false,
        _idleTimeout: 120000,
        _idlePrev: [TimersList
      ],
        _idleNext: [TimersList
      ],
        _idleStart: 4775,
        _onTimeout: [Function: bound
      ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
      [Symbol(unrefed)
      ]: true,
      [Symbol(asyncId)
      ]: 2676,
      [Symbol(triggerId)
      ]: 2675
    },
    [Symbol(kBytesRead)
    ]: 0,
    [Symbol(kBytesWritten)
    ]: 0
  },
  connection:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        reading: true,
        owner: [Circular
      ],
        onread: [Function: onread
      ],
        onconnection: null,
        _consumed: true
    },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { length: 0
      },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        errorEmitted: false,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        emitClose: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null
    },
     readable: true,
     _events: { end: [Array
      ],
        drain: [Array
      ],
        timeout: [Function: socketOnTimeout
      ],
        data: [Function: bound socketOnData
      ],
        error: [Function: socketOnError
      ],
        close: [Array
      ],
        resume: [Function: onSocketResume
      ],
        pause: [Function: onSocketPause
      ]
    },
     _eventsCount: 8,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite
      ],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object
      ]
    },
     writable: true,
     allowHalfOpen: true,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        _events: [Object
      ],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP
      ],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6: : : : 0',
      [Symbol(IncomingMessage)
      ]: [Function
      ],
      [Symbol(ServerResponse)
      ]: [Function
      ],
      [Symbol(asyncId)
      ]: 2667
    },
     _server:
      Server {
        _events: [Object
      ],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP
      ],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6: : : : 0',
      [Symbol(IncomingMessage)
      ]: [Function
      ],
      [Symbol(ServerResponse)
      ]: [Function
      ],
      [Symbol(asyncId)
      ]: 2667
    },
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders
      ],
        '1': [Function: parserOnHeadersComplete
      ],
        '2': [Function: parserOnBody
      ],
        '3': [Function: parserOnMessageComplete
      ],
        '4': [Function: bound onParserExecute
      ],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular
      ],
        incoming: [Circular
      ],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming
      ]
    },
     on: [Function: socketOnWrap
    ],
     _paused: false,
     _httpMessage:
      ServerResponse {
        _events: [Object
      ],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: false,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular
      ],
        connection: [Circular
      ],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData
      ],
        _sent100: false,
        _expect_continue: false,
        req: [Circular
      ],
        locals: {},
      [Symbol(isCorked)
      ]: false,
      [Symbol(outHeadersKey)
      ]: [Object
      ]
    },
    [Symbol(asyncId)
    ]: 2675,
    [Symbol(lastWriteQueueSize)
    ]: 0,
    [Symbol(timeout)
    ]:
      Timeout {
        _called: false,
        _idleTimeout: 120000,
        _idlePrev: [TimersList
      ],
        _idleNext: [TimersList
      ],
        _idleStart: 4775,
        _onTimeout: [Function: bound
      ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
      [Symbol(unrefed)
      ]: true,
      [Symbol(asyncId)
      ]: 2676,
      [Symbol(triggerId)
      ]: 2675
    },
    [Symbol(kBytesRead)
    ]: 0,
    [Symbol(kBytesWritten)
    ]: 0
  },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: true,
  headers: { host: '127.0.0.1: 35749',
     'accept-encoding': 'gzip, deflate',
     'user-agent': 'node-superagent/2.3.0',
     'content-type': 'application/json',
     'content-length': '52',
     connection: 'close'
  },
  rawHeaders: [ 'Host',
     '127.0.0.1: 35749',
     'Accept-Encoding',
     'gzip, deflate',
     'User-Agent',
     'node-superagent/2.3.0',
     'Content-Type',
     'application/json',
     'Content-Length',
     '52',
     'Connection',
     'close'
  ],
  trailers: {},
  rawTrailers: [],
  upgrade: false,
  url: '/users/login',
  method: 'POST',
  statusCode: null,
  statusMessage: null,
  client:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        reading: true,
        owner: [Circular
      ],
        onread: [Function: onread
      ],
        onconnection: null,
        _consumed: true
    },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { length: 0
      },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        errorEmitted: false,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        emitClose: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null
    },
     readable: true,
     _events: { end: [Array
      ],
        drain: [Array
      ],
        timeout: [Function: socketOnTimeout
      ],
        data: [Function: bound socketOnData
      ],
        error: [Function: socketOnError
      ],
        close: [Array
      ],
        resume: [Function: onSocketResume
      ],
        pause: [Function: onSocketPause
      ]
    },
     _eventsCount: 8,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite
      ],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object
      ]
    },
     writable: true,
     allowHalfOpen: true,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        _events: [Object
      ],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP
      ],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6: : : : 0',
      [Symbol(IncomingMessage)
      ]: [Function
      ],
      [Symbol(ServerResponse)
      ]: [Function
      ],
      [Symbol(asyncId)
      ]: 2667
    },
     _server:
      Server {
        _events: [Object
      ],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP
      ],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6: : : : 0',
      [Symbol(IncomingMessage)
      ]: [Function
      ],
      [Symbol(ServerResponse)
      ]: [Function
      ],
      [Symbol(asyncId)
      ]: 2667
    },
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders
      ],
        '1': [Function: parserOnHeadersComplete
      ],
        '2': [Function: parserOnBody
      ],
        '3': [Function: parserOnMessageComplete
      ],
        '4': [Function: bound onParserExecute
      ],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular
      ],
        incoming: [Circular
      ],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming
      ]
    },
     on: [Function: socketOnWrap
    ],
     _paused: false,
     _httpMessage:
      ServerResponse {
        _events: [Object
      ],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: false,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular
      ],
        connection: [Circular
      ],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData
      ],
        _sent100: false,
        _expect_continue: false,
        req: [Circular
      ],
        locals: {},
      [Symbol(isCorked)
      ]: false,
      [Symbol(outHeadersKey)
      ]: [Object
      ]
    },
    [Symbol(asyncId)
    ]: 2675,
    [Symbol(lastWriteQueueSize)
    ]: 0,
    [Symbol(timeout)
    ]:
      Timeout {
        _called: false,
        _idleTimeout: 120000,
        _idlePrev: [TimersList
      ],
        _idleNext: [TimersList
      ],
        _idleStart: 4775,
        _onTimeout: [Function: bound
      ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
      [Symbol(unrefed)
      ]: true,
      [Symbol(asyncId)
      ]: 2676,
      [Symbol(triggerId)
      ]: 2675
    },
    [Symbol(kBytesRead)
    ]: 0,
    [Symbol(kBytesWritten)
    ]: 0
  },
  _consuming: true,
  _dumped: false,
  next: [Function: next
  ],
  baseUrl: '',
  originalUrl: '/users/login',
  _parsedUrl:
   Url {
     protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: null,
     query: null,
     pathname: '/users/login',
     path: '/users/login',
     href: '/users/login',
     _raw: '/users/login'
  },
  params: {},
  query: {},
  res:
   ServerResponse {
     _events: { finish: [Function: bound resOnFinish
      ]
    },
     _eventsCount: 1,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [TCP
      ],
        _parent: null,
        _host: null,
        _readableState: [ReadableState
      ],
        readable: true,
        _events: [Object
      ],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState
      ],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server
      ],
        _server: [Server
      ],
        parser: [HTTPParser
      ],
        on: [Function: socketOnWrap
      ],
        _paused: false,
        _httpMessage: [Circular
      ],
      [Symbol(asyncId)
      ]: 2675,
      [Symbol(lastWriteQueueSize)
      ]: 0,
      [Symbol(timeout)
      ]: [Timeout
      ],
      [Symbol(kBytesRead)
      ]: 0,
      [Symbol(kBytesWritten)
      ]: 0
    },
     connection:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [TCP
      ],
        _parent: null,
        _host: null,
        _readableState: [ReadableState
      ],
        readable: true,
        _events: [Object
      ],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState
      ],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server
      ],
        _server: [Server
      ],
        parser: [HTTPParser
      ],
        on: [Function: socketOnWrap
      ],
        _paused: false,
        _httpMessage: [Circular
      ],
      [Symbol(asyncId)
      ]: 2675,
      [Symbol(lastWriteQueueSize)
      ]: 0,
      [Symbol(timeout)
      ]: [Timeout
      ],
      [Symbol(kBytesRead)
      ]: 0,
      [Symbol(kBytesWritten)
      ]: 0
    },
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData
    ],
     _sent100: false,
     _expect_continue: false,
     req: [Circular
    ],
     locals: {},
    [Symbol(isCorked)
    ]: false,
    [Symbol(outHeadersKey)
    ]: { 'x-powered-by': [Array
      ]
    }
  },
  body: { email: 'jen@example.com', password: 'userTwoPass'
  },
  _body: true,
  length: undefined,
  route:
   Route {
     path: '/users/login',
     stack: [
      [Layer
      ]
    ],
     methods: { post: true
    }
  }
}