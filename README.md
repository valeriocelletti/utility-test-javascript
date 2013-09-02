# Weswit JavaScript test toolkit #


This project is currently used by {@link https://github.com/weswit/utility-toolkit-javascript|utility-toolkit-javascript} and {@link https://github.com/weswit/utility-logging-javascript|utility-logging-javascript} even if it depends from both. To avoid confusion the two toolkit are imported after being namespaced as "weswit" that's why in the sources classes from such projects are referenced as weswit/ModuleName.

   


Escpecially if the code to be tested is part of an API you may want to run your tests 3 times:

1 using the source for both the test code and the API code
2 using the minified code of both the test and the APIs
3 using the test source against the minified APIs

1 and 2 are easily done, but for 3 
