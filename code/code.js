let smartPeople = ["Marshalino", "Shane", "Monique", " Emile", "Saleem", "Taucia", "Joshua", "Raees"];

  var ul = document.createElement("ul");

  document.getElementById("list1").appendChild(ul);
  
  smartPeople.forEach(function (name) {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += name;
  });