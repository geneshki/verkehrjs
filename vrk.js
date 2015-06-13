/**A minimalistic Event Bus library. version 1.1 The MIT License (MIT) Copyright (c) 2015 geneshki */
var Verkehr=function(){var n=function(){var n={}
return{addListener:function(e,r){if(void 0===n[e]||null===n[e])n[e]=[]
n[e].push(r)},dispatch:function(e,r){n[e].forEach(function(n){n.handle(r)})},removeListener:function(e,r){var t=n[e].indexOf(r),o
if(t>=0)o=n[e].splice(t,1)
else console.log("no such handler attached")
return o},removeAllListeners:function(){n={}}}}
return{getInstance:function(){return n()}}}()
