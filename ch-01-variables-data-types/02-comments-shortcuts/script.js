/* Shortcuts
- SHIFT + UP/DOWN/RIGHT/LEFT = highlight
- CMD + RIGHT/LEFT = Cursor place far right/left
- SHIFT + OPT + RIGHT/LEFT = Highlight right/left
- SHIFT + CMD + RIGHT/LEFT = Highlight all right/left
- OPT + UP/DOWN = Move text up/down
- SHIFT + OPT + UP/DOWN = Copy text
- CMD + D = Highlight same texts one at a time
- CMD + SHIFT + L = Highlight all the same text
- OPT + CLICK = Place cursor in multiple places
- CMD + SHIFT + O = Find a file
- CMD + OPT + F = Search for key words in different files
- CMD + B = Toggle sidebar
- CTRL + ~ = Toggle terminal
*/

// This is a single line of code

/* Multi-line comment
console.log(100);

console.log('Hello World');

console.log(20, 'hello', true);
*/

const x = 100;

console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({ name: 'Jay', email: 'jay@email.com' });

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green;';

console.log('%cHello World', styles);
