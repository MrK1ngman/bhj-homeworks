function getHole(index) {
	return document.getElementById(`hole${index}`);
}
for(let i = 1; i < 10; i++) {
    getHole(i).onclick = function() {
        if(this.classList.contains( 'hole_has-mole' )) {
            document.getElementById('dead').textContent++;
        } else {
            document.getElementById('lost').textContent++;
        }
        if(document.getElementById('dead').textContent == 10) {
            alert('Вы победили!');
        } else if (document.getElementById('lost').textContent == 5) {
            alert('Вы проиграли!');
        }
    }
   
}
