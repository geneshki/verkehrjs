var PublicTransport = (function () {
  var instance,
    listeners = {},
    createInstance = function () {
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
          debugger;
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
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
}());
