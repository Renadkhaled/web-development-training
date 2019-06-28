 var b = 0;
 var numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
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

 function drag(event, number) {
     if (number == "one") {
         event.dataTransfer.setData(number, event.target.id);
     } else if (number == "two") {
         event.dataTransfer.setData(number, event.target.id);

     } else if (number == "three") {
         event.dataTransfer.setData(number, event.target.id);

     } else if (number == "four") {
         event.dataTransfer.setData(number, event.target.id);

     } else if (number == "five") {
         event.dataTransfer.setData(number, event.target.id);

     } else if (number == "six") {
         event.dataTransfer.setData(number, event.target.id);

     } else if (number == "seven") {
         event.dataTransfer.setData(number, event.target.id);

     } else if (number == "eight") {
         event.dataTransfer.setData(number, event.target.id);

     } else if (number == "nine") {
         event.dataTransfer.setData(number, event.target.id);

     } else if (number == "ten") {
         event.dataTransfer.setData(number, event.target.id);
     }

 }



 function drag1(event) {
     event.dataTransfer.setData("one", event.target.id);

 }

 function drop1(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("one");
     event.target.appendChild(document.getElementById(data));
     score01.innerHTML = b++;
     document.getElementById(data).innerHTML = "";
     event.target.style.background = "#FD0100";
     div1.style.background = "#067C07";
     TestWinner(b, event);
 }
 //---------------------------------------------------------


 function drag2(event) {
     event.dataTransfer.setData("two", event.target.id);
 }

 function drop2(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("two");
     event.target.appendChild(document.getElementById(data));
     two.innerHTML = "2";
     score01.innerHTML = b++;
     event.target.style.background = "#9E2D2E";
     div2.style.background = "#067C07";
     TestWinner(b, event);
 }
 //------------------------------------------------------------


 function drag3(event) {
     event.dataTransfer.setData("three", event.target.id);
 }

 function drop3(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("three");
     event.target.appendChild(document.getElementById(data));
     three.innerHTML = "3";
     score01.innerHTML = b++;
     event.target.style.background = "#FFA203";
     div3.style.background = "#067C07";

     TestWinner(b, event);
 }
 //---------------------------------------------------------


 function drag4(event) {
     event.dataTransfer.setData("four", event.target.id);
 }

 function drop4(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("four");
     event.target.appendChild(document.getElementById(data));
     four.innerHTML = "4";
     score01.innerHTML = b++;
     event.target.style.background = "#FFFC05";
     div4.style.background = "#067C07";

     TestWinner(b, event);
 }
 //---------------------------------------------------------

 function drag5(event) {
     event.dataTransfer.setData("five", event.target.id);
 }

 function drop5(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("five");
     event.target.appendChild(document.getElementById(data));
     five.innerHTML = "5";
     score01.innerHTML = b++;
     event.target.style.background = "#008002";
     div5.style.background = "#067C07";

     TestWinner(b, event);
 }
 //------------------------------------------------------

 function drag6(event) {
     event.dataTransfer.setData("six", event.target.id);
 }

 function drop6(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("six");
     event.target.appendChild(document.getElementById(data));
     six.innerHTML = "6";
     score01.innerHTML = b++;
     event.target.style.background = "#04FDFC";
     div6.style.background = "#067C07";

     TestWinner(b, event);
 }
 //------------------------------------------------------


 function drag7(event) {
     event.dataTransfer.setData("seven", event.target.id);
 }

 function drop7(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("seven");
     event.target.appendChild(document.getElementById(data));
     seven.innerHTML = "7";
     score01.innerHTML = b++;
     event.target.style.background = "#0200FC";
     div7.style.background = "#067C07";

     TestWinner(b, event);
 }
 //------------------------------------------------------


 function drag8(event) {
     event.dataTransfer.setData("eight", event.target.id);
 }

 function drop8(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("eight");
     event.target.appendChild(document.getElementById(data));
     eight.innerHTML = "8";
     score01.innerHTML = b++;
     event.target.style.background = "#40067E";
     div8.style.background = "#067C07";

     TestWinner(b, event);
 }
 //------------------------------------------------------


 function drag9(event) {
     event.dataTransfer.setData("nine", event.target.id);
 }

 function drop9(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("nine");
     event.target.appendChild(document.getElementById(data));
     nine.innerHTML = "9";
     score01.innerHTML = b++;
     event.target.style.background = "#7F017F";
     div9.style.background = "#067C07";

     TestWinner(b, event);
 }
 //------------------------------------------------------

 function drag10(event) {
     event.dataTransfer.setData("ten", event.target.id);
 }

 function drop10(event) {
     event.preventDefault();
     var data = event.dataTransfer.getData("ten");
     event.target.appendChild(document.getElementById(data));

     ten.innerHTML = "10";
     score01.innerHTML = b++;
     event.target.style.background = "#EE82F0";
     div10.style.background = "#067C07";

     TestWinner(b, event);
 }
 //------------------------------------------------------