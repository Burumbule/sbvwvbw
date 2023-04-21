export const createCardsArray = (difficult)=>{
	const cardsArray = [
		"type1",
		"type2",
		"type3",
		"type4",
		"type5",
		"type6",
		"type7",
		"type8"
	];
	switch (difficult){
		case "лёгкий":
			return cardsArray.slice(0,4);
			break;
		case "средний":
			return cardsArray.slice(0,6);
			break;
		case "сложный":
			return cardsArray;
			break;

	}
}

export const dublicateArray = (Array) =>{
	return Array.reduce((res, current)=>res.concat([current, current]),[]);
}
export const shuffle = (Array) =>{
	for(let i=0; i<Array.length; i++){
		let randomIndex=Math.floor(Math.random()*Array.length);
		[Array[i],Array[randomIndex]]=[Array[randomIndex], Array[i]];
	}
	return Array;
}