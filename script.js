function pilkom() {
    const comp = Math.random();

    if (comp < 0.34) {
        return 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        return 'orang';
    } else {
        return 'semut';
    }
}


function getHasil (comp, player) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
    }

 const pGajah = document.querySelector('.gajah');
 pGajah.addEventListener ('click', function(){
 const PilihanComputer = pilkom();
 const pilihanPlayer = pGajah.className;
 const hasil = getHasil (PilihanComputer,pilihanPlayer);


 const imgComputer = document.querySelector ('.img-komputer');
 imgComputer.setAttribute('src', 'img/' + PilihanComputer +'.png');

 const info = document.querySelector('.info');
 info.innerHTML = hasil;

}); 



 const pOrang = document.querySelector('.orang');
 pOrang.addEventListener ('click', function(){
 const PilihanComputer = pilkom();
 const pilihanPlayer = pOrang.className;
 const hasil = getHasil (PilihanComputer,pilihanPlayer);


 const imgComputer = document.querySelector ('.img-komputer');
 imgComputer.setAttribute('src', 'img/' + PilihanComputer +'.png');

 const info = document.querySelector('.info');
 info.innerHTML = hasil;

}); 


 const pSemut = document.querySelector('.semut');
 pSemut.addEventListener ('click', function(){
 const PilihanComputer = pilkom();
 const pilihanPlayer = pSemut.className;
 const hasil = getHasil (PilihanComputer,pilihanPlayer);


 const imgComputer = document.querySelector ('.img-komputer');
 imgComputer.setAttribute('src', 'img/' + PilihanComputer +'.png');

 const info = document.querySelector('.info');
 info.innerHTML = hasil;

}); 



