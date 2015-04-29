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
          var index = listeners[event].indexOf(handler);
          listeners[event].splice(index, 1);
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
