const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value +"&nbsp;";
}
document.getElementById("kiir").innerHTML=`<table class="table table-striped">
<thead>
  <tr>
    <th>A</th>
    <th>B</th>
    <th>C</th>
    <th>D</th>
    <th>E</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>${numbers[0]}</td>
    <td>${numbers[1]}</td>
    <td>${numbers[2]}</td>
    <td>${numbers[3]}</td>
    <td>${numbers[4]}</td>
  </tr>
</tbody>
</table>`