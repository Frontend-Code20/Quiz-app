
var Myapp = {};
Myapp.dom = {};
Myapp.QuestionOption = {};
Myapp.func = {};
Myapp.SetTimer = {};

Myapp.dom.question = document.getElementById('question');
Myapp.dom.options = document.getElementsByTagName('h4');
Myapp.dom.Btn = document.getElementById('btn');
Myapp.dom.Timer = document.getElementById("Timer");
Myapp.dom.Total = document.getElementById("Total");
Myapp.dom.container = document.getElementById("container");
Myapp.dom.wrapper = document.getElementById("wrapper");
Myapp.dom.result = document.getElementById("result");
Myapp.dom.Obtained = document.getElementById("Obtained");
Myapp.dom.Trybtn = document.getElementById("Trybtn");


Myapp.QuestionOption.Question = "";
Myapp.QuestionOption.option1 = "";
Myapp.QuestionOption.option2 = "";
Myapp.QuestionOption.option3 = "";
Myapp.QuestionOption.option4 = "";
Myapp.QuestionOption.awnser = 0;
Myapp.QuestionOption.UserAwnser = 0;
Myapp.QuestionOption.result = 0;
Myapp.QuestionOption.AttemptQuestions = 1;

Myapp.Qnumber = 1;

var Questions = {
    
    question1: function(){
        Myapp.QuestionOption.Question = "Which of the following is not a valid JavaScript data type?";
        Myapp.QuestionOption.option1 = "Number";
        Myapp.QuestionOption.option2 = "Float";
        Myapp.QuestionOption.option3 = "String";
        Myapp.QuestionOption.option4 = "Boolean";
        Myapp.QuestionOption.awnser = 2;
    },
    question2: function(){
        Myapp.QuestionOption.Question = "What will be the output of the following code?<br> console.log(2 + '2')";
        Myapp.QuestionOption.option1 = "4";
        Myapp.QuestionOption.option2 = "'22'";
        Myapp.QuestionOption.option3 = "22";
        Myapp.QuestionOption.option4 = "Error";
        Myapp.QuestionOption.awnser = 2;
    },
    question3: function(){
        Myapp.QuestionOption.Question = "Which function is used to parse a JSON string into a JavaScript object?";
        Myapp.QuestionOption.option1 = "JSON.stringify()";
        Myapp.QuestionOption.option2 = "JSON.parse()";
        Myapp.QuestionOption.option3 = "JSON.encode()";
        Myapp.QuestionOption.option4 = "JSON.toOject()";
        Myapp.QuestionOption.awnser = 2;
    },
    question4: function(){
        Myapp.QuestionOption.Question = "What is the correct way to declare a JavaScript array?";
        Myapp.QuestionOption.option1 = "var array = {}";
        Myapp.QuestionOption.option2 = "var array = []";
        Myapp.QuestionOption.option3 = "var array = ()";
        Myapp.QuestionOption.option4 = "var array = new Array()";
        Myapp.QuestionOption.awnser = 2;
    },
    question5: function(){
        Myapp.QuestionOption.Question = "What does the 'typeof' operator in JavaScript return?";
        Myapp.QuestionOption.option1 = "The data type of a variable";
        Myapp.QuestionOption.option2 = "The value of a variable";
        Myapp.QuestionOption.option3 = " The length of a variable";
        Myapp.QuestionOption.option4 = "The name of a variable";
        Myapp.QuestionOption.awnser = 1;
    },
    question6: function(){
        Myapp.QuestionOption.Question = "Which of the following is not a looping structure in JavaScript?";
        Myapp.QuestionOption.option1 = "for";
        Myapp.QuestionOption.option2 = "while";
        Myapp.QuestionOption.option3 = "loop";
        Myapp.QuestionOption.option4 = "do...while";
        Myapp.QuestionOption.awnser = 3;
    },
    question7: function(){
        Myapp.QuestionOption.Question = "What will be the result of the following code?<br>var x =10;<br>var y ='5';<br>console.log(x+y);";
        Myapp.QuestionOption.option1 = "15";
        Myapp.QuestionOption.option2 = "'105'";
        Myapp.QuestionOption.option3 = "105";
        Myapp.QuestionOption.option4 = "Error";
        Myapp.QuestionOption.awnser = 2;
    },
    question8: function(){
        Myapp.QuestionOption.Question = "In JavaScript, what is the purpose of the 'NaN' value?";
        Myapp.QuestionOption.option1 = "Not a Number, used to represent errors";
        Myapp.QuestionOption.option2 = "Represents a large number";
        Myapp.QuestionOption.option3 = "Represents infinity";
        Myapp.QuestionOption.option4 = "Represents a non-terminating decimal";
        Myapp.QuestionOption.awnser = 1;
    },
    question9: function(){
        Myapp.QuestionOption.Question = "Which of the following is NOT a valid way to declare a function in JavaScript?";
        Myapp.QuestionOption.option1 = "function myFunction(){}";
        Myapp.QuestionOption.option2 = "var myFunction = function(){};";
        Myapp.QuestionOption.option3 = "() => {}";
        Myapp.QuestionOption.option4 = "const function(){}";
        Myapp.QuestionOption.awnser = 4;
    },
    question10: function(){
        Myapp.QuestionOption.Question = "What is the correct way to write a comment in JavaScript?";
        Myapp.QuestionOption.option1 = "/*This is a comment";
        Myapp.QuestionOption.option2 = "'This is a comment'";
        Myapp.QuestionOption.option3 = " // This is a comment";
        Myapp.QuestionOption.option4 = "/* This is a comment */";
        Myapp.QuestionOption.awnser = 3;
    },
    question11: function(){
        Myapp.QuestionOption.Question = "What is the result of the following expression in JavaScript?<br>3 + 2 + '7'";
        Myapp.QuestionOption.option1 = "'57'";
        Myapp.QuestionOption.option2 = "'327'";
        Myapp.QuestionOption.option3 = "'12'";
        Myapp.QuestionOption.option4 = "'57'";
        Myapp.QuestionOption.awnser = 4;
    },
    question12: function(){
        Myapp.QuestionOption.Question = "How can you check if a variable is an array in JavaScript?";
        Myapp.QuestionOption.option1 = "Using the typeof operator";
        Myapp.QuestionOption.option2 = "'Using the isArray() method'";
        Myapp.QuestionOption.option3 = "Using the isarray() method ";
        Myapp.QuestionOption.option4 = "Using the Array.isArray() method";
        Myapp.QuestionOption.awnser = 4;
    },
    question13: function(){
        Myapp.QuestionOption.Question = "What is the correct way to access the first element of an array in JavaScript?";
        Myapp.QuestionOption.option1 = "array.first";
        Myapp.QuestionOption.option2 = "array[1]";
        Myapp.QuestionOption.option3 = "array.firstElement";
        Myapp.QuestionOption.option4 = "array[0]";
        Myapp.QuestionOption.awnser = 4;
    },
    question14: function(){
        Myapp.QuestionOption.Question = "Which of the following statements is true about JavaScript?";
        Myapp.QuestionOption.option1 = "It is a case-insensitive language";
        Myapp.QuestionOption.option2 = "It requires explicit declaration of data types";
        Myapp.QuestionOption.option3 = "It supports automatic type conversion";
        Myapp.QuestionOption.option4 = "It does not support object-oriented programming";
        Myapp.QuestionOption.awnser = 3;
    },
    question15: function(){
        Myapp.QuestionOption.Question = "What does the '=== operator' do in JavaScript?";
        Myapp.QuestionOption.option1 = "Checks if two values are equal, but doesn't consider their types";
        Myapp.QuestionOption.option2 = "Checks if two values are equal, including their types";
        Myapp.QuestionOption.option3 = "Assigns a value to a variable";
        Myapp.QuestionOption.option4 = "Converts a string to a number";
        Myapp.QuestionOption.awnser = 2;
    },
    question16: function(){
        Myapp.QuestionOption.Question = "What does the 'Math.random()' function in JavaScript return?";
        Myapp.QuestionOption.option1 = "A random integer between 0 and 1";
        Myapp.QuestionOption.option2 = "A random integer between 1 and 100";
        Myapp.QuestionOption.option3 = "A random floating-point number between 0 and 1";
        Myapp.QuestionOption.option4 = "A random floating-point number between 0 and 100";
        Myapp.QuestionOption.awnser = 3;
    },
    question17: function(){
        Myapp.QuestionOption.Question = "How can you convert a string to lowercase in JavaScript?";
        Myapp.QuestionOption.option1 = "str.lowercase()";
        Myapp.QuestionOption.option2 = "str.toLowerCase()";
        Myapp.QuestionOption.option3 = "str.convertToLower()";
        Myapp.QuestionOption.option4 = "str.toLower()";
        Myapp.QuestionOption.awnser = 2;
    },
    question18: function(){
        Myapp.QuestionOption.Question = "Which of the following methods can be used to add a new element to the end of an array in JavaScript?";
        Myapp.QuestionOption.option1 = " push()";
        Myapp.QuestionOption.option2 = "unshift()";
        Myapp.QuestionOption.option3 = "add()";
        Myapp.QuestionOption.option4 = "append()";
        Myapp.QuestionOption.awnser = 1;
    },
    question19: function(){
        Myapp.QuestionOption.Question = "What is the purpose of the 'use strict' directive in JavaScript?";
        Myapp.QuestionOption.option1 = "It indicates that the script should be executed in strict mode";
        Myapp.QuestionOption.option2 = "It enables dynamic typing";
        Myapp.QuestionOption.option3 = "It allows implicit conversion of data types";
        Myapp.QuestionOption.option4 = "It enforces stricter syntax rules";
        Myapp.QuestionOption.awnser = 1;
    },
    question20: function(){
        Myapp.QuestionOption.Question = "Which built-in method removes the last element from an array and returns that element in JavaScript?";
        Myapp.QuestionOption.option1 = "pop()";
        Myapp.QuestionOption.option2 = "shift()";
        Myapp.QuestionOption.option3 = "splice()";
        Myapp.QuestionOption.option4 = "slice()";
        Myapp.QuestionOption.awnser = 1;
    }
    
};

