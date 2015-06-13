QUnit.module("public transport availability");
QUnit.test("public transport is not null", function (assert) {
  assert.notEqual(Verkehr.getInstance(), null, "The bus is present");
});
QUnit.module("Public Transport capabilities", {
  beforeEach: function() {
    this.handler = {
        handle: function (properties) {
          properties.counter += 1;
        }
      };
    this.verkehr = Verkehr.getInstance();
  },
  afterEach: function() {
  }
});
QUnit.test("can add listeners and fire events", function (assert) {
  var properties = {
    counter: 0
  };
  this.verkehr.addListener("testEvent", this.handler);
  this.verkehr.dispatch("testEvent", properties);
  assert.equal(properties.counter, 1, "Verkehr acts sane on listener addition");
});
//QUnit.test("can pass the event properties to the handlers", function (assert) {

//});
QUnit.test("can remove listeners", function (assert) {
  var properties = {
    counter: 0
  };
  this.verkehr.addListener("testEvent", this.handler);
  this.verkehr.dispatch("testEvent", properties);
  assert.equal(properties.counter, 1, "Verkehr acts sane on listener addition");
  this.verkehr.removeListener("testEvent", this.handler);
  this.verkehr.dispatch("testEvent", properties);
  assert.equal(properties.counter, 1, "Verkehr has no handler for testEvent anymore");
});
