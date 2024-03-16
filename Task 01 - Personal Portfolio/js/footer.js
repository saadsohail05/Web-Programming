
var lines = new Array(
'Assembled in Pakistan',
'Tested electronically',
'Tested on humans',
'Support indie developers',
'Handcrafted websites rule',
'Say no to web tracking',
'Beautiful things are done with love',
'Recycle your litter',
'Eat less sugar',
'The truth is out there',
'Live a sustainable life',
'Contains no <small class="small">AI</span>', );

function randomize(phrase)
{ var duplicate = phrase[Math.round(Math.random()*(phrase.length-1))];
document.getElementById('punch').innerHTML=(duplicate); }

function phrases() { randomize(lines); }
phrases();

document.getElementById('curry').innerHTML=('<span>2020 ⋯ </span>' +new Date().getFullYear());