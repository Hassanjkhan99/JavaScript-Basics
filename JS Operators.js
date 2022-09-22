// JavaScript includes operators same as other languages. An operator performs some operation on single or multiple operands (data value) and produces a result.

//assignment operator ==> =
let x = 5 // assigns number 5 to 'x'
let y = 2
let z = x + y

// Arithmetic Operators
// +	Adds two numeric operands.
// -	Subtract right operand from left operand
// *	Multiply two numeric operands.
// /	Divide left operand by right operand.
// %	Modulus operator. Returns remainder of two operands.
// ++	Increment operator. Increase operand value by one.
// --	Decrement operator. Decrease value by one.

var a = 5, b = 10;

var c = a + b; //shows addition and returns 15
z = b - a; //shows subtraction and returns 5
z = a * b; //shows multiplication and returns 50
z = b / a; //shows division and returns 2
z = a % 2; //shows division remainder 1

// Comparison Operators
// ==	Compares the equality of two operands without considering type.
// ===	Compares equality of two operands with type.
// !=	Compares inequality of two operands.
// >	Returns a boolean value true if the left-side value is greater than the right-side value; otherwise, returns false.
// <	Returns a boolean value true if the left-side value is less than the right-side value; otherwise, returns false.
// >=	Returns a boolean value true if the left-side value is greater than or equal to the right-side value; otherwise, returns false.
// <=	Returns a boolean value true if the left-side value is less than or equal to the right-side value; otherwise, returns false

var a = 5, b = 10, c = "5";
var s = a;

a == c; // returns true
a === c; // returns false
a == s; // returns true
a != b; // returns true
a > b; // returns false
a < b; // returns true
a >= b; // returns false
a <= b; // returns true

// Logical Operators

// In JavaScript, the logical operators are used to combine two or more conditions.

// Operator	Description
// &&	    && is known as AND operator. It checks whether two operands are non-zero or not (0, false, undefined, null or "" are considered as zero). It returns 1 if they are non-zero; otherwise, returns 0.
// ||	    || is known as OR operator. It checks whether any one of the two operands is non-zero or not (0, false, undefined, null or "" is considered as zero). It returns 1 if any one of of them is non-zero; otherwise, returns 0.
// !	    ! is known as NOT operator. It reverses the boolean result of the operand (or condition). !false returns true, and !true returns false.

var a = 5, b = 10;

(a != b) && (a < b); // returns true

(a > b) || (a == b); // returns false

(a < b) || (a == b); // returns true

!(a < b); // returns false

!(a > b); // returns true

// Assignment Operators

// JavaScript provides the assignment operators to assign values to variables with less key strokes.

// Assignment operators	Description
// =	                    Assigns right operand value to the left operand.
// +=	                    Sums up left and right operand values and assigns the result to the left operand.
// -=	                    Subtract right operand value from the left operand value and assigns the result to the left operand.
// *=	                    Multiply left and right operand values and assigns the result to the left operand.
// /=	                    Divide left operand value by right operand value and assign the result to the left operand.
// %=	                    Get the modulus of left operand divide by right operand and assign resulted modulus to the left operand.

var q = 5, w = 10, e = 15;

q = w; //q would be 10

q += 1; //q would be 6

q -= 1; //q would be 4

q *= 5; //q would be 25

q /= 5; //q would be 1

q %= 2; //q would be 1


// Ternary Operator

// JavaScript provides a special operator called ternary operator :? that assigns a value to a variable based on some condition. This is the short form of the if else condition.

var a = 10, b = 5;

var c = a > b? a : b; // value of c would be 10
var d = a > b? b : a; // value of d would be 5

