const output = document.querySelector('.output');
const inputYou = document.querySelector('.input-you');
const inputPC = document.querySelector('.input-pc');
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', buttonClick));

function buttonClick(){
	const player = this.innerHTML;
	const PC = buttons[Math.floor(Math.random() * 3)].innerHTML;

	inputYou.innerHTML = `You - ${player}`;
	inputPC.innerHTML = `PC - ${PC}`;


	if(player === PC) output.innerHTML = `It's a draw`;

	if(player === 'Rock' && PC === 'Scissors') output.innerHTML = 'You Won!';
	if(player === 'Rock' && PC === 'Papper') output.innerHTML = 'Try again!)';

	if(player === 'Scissors' && PC === 'Rock') output.innerHTML = 'Try again!)';
	if(player === 'Scissors' && PC === 'Papper') output.innerHTML = 'You Won!';

	if(player === 'Papper' && PC === 'Rock') output.innerHTML = 'You Won!';
	if(player === 'Papper' && PC === 'Scissors') output.innerHTML = 'Try again!';

	


	console.log(player, PC);
}
