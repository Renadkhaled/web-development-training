 var b = 0;
 b++;
 //-------------------------------------------------------------
 function TestWinner(valid, event) {
     console.log(valid)
     event.target.style.color = "black";

     if (valid == 11) {
         setTimeout('alert(" congratulation you are Winner ^_^");', 2);


     }
 }
 //-------------------------------------------------------------

 function allowDrop(event) {
     event.preventDefault();

 }

 function drag(event) {
     event.dataTransfer.setData("t", event.target.id);

 }

 function drop1(event) {
     event.preventDefault(event.target.id);
     var data = event.dataTransfer.getData("t");
     event.target.appendChild(document.getElementById(data));
     score01.innerHTML = b++;
     one.innerHTML = "1";
     event.target.style.background = "#FD0100";
     div1.style.background = "#067C07";
     TestWinner(b, event);
 }
 //---------------------------------------------------------



 function drop2(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("t");
     event.target.appendChild(document.getElementById(data));
     two.innerHTML = "2";
     score01.innerHTML = b++;
     event.target.style.background = "#9E2D2E";
     div2.style.background = "#067C07";
     TestWinner(b, event);
 }
 //------------------------------------------------------------


 function drop3(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("t");
     event.target.appendChild(document.getElementById(data));
     three.innerHTML = "3";
     score01.innerHTML = b++;
     event.target.style.background = "#FFA203";
     div3.style.background = "#067C07";

     TestWinner(b, event);
 }
 //---------------------------------------------------------


 function drop4(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("t");
     event.target.appendChild(document.getElementById(data));
     four.innerHTML = "4";
     score01.innerHTML = b++;
     event.target.style.background = "#FFFC05";
     div4.style.background = "#067C07";

     TestWinner(b, event);
 }
 //---------------------------------------------------------


 function drop5(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("t");
     event.target.appendChild(document.getElementById(data));
     five.innerHTML = "5";
     score01.innerHTML = b++;
     event.target.style.background = "#008002";
     div5.style.background = "#067C07";

     TestWinner(b, event);
 }
 //------------------------------------------------------

 function drop6(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("t");
     event.target.appendChild(document.getElementById(data));
     six.innerHTML = "6";
     score01.innerHTML = b++;
     event.target.style.background = "#04FDFC";
     div6.style.background = "#067C07";

     TestWinner(b, event);
 }
 //------------------------------------------------------


 function drop7(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("t");
     event.target.appendChild(document.getElementById(data));
     seven.innerHTML = "7";
     score01.innerHTML = b++;
     event.target.style.background = "#0200FC";
     div7.style.background = "#067C07";

     TestWinner(b, event);
 }
 //------------------------------------------------------


 function drop8(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("t");
     event.target.appendChild(document.getElementById(data));
     eight.innerHTML = "8";
     score01.innerHTML = b++;
     event.target.style.background = "#40067E";
     div8.style.background = "#067C07";

     TestWinner(b, event);
 }
 //------------------------------------------------------

 function drop9(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("t");
     event.target.appendChild(document.getElementById(data));
     nine.innerHTML = "9";
     score01.innerHTML = b++;
     event.target.style.background = "#7F017F";
     div9.style.background = "#067C07";

     TestWinner(b, event);
 }
 //------------------------------------------------------

 function drop10(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("t");
     event.target.appendChild(document.getElementById(data));

     ten.innerHTML = "10";
     score01.innerHTML = b++;
     event.target.style.background = "#EE82F0";
     div10.style.background = "#067C07";

     TestWinner(b, event);
 }
 //------------------------------------------------------