Myapp.Questionslength = function(){
    let len = 0
    for(var i in Questions){
        if(Questions.hasOwnProperty(i)){
            len++;
        }
    }
    return len;     
};

Myapp.func.getQuesttion = function(){
    
    let ques = "question";
    let Qfname = ques + Myapp.Qnumber;
    
    if(Myapp.Qnumber <= Myapp.Questionslength()){
        
        Myapp.dom.Btn.disabled = true;
        Myapp.dom.Btn.style.backgroundColor = '#7DCEA0';
        
        Questions[Qfname]();
        Myapp.Qnumber++;
        Myapp.dom.question.innerHTML = Myapp.QuestionOption.Question;
        Myapp.dom.options[0].innerHTML = Myapp.QuestionOption.option1;
        Myapp.dom.options[1].innerHTML = Myapp.QuestionOption.option2;
        Myapp.dom.options[2].innerHTML = Myapp.QuestionOption.option3;
        Myapp.dom.options[3].innerHTML = Myapp.QuestionOption.option4;
    }
    if(Myapp.QuestionOption.Question.length < 38){
        Myapp.dom.question.style.fontSize = '20px';
    }else if(Myapp.QuestionOption.Question.length > 38 && Myapp.QuestionOption.Question.length < 120){
        Myapp.dom.question.style.fontSize = '18px';
    }else{
        Myapp.dom.question.style.fontSize = '14px';
    }
    if(Myapp.QuestionOption.option1.length > 30 && Myapp.QuestionOption.option1 < 38){
        Myapp.dom.options[0].style.fontSize = '14px';
        Myapp.dom.options[0].style.height = "30px";
    }else if(Myapp.QuestionOption.option1.length > 38){
        Myapp.dom.options[0].style.fontSize = '14px';
        Myapp.dom.options[0].style.height = "40px";
    }else{
        Myapp.dom.options[0].style.height = "30px";
        Myapp.dom.options[0].style.fontSize = '16px';
    }
    if(Myapp.QuestionOption.option2.length > 30 && Myapp.QuestionOption.option2 < 38){
        Myapp.dom.options[1].style.fontSize = '14px';
        Myapp.dom.options[1].style.height = "30px";
    }else if(Myapp.QuestionOption.option2.length > 38){
        Myapp.dom.options[1].style.fontSize = '14px';
        Myapp.dom.options[1].style.height = "40px";
    }else{
        Myapp.dom.options[1].style.height = "30px";
        Myapp.dom.options[1].style.fontSize = '16px';
    }
    if(Myapp.QuestionOption.option3.length > 30 && Myapp.QuestionOption.option3 < 38){
        Myapp.dom.options[2].style.fontSize = '14px';
        Myapp.dom.options[2].style.height = "30px";
    }else if(Myapp.QuestionOption.option3.length > 38){
        Myapp.dom.options[2].style.fontSize = '14px';
        Myapp.dom.options[2].style.height = "40px";
    }else{
        Myapp.dom.options[2].style.height = "30px";
        Myapp.dom.options[2].style.fontSize = '16px';
    }
    if(Myapp.QuestionOption.option4.length > 30 && Myapp.QuestionOption.option4 < 38){
        Myapp.dom.options[3].style.fontSize = '14px';
        Myapp.dom.options[3].style.height = "30px";
    }else if(Myapp.QuestionOption.option4.length > 38){
        Myapp.dom.options[3].style.fontSize = '14px';
        Myapp.dom.options[3].style.height = "40px";
    }else{
        Myapp.dom.options[3].style.fontSize = '16px';
        Myapp.dom.options[3].style.height = "30px";
    }
    console.log(Myapp.QuestionOption.option2.length);
    Myapp.dom.Total.innerHTML = Myapp.QuestionOption.AttemptQuestions + '/'+ Myapp.Questionslength();
    Myapp.func.AddEvents();

};

