player1_name=localStorage.getItem("player_1_name");
player2_name=localStorage.getItem("player_2_name");

player1_score=0;
player2_score=0;

document.getElementById("player_1_name").innerHTML=player1_name+":";
document.getElementById("player_2_name").innerHTML=player2_name+":";

document.getElementById("player_1_score").innerHTML=player1_score;
document.getElementById("player_2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question-Turn="+player1_name;
document.getElementById("player_answer").innerHTML="Answer-Turn="+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    c1=word.charAt(1);
    console.log(c1);

    l1=Math.floor(word.length/2);
    c2=word.charAt(l1);
    console.log(c2);

    p1=word.length-1;
    c3=word.charAt(p1);
    console.log(c3);

    r1=word.replace(c1,"_");
    r2=r1.replace(c2,"_");
    r3=r2.replace(c3,"_");
    console.log(r3);

    q1="<h4 id='word_display'>Q."+r3+"</h4>";
    i1="<br>Answer:<input type='text' id='check'>;"
    b1="<br><br><button class='btn btn-danger' onclick='check()'>Check</button>";

    row=q1+i1+b1;
    document.getElementById("output").innerHTML=row;

    document.getElementById("word").value="";

}
question_turn="player_1";
answer_turn="player_2";
function check(){
    get_answer=document.getElementById("check").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case-"+answer);

    if(answer == word){
        if(answer_turn=="player_1"){
            player1_score=player1_score+1;
            document.getElementById("player_1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player_2_score").innerHTML=player2_score;
        }

    }

    if(question_turn=="player_1"){
        question_turn="player_2";
        document.getElementById("player_question").innerHTML="Question Turn-"+player2_name;

    }
    else{
        question_turn="player_1";
        document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;

    }
    if(answer_turn=="player_1"){
        answer_turn="player_2";
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;

    }
    else{
        answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player1_name;

    }
    document.getElementById("output").innerHTML="";

}