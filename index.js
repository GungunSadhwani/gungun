//Task1
function set_background(){
    var variable = document.getElementsByTagName("p")[0];

    variable.style.backgroundColor = "#101010";
}

//Task2
function getAttributes(){
  var link = document.getElementById("w3r");

  var hrefValue = link.getAttribute("href");
  var hreflangValue = link.getAttribute("hreflang");
  var relValue = link.getAttribute("rel");
  var targetValue = link.getAttribute("target");
  var typeValue = link.getAttribute("type");

  alert("href: " + hrefValue + "\nhreflang: " + hreflangValue + "\nrel: " + relValue + "\ntarget: " + targetValue + "\ntype: " + typeValue);
}

//Task3
function js_style(){
    var paragraph = document.getElementById("text");
    paragraph.style.fontSize = "24px";
    paragraph.style.fontFamily = "Arial, sans-serif";
    paragraph.style.color = "purple";

}


//Task4
function insert_Row() {
    var table = document.getElementById("sampleTable");
    var newRow = table.insertRow();
  
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = "New Row Cell1";
    cell2.innerHTML = "New Row Cell2";
    cell3.innerHTML = "New Row Cell3";
}