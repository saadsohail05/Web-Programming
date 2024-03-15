$(document).ready(function() {
    const result = $('#result');
    const userdisplay = $('#userlabel');
    const computerdisplay = $('#cpulabel');
    const buttons = $('.btn');
    const usercount = $('#userscore');
    const computercount = $('#cpuscore');

    let userchoice;
    let usercurrentcounter = 0;
    let computerchoice;
    let computercurrentcounter = 0;
    let resulttext;

    buttons.click(function(e) {
        userchoice = e.target.id;
        if (userchoice === 'rock') {
            $('#userImage').attr("src", "./rock.png");
        }
        if (userchoice === 'paper') {
            $('#userImage').attr("src", "./paper.png");
        }
        if (userchoice === 'scissors') {
            $('#userImage').attr("src", "./scissors.png");
        }
        generatecomputerchoice();
        getResult();
    });

    function generatecomputerchoice() {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        if (randomNumber === 1) {
            computerchoice = 'rock';
            $('#computerImage').attr("src", "./rock.png");
        } else if (randomNumber === 2) {
            computerchoice = 'paper';
            $('#computerImage').attr("src", "./paper.png");
        } else {
            computerchoice = 'scissors';
            $('#computerImage').attr("src", "./scissors.png");
        }
    }

    function getResult() {
        if (userchoice == computerchoice) {
            resulttext = 'Draw !';
        } else if ((userchoice == 'rock' && computerchoice == 'scissors') ||
            (userchoice == 'paper' && computerchoice == 'rock') ||
            (userchoice == 'scissors' && computerchoice == 'paper')) {
            resulttext = 'You Win !';
            usercurrentcounter++;
            usercount.text(usercurrentcounter);
        } else {
            resulttext = 'You Lose !';
            computercurrentcounter++;
            computercount.text(computercurrentcounter);
        }
        result.text(resulttext);
    }

    $('#reset').click(function(e) {
        usercurrentcounter = 0;
        usercount.text(usercurrentcounter);
        $('#userImage').attr("src", "./user.png");
        userdisplay.text('USER');

        computercurrentcounter = 0;
        computercount.text(computercurrentcounter);
        $('#computerImage').attr("src", "./computer.png");
        computerdisplay.text('CPU');

        resulttext = '';
        result.text(resulttext);
    });
});
