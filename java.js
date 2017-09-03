$(document).ready(function () {
    const box = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    var PLAYER = "X";
    $("#twoPlayer, #choose, table, #restart, #reset, #onePlayer").hide();
    var PLAY1 = "", PLAY2 = "", active = "", flag=1;

    function isGameOver() {

        if (box[0] !== " " && box[0] === box[3] && box[3] === box[6])
            return true;
        else if (box[1] !== " " && box[1] === box[4] && box[4] === box[7])
            return true;
        else if (box[2] !== " " && box[2] === box[5] && box[5] === box[8])
            return true;
        else if (box[0] !== " " && box[0] === box[1] && box[1] === box[2])
            return true;
        else if (box[3] !== " " && box[3] === box[4] && box[4] === box[5])
            return true;
        else if (box[6] !== " " && box[6] === box[7] && box[7] === box[8])
            return true;
        else if (box[0] !== " " && box[0] === box[4] && box[4] === box[8])
            return true;
        else if (box[2] !== " " && box[2] === box[4] && box[4] === box[6])
            return true;

        return false;
    }

    $('#result').click(function () {
        $("#choose").toggle('slow');
    });

    $('.col').click(function () {
        if(box[$(this).data("i")] === " "){
            box[$(this).data('i')] = PLAYER;
            console.log($(this).data("i"));

            if(flag === 1 && PLAYER !== " "){
                var spots = availableSpots(box);
                $(this).html(PLAYER);
                gameOver("A");
                if(spots.length === 0 && PLAYER !== " "){
                    PLAYER = " ";
                    $("#result").html("The Game is a Tie");
                }
                if(PLAYER !== " "){
                    var n = spots[Math.floor(Math.random()*spots.length)];
                    box[n] = "O";
                    $('.col[data-i=' + n + ']').html("O");
                    gameOver("B");
                }
            }
            else{
                if (isGameOver() === true && PLAYER !== " ") {
                    $(this).html(PLAYER);
                    if (PLAYER === "X")
                        $("#result").html("Winner is " + PLAY1);
                    else
                        $("#result").html("Winner is " + PLAY2);
                    PLAYER = " ";
                } else if (PLAYER !== " ") {
                    if (PLAYER === "O")
                        $("#result").html("Your Turn ... " + PLAY1);
                    else
                        $("#result").html("Your Turn ... " + PLAY2);
                    if (box.indexOf(" ") === -1) {
                        $(this).html(PLAYER);
                        PLAYER = " ";
                        $("#result").html("The Game is a Tie");
                    } else {
                        if (PLAYER === "O")
                            $("#result").html("Your Turn ... " + PLAY1);
                        else
                            $("#result").html("Your Turn ... " + PLAY2);
                        $(this).html(PLAYER);
                        if (PLAYER === "X")
                            PLAYER = "O";
                        else
                            PLAYER = "X";
                    }
                }
            }
        }
    });

    function availableSpots(Board){
        var x=[], c=0;
        for(var i=0; i< Board.length; i++)
            if(Board[i] === " ")
                x[c++] = i;
        return x;
    }

    $('#submit1').click(function () {
        PLAY1 = document.getElementById('play01').value;
        $("#result").html("Your Turn ... " + PLAY1);
        $("#onePlayer").hide(1000);
        $("#restart, table, #reset").show(1000);
    });

    $('#submit2').click(function () {
        PLAY1 = document.getElementById('play1').value;
        PLAY2 = document.getElementById('play2').value;
        $("#result").html("Your Turn ... " + PLAY1);
        active = PLAY1;
        $("#twoPlayer").hide(1000);
        $("#restart, table, #reset").show(1000);
    });

    $('#Player2').click(function () {
        $("#twoPlayer").show('slow');
        $("#choose").hide('slow');
        flag = 2;
    });

    $('#Player1').click(function () {
        $("#onePlayer").show('slow');
        $("#choose").hide('slow');
        flag = 1;
    });

    $('#restart').click(function () {
        //        if(flag === 1){
        //            if(PLAYER === "X")
        //                PLAYER = "Y";
        //            else
        //                PLAYER = "X";
        //        }
        for (var i = 0; i < 9; i++) {
            box[i] = " ";
            $('.col[data-i=' + i + ']').html(' ');
            PLAYER = "X";
        }
        if (active === PLAY1 && flag === 2) {
            active = PLAY2;
            $("#result").html("Your Turn ... " + PLAY2);
            PLAYER = "O";
        } else {
            active = PLAY1;
            $("#result").html("Your Turn ... " + PLAY1);
        }
    });

    $('#reset').click(function () {
        $("#twoPlayer, #choose, table, #restart, #reset").hide('slow');
        $("#result").html(" Click Me to Start ..... ");
        for (var i = 0; i < 9; i++) {
            box[i] = " ";
            $('.col[data-i=' + i + ']').html(' ');
            PLAYER = "X";
        }
    });

    function gameOver(data) {
        if (isGameOver() === true && PLAYER !== " ") {
            if (data === "A")
                $("#result").html("You Won ... " + PLAY1);
            else
                $("#result").html("You Lost ... " + PLAY1);
            PLAYER = " ";
        }
    }

});

