# ideal-rotary-phone

Coding challenge for graceful error handling in a react single page app

To simulate a component error just click the "Break it!" Link in the navbar

Current Issues: 
- Error Boundary is only tested with non breaking component, raising an error does cause the test to fail regardless if the error is handled inside the error boundary, this is fixable but I will have to get deeper into react testing. 
