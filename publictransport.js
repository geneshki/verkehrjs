var PublicTransport = (function () {
  var instance,
    listeners = {},
    createInstance = function () {
      return {
        addListener: function (event, handler) {
          listeners[event].push(handler);
        },
        fire: function (event, properties) {
          listeners.forEach(function (handler) {
            handler.handle(properties);
          });
        },
        removeListener: function (event, handler) {
          var index = listeners[event].indexOf(handler);
          listeners.splice(index, 1);
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
