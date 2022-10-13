// // Javascript skeleton.
// // Edit and adapt to your needs.
// // The documentation of the NeoLoad Javascript API
// // is available in the appendix of the documentation.
// 
// // Get variable value from VariableManager
// var myVar = context.variableManager.getValue("myVar");
// if (myVar==null) {
//         context.fail("Variable 'myVar' not found");
// }
// 
// // Do some computation using the methods
// // you defined in the JS Library
// var computedValue = myLibraryFunction(myVar);
// logger.debug("ComputedValue="+computedValue);
// 
// // Inject the computed value in a runtime variable
// context.variableManager.setValue("computedVar",computedValue);



var flight_prices =context.variableManager.getValue("flight");
var fLen = flight_prices.length;
logger.debug("ComputedValue="+flight_prices);
logger.debug("ComputedValue="+fLen);