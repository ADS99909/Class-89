function adduser(){
    player1_name=document.getElementById("player_1_name").value;
    player2_name=document.getElementById("player_2_name").value;
    localStorage.setItem("player_1_name",player1_name);
    localStorage.setItem("player_2_name",player2_name);
    window.location="game_page.html";
}