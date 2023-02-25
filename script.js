let start_btn=document.querySelector(".start_quiz");
let  quiz_box=document.querySelector(".quiz-box");
let que_text=document.querySelector(".que_text");
let  options_box=document.querySelector(".options");
let next_btn=document.querySelector(".next-btn");
let total_q=document.querySelector(".quiz-footer .total_que");
let count_que=document.querySelector(".quiz-footer .count_que");
  let result_box=document.querySelector(".result-box");

  let total_que_r=document.querySelector(".total-que span");
  let right_ans_r =document.querySelector(".result .right-ans span ");
  let   wrong_ans_r=document.querySelector(".result .wrong-ans span");
   
  let  percentage=document.querySelector(".result .percentage span");
  let again_quiz=document.querySelector(".result-footer .again-quiz");
  let exit= document.querySelector(".result-footer .exit");
var questions = [{
    num: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Multiple Language",
      "Hyper Text Preprocessor",
      "Hyper Tool Multi Language",
      "Hyper Text Markup Language"
    ]
  },
  {
    num: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Computer Style Sheet",
      "Cascading Style Sheet",
      "Colorful Style Sheet",
      "Common Style Sheet"
    ]
  },
  {
    num: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hometext Preprocessor",
      "Hypertext Preprogramming"
    ]
  },

  {
    num: 4,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXTra Multi-Program Language",
      "eXecutable Multiple Language",
      "eXtensible Markup Language",
      "eXamine Multiple Language"
    ]
  },
  {
    num: 5,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Statement Question Language",
      "Stylesheet Query Language",
      "Stylish Question Language",
      "Structured Query Language"
    ]
  },
];

/////////////////////for getting questions page //////////////////
start_btn.onclick=()=>{
    quiz_box.classList.remove("inactive");
     start_btn.classList.add("inactive");
}

total_q.innerText=questions.length;


 let  que_index=0;
 let right_answers=0;
 let wrong_answers=0;

 count_que.innerText=que_index+1;

ShowQuestion(que_index);//calling show function

function ShowQuestion(q_index){

//////////////////////for numbering questions and seting question on top;////////////////////
que_text.innerHTML =questions[que_index].num+"."+ questions[que_index].question;

////////////////////////for options setting ///////////////////////////////////////////
var option_statement="";
 for(let i=0;i<questions[q_index].options.length;i++){
    option_statement +=`<div class="option">${questions[q_index].options[i]}</div>`;
 }
options_box.innerHTML=option_statement;


//////////////////////////////for confirmations right and wrong ans/////////////    

options_box.innerHTML=option_statement;
var AllOptions=options_box.querySelectorAll(".option");
for( var j=0;j<AllOptions.length;j++){
    AllOptions[j].setAttribute("onClick","UserAnswer(this)");

}
next_btn.classList.add("inactive");// after pressing next button  ,  inactive  props will activated  
}


// onclicking next button we get new question section  from this code . 

next_btn.onclick=()=>{
    que_index++;
   if(questions.length>que_index){ 
    count_que.innerText=que_index+1;// this code use for getting next question number in footer 
    ShowQuestion(que_index);
   }else{
    console.log("Question Completed ");
    quiz_box.classList.add("inactive");
    result_box.classList.remove("inactive");

     right_ans_r.innerHTML=`${right_answers}`;// for writting right ans in Result  box 

         wrong_ans_r.innerHTML=`${wrong_answers}`;
       
   }
   
      if(questions.length-1==que_index){
        next_btn.innerText="Finish";
      }
}

///////////// for checking onclicking input  box content same as Answer  yes or no/////////

function UserAnswer(answer){
    let userAns=answer.innerText;

    let correctAns=questions[que_index].answer;
    var AllOptions2=options_box.querySelectorAll(".option");
    
      
    next_btn.classList.remove("inactive");// for showing next button after selecting option


    /*for adding color in input box for right and wrong answer */
    if(userAns==correctAns){
        console.log("%c right Answer","color:green");
        answer.classList.add("correct");
        right_answers++;

        console.log( right_answers);
       
       
          
    }else{
        console.log("%c wrong Answer","color:red");
        answer.classList.add("incorrect");

        wrong_answers++;
       console.log(wrong_answers);
       // if we selecting wrong option then its shows right answer also with wrong 
        for( var i=0;i<AllOptions2.length;i++){
            if(AllOptions2[i].innerHTML==correctAns){
            AllOptions2[i].classList.add("correct");
            // answer.insertAdjacentHTML("beforeend",mark_check);
           
            }
        }

    }

/*for disabled input box after selection an options */
   
for( var j=0;j<AllOptions2.length;j++){
    AllOptions2[j].classList.add("disabled");

}
}


/// for stating first  quiz box page 

again_quiz.onclick=()=>{
  quiz_box.classList.remove("inactive");
  result_box.classList.add("inactive");
  que_index=0;
  right_answers=0;
  wrong_answers=0;
  next_btn.innerText="Next Question";
  count_que.innerText=que_index+1;
  ShowQuestion(que_index);

}

exit.onclick=()=>{
  start_btn.classList.add("inactive");
  result_box.classList.remove("inactive");

  result_box.innerHTML=`<h1 class ="exit_page">Your Quiz Submitted</h1>`;
   
      // reset();

}

function reset(){
  que_index=0;
  right_answers=0;
  wrong_answers=0;
  count_que.innerText=que_index+1;
  ShowQuestion(que_index);

}




next_btn.onclick=()=>{
  que_index++;
 if(questions.length>que_index){ 
  count_que.innerText=que_index+1;// this code use for getting next question number in footer 
  ShowQuestion(que_index);
 }else{
  console.log("Question Completed ");
  quiz_box.classList.add("inactive");
  result_box.classList.remove("inactive");

   right_ans_r.innerHTML=right_answers;// for writting right ans in Result  box 

   wrong_ans_r.innerHTML=wrong_answers;

   percentage.innerHTML=`${(right_answers*100)/questions.length}%`;
   total_que_r.innerHTML=`${questions.length}`;

     
 }
 
    if(questions.length-1==que_index){
      next_btn.innerText="Finish";
    }
}