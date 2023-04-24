import { startGame } from "./startgame.js"

export let flagWin = false;

export const createGameMenu = (flag) => {
	const btnPrev = document.querySelector(".header__btn-prev");
	btnPrev.style.display = 'none';


	const score = document.querySelector('.score');
	let s1 = Number(score.textContent);
	score.style.display = 'none';

	const bestScore = document.querySelector('.best_score');
	if (bestScore.textContent == '') {
		bestScore.style.visibility = 'hidden';
		bestScore.textContent = 'РЕКОРД: 1000000';
	}
	else {
		if (Number(bestScore.textContent.slice(8, bestScore.textContent.length)) > s1 && flag) {
			bestScore.textContent = `РЕКОРД: ${s1}`;
			bestScore.style.visibility = 'visible';

		}
	}

	const title = document.createElement("h2");
	title.classList.add("game-menu__title");
	const gameSection = document.querySelector(".game-section__conteiner");
	gameSection.innerHTML = "";

	title.textContent = "СЛОЖНОСТЬ ИГРЫ";

	const createMenuButton = (difficulty) => {
		const button = document.createElement("button");
		button.classList.add("game-menu__btn");
		if (difficulty == 1) difficulty = "лёгкий";
		else if (difficulty == 2) difficulty = "средний";
		else if (difficulty == 3) difficulty = "сложный";
		button.textContent = difficulty;
		button.addEventListener("click", () => startGame(difficulty));
		return button;
	}

	gameSection.append(
		title,
		createMenuButton(1),
		createMenuButton(2),
		createMenuButton(3)
	);
}