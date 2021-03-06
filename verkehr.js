/**
 *  A minimalistic Event Bus library.
 *  version 1.1
 *
 *  The MIT License (MIT)
 *  Copyright (c) 2015 insignificantMe
 */
var Verkehr = (function () {
  var  createInstance = function () {
    var listeners = {};
      return {
      addListener: function (event, handler) {
        if (listeners[event] === undefined || listeners[event] === null) {
          listeners[event] = [];
        }
        listeners[event].push(handler);
      },
      dispatch: function (event, properties) {
        listeners[event].forEach(function (handler) {
          handler.handle(properties);
        });
      },
      removeListener: function (event, handler) {
        var index = listeners[event].indexOf(handler),
          garbage;
        if (index >= 0) {
          garbage = listeners[event].splice(index, 1);
        } else {
          console.log("no such handler attached");
        }
        return garbage;
      },
      removeAllListeners: function () {
        listeners = {};
      }
    };
  };
  return {
    getInstance: function () {
      return createInstance();
    }
  }
}());
