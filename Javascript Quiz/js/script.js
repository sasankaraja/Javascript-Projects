//alert('hi);


function submitAnswers(){
    var total = 5;
    var score = 0;


    // get User input

    var q1 = document.forms["QuizForm"]["q1"].value;
    var q2 = document.forms["QuizForm"]["q2"].value;
    var q3 = document.forms["QuizForm"]["q3"].value;
    var q4 = document.forms["QuizForm"]["q4"].value;
    var q5 = document.forms["QuizForm"]["q5"].value;

    // validation




    for(i = 1; i <= total; i++){
        if(eval('q'+i) == null || eval('q'+i) == ''){
            alert('You missed the question:' + i );
            return false;
        }
    }



    // set Correct Answers 

    var answers = ["b","a","d","b","d"];

    // check Answers

    for(i = 1; i <= total; i++){
        if( eval('q'+i) == answers[i]){
            score++;
        }

    }

    // Display Results
    var results = document.getElementById('results');
    results.innerHTML = '<h3> You scored <span>' + score +'</span> out of <span>' + total + '</span>' ;
    
    //alert('you scored' + score + 'out of' + total);

    return false;
}
