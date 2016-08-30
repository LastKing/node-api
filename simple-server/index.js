/**
 * Created by Rain on 2016/8/30.
 */
var server = require('./server');
var router = require('./router');
var requestHandlers = require("./requestHandlers");


var handle = {};

handle["/"] = requestHandlers.start;

handle["/start"] = requestHandlers.start;

handle["/index"] = requestHandlers.index;

handle["/upload"] = requestHandlers.upload;


server.start(router.route, handle);