require({

    baseUrl: "../source",
    keepBuildDir: false,
    generateSourceMaps: true,
    optimize: "closure",
    closure: {
        CompilationLevel: 'ADVANCED_OPTIMIZATIONS',
        loggingLevel: 'SEVERE',
        externs: [
          "utility-logging-externs.js",
          "utility-toolkit-externs.js"
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

    preserveLicenseComments: false

})