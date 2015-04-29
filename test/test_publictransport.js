QUnit.module("public transport availability");
QUnit.test( "public transport is a singleton", function( assert ) {
  assert.deepEqual(PublicTransport.getInstance(), PublicTransport.getInstance(), "the bus is only one!");
});
QUnit.test("public transport is not null", function (assert) {
  assert.notEqual(PublicTransport.getInstance(), null, "The bus is existent");
});

QUnit.module("Public Transport capabilities");
QUnit.test("can add listeners", function (assert) {
  debugger;
  var counter = 0,
    handler = {
      handle: function (properties) {
        counter += 1;
      }
    };

  PublicTransport.getInstance().addListener("testEvent", handler);
  PublicTransport.getInstance().dispatch("testEvent");
  assert.equal(counter, 1, "PublicTransport acts sane on listener addition");
});
