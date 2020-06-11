
window.onload = function() {
  dt = new Date();
  document.getElementById("dateTime").innerHTML= dt;
};

var value = "";
var ans = "";

function replaceComma(temp){
  return temp.replace(/\,/g , "");
}

function solution(){
  ans = eval(value);
 if (ans == undefined){
   ans=0;
 }
  document.getElementById("answer").innerHTML = ans;
}

function on_clear(){
  value = "";
  document.getElementById("equation").innerHTML = value;
  ans = "0";
  document.getElementById("answer").innerHTML = ans;
}

function displayIn(ch){
  var last = value.length - 1;
  var arr = value.split("");
  if((value[last] == "+" || value[last] == "-" || value[last] == "*" || value[last] == "/") && (ch == "+" || ch == "-" || ch == "*" || ch == "/")){

    arr[last] = ch;
    var temp = arr.toString();
    value = replaceComma(temp);
    document.getElementById("equation").innerHTML = value;
  }
  else if (ch == "<-"){
    arr[last] = "";
    var temp1 = arr.toString();
    value = replaceComma(temp1);
    document.getElementById("equation").innerHTML = value;
  }

  else{
    value += ch ;
    document.getElementById("equation").innerHTML = value;
  }
  solution();
}

function myFunc(id){

  if (id == "kotlin"){
    window.open("https://kotlinlang.org/", "_blank");
  }

  if (id == "python"){
    window.open("https://www.python.org/", "_blank");
  }

  if (id == "C++"){
    window.open("https://isocpp.org/", "_blank");
  }

  if (id == "C"){
    window.open("https://www.cprogramming.com/", "_blank");
  }

  if (id == "html"){
    window.open("https://html.com/", "_blank");
  }

  if (id == "CSS"){
    window.open("https://www.w3.org/Style/CSS/Overview.en.html", "_blank");
  }

  if (id == "bootstrap"){
    window.open("https://getbootstrap.com/", "_blank");
  }
}
