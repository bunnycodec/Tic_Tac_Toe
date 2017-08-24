
$(document).ready(function() {
    const box = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    var PLAYER = "X";
    $("#register, table, #restart").hide();
    var PLAY1="",PLAY2="",active="";
    function isGameOver() {

        if(box[0]!==" " && box[0]===box[3] && box[3]===box[6])
            return true;
        else if(box[1]!==" " && box[1]===box[4] && box[4]===box[7])
            return true;
        else if(box[2]!==" " && box[2]===box[5] && box[5]===box[8])
            return true;
        else if(box[0]!==" " && box[0]===box[1] && box[1]===box[2])
            return true;
        else if(box[3]!==" " && box[3]===box[4] && box[4]===box[5])
            return true;
        else if(box[6]!==" " && box[6]===box[7] && box[7]===box[8])
            return true;
        else if(box[0]!==" " && box[0]===box[4] && box[4]===box[8])
            return true;
        else if(box[2]!==" " && box[2]===box[4] && box[4]===box[6])
            return true;

        return false;
    }

    $('#result').click(function() {
        $("#register").toggle('slow');
    });

    $('.col').click(function() {
        const i = $(this).data('i');
        box[i] = PLAYER;

        if(isGameOver() === true && PLAYER!==" "){
            $(this).html(PLAYER);
            if(PLAYER === "X")
                $("#result").html("Winner is "+PLAY1);
            else
                $("#result").html("Winner is "+PLAY2);
            PLAYER=" ";
        }
        else if(PLAYER!==" "){
            if(PLAYER === "Y")
                $("#result").html("Your Turn ... "+PLAY1);
            else
                $("#result").html("Your Turn ... "+PLAY2);
            if(box.indexOf(" ")===-1){
                $(this).html(PLAYER);
                PLAYER=" ";
                $("#result").html("The Game is a Tie");
            }
            else{
                if(PLAYER === "Y")
                    $("#result").html("Your Turn ... "+PLAY1);
                else
                    $("#result").html("Your Turn ... "+PLAY2);
                $(this).html(PLAYER);
                if(PLAYER === "X")
                    PLAYER = "Y";
                else
                    PLAYER = "X";
            }
        }
    });

    $('#submit').click(function() {
        PLAY1= document.getElementById('play1').value;
        PLAY2= document.getElementById('play2').value;
        $("#result").html("Your Turn ... "+PLAY1);
        active = PLAY1;
        $("#register").hide(1000);
        $("#restart, table").toggle('slow');
    });

    $('#restart').click(function() {
        for(var i=0; i < 9; i++){
            box[i]= " ";
            $('.col[data-i='+i+']').html(' ');
            PLAYER = "X";
        }
        if(active === PLAY1){
            active = PLAY2;
            $("#result").html("Your Turn ... "+PLAY2);
            PLAYER= "Y";
        }
        else{
            active = PLAY1;
            $("#result").html("Your Turn ... "+PLAY1);
        }
    });

});

//    
//    function moveAI(){
//        for(var i=0; i < 9; i++)
//            {
//                if(box[i]=== " ")
//                    return i: i;
//            }
//        return null;
//    }