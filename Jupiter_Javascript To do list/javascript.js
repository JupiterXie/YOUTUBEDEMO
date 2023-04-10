function clickTest() {
  var inputText = document.getElementById("form-control").value;
  var outputDiv = document.getElementById("output_area");
  var newItem = document.createElement("li");
  newItem.innerText = inputText;
  newItem.style.backgroundColor = "#fff";
  newItem.style.marginTop = "8px";
  newItem.style.padding = "5px";
  outputDiv.appendChild(newItem);
  const animal = document.querySelector('.dog');
        console.log(animal.dataset.nAme);
        alert(animal.dataset.nAme);
}
