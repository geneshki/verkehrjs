QUnit.module("public transport availability");
QUnit.test( "public transport is a singleton", function( assert ) {
  assert.deepEqual(PublicTransport.getInstance(), PublicTransport.getInstance(), "the bus is only one!");
});
QUnit.test("public transport is not null", function (assert) {
  assert.notEqual(PublicTransport.getInstance(), null, "The bus is present");
});

QUnit.module("Public Transport capabilities", {
  beforeEach: function() {
    this.handler = {
        handle: function (properties) {
          properties.counter += 1;
        }
      };
  },
  afterEach: function() {
    // clean up after each test
    PublicTransport.getInstance().removeAllListeners();
  }
});
QUnit.test("can add listeners and fire events", function (assert) {
  var properties = {
    counter: 0
  };
  PublicTransport.getInstance().addListener("testEvent", this.handler);
  PublicTransport.getInstance().dispatch("testEvent", properties);
  assert.equal(properties.counter, 1, "PublicTransport acts sane on listener addition");
});
//QUnit.test("can pass the event properties to the handlers", function (assert) {

//});
QUnit.test("can remove listeners", function (assert) {
  var properties = {
    counter: 0
  };
  PublicTransport.getInstance().addListener("testEvent", this.handler);
  PublicTransport.getInstance().dispatch("testEvent", properties);
  assert.equal(properties.counter, 1, "PublicTransport acts sane on listener addition");
  PublicTransport.getInstance().removeListener("testEvent", this.handler);
  PublicTransport.getInstance().dispatch("testEvent", properties);
  assert.equal(properties.counter, 1, "PublicTransport has no handler for testEvent anymore");
});
