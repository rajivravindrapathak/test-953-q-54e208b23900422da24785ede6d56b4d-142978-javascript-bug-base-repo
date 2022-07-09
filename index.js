

const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!']
 for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
   //For each of our buttons when the user clicks it... 
   document.getElementById(`btn-${btnNum}`).onclick = () => {
     //Tell her what she's won!
     document.getElementById("prize").innerHTML = prizes[btnNum];
   }
 }