Myapp.func.SelectOption = function(selected,op1,op2,op3){
    selected.style.backgroundColor = 'rgba(20, 136, 103, 0.2)';
    selected.style.border = '1px solid rgba(20, 136, 103, 1)';
    op1.style.backgroundColor = 'aliceblue';
    op1.style.border = 'none';
    op2.style.backgroundColor = 'aliceblue';
    op2.style.border = 'none';
    op3.style.backgroundColor = 'aliceblue';
    op3.style.border = 'none';
    Myapp.dom.Btn.disabled = false;
    Myapp.dom.Btn.style.backgroundColor = '#1D8348';
    Myapp.dom.Btn.value = "Submit Awnser";
    
};  
Myapp.func.DeselectOption = function(){
    Myapp.dom.options[0].style.backgroundColor = 'aliceblue';
    Myapp.dom.options[1].style.backgroundColor = 'aliceblue';
    Myapp.dom.options[2].style.backgroundColor = 'aliceblue';
    Myapp.dom.options[3].style.backgroundColor = 'aliceblue';
    Myapp.dom.options[0].style.border = 'none';
    Myapp.dom.options[1].style.border = 'none';
    Myapp.dom.options[2].style.border = 'none';
    Myapp.dom.options[3].style.border = 'none';
};

Myapp.second = 30;

