var height = document.getElementById("Height"),
    width = document.getElementById("Width"),
    color = document.getElementById("color"),
    table = document.getElementById("Canvas"),
    td = document.getElementsByTagName("td"),
    tableContent = "",
    i = 0,
    j = 0;
    
function makeGrid() {
    "use strict";
    for (i = 0; i < width.value; i++) {
        tableContent += "<tr>";
        for (j = 0; j < height.value; j++) {
            tableContent += "<td></td>";
        }
        tableContent += "</tr>";
    }
    table.innerHTML = tableContent;
    tdActionListener();
}

function tdActionListener() {
    "use strict";
    for (i = 0; i < td.length; i++) {
        td[i].addEventListener("click", function (index) {
            index.target.style.backgroundColor = color.value;
        });
    }
}

