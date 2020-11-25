let askButton = document.getElementById('myButton');
let text1 = document.getElementById('answer');
askButton.addEventListener('click', function(){
  
 let text = document.getElementById('question').value.toLowerCase();
 let question = document.createElement('p');
 question.innerText=text;
 text1.appendChild(question);
let botAnswer=document.createElement('div');
 text1.appendChild(botAnswer);
 text.includes('love') ? botAnswer.innerText = 'Alex River love Coraline' : (text.includes('alex river')? botAnswer.innerText ='Soundcloud: Alex River' : botAnswer.innerText ='try again..' );
})
