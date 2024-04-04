let sira="X";
function Oyun(id)
{
  let tiklanan = document.getElementById(id);


  if(sira=="X")
  {
    tiklanan.value="X";
    sira="O";
  }
  else
  {
    tiklanan.value="O";
    sira="X";
  }

}
