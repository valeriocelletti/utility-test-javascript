var requirejs = require('requirejs');

requirejs.config({
  deps: ["utility-toolkit.js",
         "utility-logging.js",
         "utility-test.js"],
  nodeRequire: require
});

requirejs(["TestRunner","ASSERT","path/to/Class1Test"], 
    function(TestRunner,ASSERT,Class1Test) {
  
  var mainRunner = new TestRunner();
  
  var instances = Class1Test.getInstances();
  for (var i = 0; i < instances.length; i++) {
    mainRunner.pushTest(instances[i]);
  }
  
  mainRunner.addListener({
    onAllTestComplete:function(fails) {
      if (fails > 0) {
        //something went wrong, review your code!
      }
    },
   });
  
  
  mainRunner.start();
});

