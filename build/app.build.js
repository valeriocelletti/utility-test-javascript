({
    baseUrl: "../source",
    dir: "../built/",
    keepBuildDir: false,
    generateSourceMaps: true,
    optimize: "closure",
    closure: {
        CompilationLevel: 'ADVANCED_OPTIMIZATIONS',
        loggingLevel: 'SEVERE',
        externs: [
          "externs.js"
        ],
        ignoreDefaultExterns: false,
        avoidGlobals: true
    },
    
    paths: {
        "Inheritance": "empty:",
        "EventDispatcher": "empty:",
        "LoggerManager": "empty:",
        "Inheritance": "empty:"
    },
    
    removeCombined: true,
    
    modules: [
      {
        name: "utility-test",
        include: ["AbstractTest",
                  "ASSERT",
                  "TestRunner"
              ]
      }
    ],

    /*
    wrap: {
        start: "(function(o) {var l='weswit/';var define = function(c,a,d){for(var b=0;b<a.length;b++)a[b]=l+a[b];o(l+c,a,d)};",
        end: "}(define));"
    },
    */
    
    preserveLicenseComments: false
})