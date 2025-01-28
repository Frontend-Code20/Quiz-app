// Question array which contains a question objects
export const questions = [
    {
        question: "Which of the following is not a valid JavaScript data type?",
        option1: "Number",
        option2: "Float",
        option3: "String",
        option4: "Boolean",
        answer: 2, // 'Float' is not a valid JavaScript data type
    },
    {
        question: "What will be the output of the following code?<br> console.log(2 + '2')",
        option1: "4",
        option2: "'22'",
        option3: "22",
        option4: "Error",
        answer: 2, // 2 + '2' results in string '22'
    },
    {
        question: "Which function is used to parse a JSON string into a JavaScript object?",
        option1: "JSON.stringify()",
        option2: "JSON.parse()",
        option3: "JSON.encode()",
        option4: "JSON.toObject()",
        answer: 2, // Correct function is 'JSON.parse()'
    },
    {
        question: "What is the correct way to declare a JavaScript array?",
        option1: "var array : {}",
        option2: "var array : []",
        option3: "var array : ()",
        option4: "var array : new Array()",
        answer: 2, // The correct way is 'var array = []' or 'var array = new Array()'
    },
    {
        question: "What does the 'typeof' operator in JavaScript return?",
        option1: "The data type of a variable",
        option2: "The value of a variable",
        option3: "The length of a variable",
        option4: "The name of a variable",
        answer: 1, // The 'typeof' operator returns the data type of a variable
    },
    {
        question: "Which of the following is not a looping structure in JavaScript?",
        option1: "for",
        option2: "while",
        option3: "loop",
        option4: "do while",
        answer: 3, // 'loop' is not a valid looping structure
    },
    {
        question: "What will be the result of the following code?<br> var x = 10;<br> var y = '5';<br> console.log(x + y);",
        option1: "15",
        option2: "'105'",
        option3: "105",
        option4: "Error",
        answer: 2, // Concatenation of number and string results in '105'
    },
    {
        question: "In JavaScript, what is the purpose of the 'NaN' value?",
        option1: "Not a Number, used to represent errors",
        option2: "Represents a large number",
        option3: "Represents infinity",
        option4: "Represents a non-terminating decimal",
        answer: 1, // 'NaN' stands for "Not a Number"
    },
    {
        question: "Which of the following is NOT a valid way to declare a function in JavaScript?",
        option1: "function myFunction(){}",
        option2: "var myFunction = function(){}",
        option3: "() => {}",
        option4: "const function(){}",
        answer: 4, // The correct way to declare a function is not 'const function(){}'
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        option1: "/*This is a comment",
        option2: "'This is a comment'",
        option3: "// This is a comment",
        option4: "/* This is a comment */",
        answer: 3, // The correct way is '// This is a comment'
    },
    {
        question: "What is the result of the following expression in JavaScript?<br>3 + 2 + '7'",
        option1: "'57'",
        option2: "'327'",
        option3: "'12'",
        option4: "'57'",
        answer: 1, // 3 + 2 = 5, then 5 + '7' results in '57'
    },
    {
        question: "How can you check if a variable is an array in JavaScript?",
        option1: "Using the typeof operator",
        option2: "Using the isArray() method",
        option3: "Using the isarray() method",
        option4: "Using the Array.isArray() method",
        answer: 4, // The correct method is 'Array.isArray()'
    },
    {
        question: "What is the correct way to access the first element of an array in JavaScript?",
        option1: "arrayfirst",
        option2: "array[1]",
        option3: "arrayfirstElement",
        option4: "array[0]",
        answer: 4, // The first element is at index 0
    },
    {
        question: "Which of the following statements is true about JavaScript?",
        option1: "It is a case-insensitive language",
        option2: "It requires explicit declaration of data types",
        option3: "It supports automatic type conversion",
        option4: "It does not support object-oriented programming",
        answer: 3, // JavaScript supports automatic type conversion
    },
    {
        question: "What does the '===' operator do in JavaScript?",
        option1: "Checks if two values are equal, but doesn't consider their types",
        option2: "Checks if two values are equal, including their types",
        option3: "Assigns a value to a variable",
        option4: "Converts a string to a number",
        answer: 2, // The '===' operator checks for strict equality (both value and type)
    },
    {
        question: "What does the 'Math.random()' function in JavaScript return?",
        option1: "A random integer between 0 and 1",
        option2: "A random integer between 1 and 100",
        option3: "A random floating-point number between 0 and 1",
        option4: "A random floating-point number between 0 and 100",
        answer: 3, // 'Math.random()' returns a floating-point number between 0 and 1
    },
    {
        question: "How can you convert a string to lowercase in JavaScript?",
        option1: "strlowercase()",
        option2: "strtoLowerCase()",
        option3: "strconvertToLower()",
        option4: "strtoLower()",
        answer: 2, // The correct method is 'str.toLowerCase()'
    },
    {
        question: "Which of the following methods can be used to add a new element to the end of an array in JavaScript?",
        option1: "push()",
        option2: "unshift()",
        option3: "add()",
        option4: "append()",
        answer: 1, // 'push()' adds an element to the end of an array
    },
    {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        option1: "It indicates that the script should be executed in strict mode",
        option2: "It enables dynamic typing",
        option3: "It allows implicit conversion of data types",
        option4: "It enforces stricter syntax rules",
        answer: 1, // 'use strict' enables strict mode for the script
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element in JavaScript?",
        option1: "pop()",
        option2: "shift()",
        option3: "splice()",
        option4: "slice()",
        answer: 1, // The 'pop()' method removes the last element of an array
    }
];
