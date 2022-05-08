const count = 0;

document.querySelectorAll('.sqdOP.L3NKy.y3zKF').forEach((item, index) => {
  setTimeout(() => {
		if(!item.classList.contains('.L3NKy')){
        	item.click();
        	count++;
			console.log(`Seu BOT já seguiu ${count} pessoa(s)!`);
		} else { 
			console.log('Você já está seguindo esse perfil.');
    }
  }, index * 20000);
});