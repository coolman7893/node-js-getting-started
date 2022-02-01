
//////////////////////////////////////

let acts = 4;

function newrow() {

  acts += 1;

  document.querySelector("table").innerHTML += '<tr>    <td> Activity ' + acts + '</td> <td> A' + acts + '</td> <form><td> <input class="textboxid" id="weight"' + acts + '"> </input> </td></form>  <td> <input class="textboxid" id="grade"' + acts + '"> </input> <p3> / </p3> <input class="textboxid" id="total"' + acts + '"> </input> </td>  <td id="percent"' + acts + '"></td></tr>';

}

document.addEventListener("keyup", liveperc);

function liveperc() {

for (let i = 1; i < acts + 1; i++ ){

  let percent = document.querySelector("#grade"+i).value / document.querySelector("#total"+i).value;

  percent = percent * 100; 
  percent = percent.toFixed(2);
	
	if (!isNaN(percent) && isFinite(percent)) {
		document.querySelector("#percent" + i).innerHTML = percent + "%";
  }
	else{
		document.querySelector("#percent" + i).innerHTML = " "
  }
  }
}

function mean() {

  let total = 0;
  let mean = 0;	
  let count = 0;

  for (let i = 1; i < acts + 1; i++) {
		
		total += document.querySelector("#grade" + i).value / document.querySelector("#total" + i).value;

    count += 1;
	}

   mean = total / count;
   mean = mean.toFixed(2);

   if (!isNaN(mean) && isFinite(mean)) { 

     document.querySelector("#Mgrade").innerHTML = "Mean is: " + mean + "%";
   }

   else {
    alert("Missing Feilds");
    }
}


function weight() {
	let total1 = 0;
	let weight = 0;
	let count1 = 0;
	
	for(let i = 1; i < acts + 1; i++) {
		 total1 += document.querySelector("#grade" + i).value / document.querySelector("#total" + i).value*document.querySelector("#weight" + i).value*1;
		 count1 += document.querySelector("#weight" + i).value*1;
	}
	weight = total1/count1;
	weight = weight.toFixed(2);

	if (!isNaN(weight) && isFinite(weight)) { 
		document.querySelector("#Wgrade").innerHTML = "Weighted Grade is: " + weight;
  }
	
	else {
		alert("Missing Feilds");
  }

}