Myapp.SetTimer.StartTimer = function(){
    
    let Timevalue = Myapp.second;
    Myapp.dom.Timer.innerHTML = Timevalue;
    if(Myapp.second > 0){
        Myapp.second--;  
    }else if(Myapp.second === 0){
        if(Myapp.QuestionOption.AttemptQuestions < Myapp.Questionslength()){
            Myapp.second = 30;
            Myapp.QuestionOption.AttemptQuestions++;
            Myapp.func.getQuesttion();
            Myapp.func.DeselectOption();
        }else{
            Myapp.func.QuestionEnd();
        }
    }
}

Myapp.SetTimer = setInterval(Myapp.SetTimer.StartTimer,1000);

window.addEventListener("load",Myapp.func.getQuesttion);

Myapp.dom.Btn.addEventListener("click",() => {
    
    if(Myapp.dom.Btn.value === "Submit Awnser"){
        Myapp.func.CheckAwnser(Myapp.QuestionOption.UserAwnser,Myapp.QuestionOption.awnser);
        if(Myapp.Questionslength() === Myapp.QuestionOption.AttemptQuestions){
            Myapp.dom.Btn.value = "Done";
        }else{
            Myapp.dom.Btn.value = "Next";
        }
        Myapp.QuestionOption.AttemptQuestions++;
        Myapp.func.RemoveEvents();
    }else if(Myapp.dom.Btn.value === "Next"){
        if(Myapp.QuestionOption.AttemptQuestions < Myapp.Questionslength() + 1){
            Myapp.func.getQuesttion();
            Myapp.func.DeselectOption();
            Myapp.dom.Btn.value = "Select Option";
            Myapp.second = 30;
        }
    }else if(Myapp.dom.Btn.value === "Done"){
        Myapp.func.QuestionEnd();
    }
});
Myapp.func.QuestionEnd = function(){
    let width = Myapp.dom.wrapper.clientWidth;
    let div = Myapp.dom.result.clientWidth;
    Myapp.dom.container.style.left = '-'+width+'px';
    Myapp.dom.result.style.right = '' + (width / 2) - (div / 2) + 'px';
    Myapp.dom.Obtained.innerHTML = Myapp.QuestionOption.result + '/' + Myapp.Questionslength();
    clearInterval(Myapp.SetTimer);   
}
Myapp.func.CheckAwnser = function(Uans,ans){
    
    if(Uans === ans){
        Myapp.QuestionOption.result++;
        Myapp.dom.options[Uans - 1].style.backgroundColor = "green";
        Myapp.dom.options[Uans - 1].style.border = "none";
    }else if(ans !== Uans){
        Myapp.dom.options[ans - 1].style.backgroundColor = "green";                    
        Myapp.dom.options[Uans - 1].style.backgroundColor = "red";
        Myapp.dom.options[Uans - 1].style.border = "none";
    }
};
Myapp.dom.Trybtn.addEventListener("click",() =>{
    let div = Myapp.dom.result.clientWidth;
    Myapp.dom.container.style.left = '0px';
    Myapp.dom.result.style.right = '-' + div + 'px';
    Myapp.Qnumber = 1;
    Myapp.QuestionOption.AttemptQuestions = 1;
    Myapp.func.getQuesttion();
    Myapp.dom.Btn.value = "Select Option";
    Myapp.func.DeselectOption();
    Myapp.QuestionOption.result = 0;
    let SetTimer = setInterval(Myapp.SetTimer.StartTimer,1000);
});
Myapp.func.Option1Event = function(){
    Myapp.func.SelectOption(Myapp.dom.options[0],Myapp.dom.options[1],Myapp.dom.options[2],Myapp.dom.options[3]);
    Myapp.QuestionOption.UserAwnser = 1;
}
Myapp.func.Option2Event = function(){
    Myapp.func.SelectOption(Myapp.dom.options[1],Myapp.dom.options[0],Myapp.dom.options[2],Myapp.dom.options[3]);
    Myapp.QuestionOption.UserAwnser = 2;
}
Myapp.func.Option3Event = function(){
    Myapp.func.SelectOption(Myapp.dom.options[2],Myapp.dom.options[1],Myapp.dom.options[0],Myapp.dom.options[3]);
    Myapp.QuestionOption.UserAwnser = 3;
}
Myapp.func.Option4Event = function(){
    Myapp.func.SelectOption(Myapp.dom.options[3],Myapp.dom.options[1],Myapp.dom.options[2],Myapp.dom.options[0]);
    Myapp.QuestionOption.UserAwnser = 4;
}
Myapp.func.AddEvents =function(){
    Myapp.dom.options[0].addEventListener("click",Myapp.func.Option1Event,false);
    Myapp.dom.options[1].addEventListener("click",Myapp.func.Option2Event,false);
    Myapp.dom.options[2].addEventListener("click",Myapp.func.Option3Event,false);
    Myapp.dom.options[3].addEventListener("click",Myapp.func.Option4Event,false);
}
Myapp.func.RemoveEvents = function(){
    Myapp.dom.options[0].removeEventListener("click",Myapp.func.Option1Event,false);
    Myapp.dom.options[1].removeEventListener("click",Myapp.func.Option2Event,false);
    Myapp.dom.options[2].removeEventListener("click",Myapp.func.Option3Event,false);
    Myapp.dom.options[3].removeEventListener("click",Myapp.func.Option4Event,false);
}