var angka1;
var angka2;
var hasil;
var opr;
var operator_seleksi = false;
function btn(angka) {
	var display = document.getElementById("output").value;
	if (display == "0") {
		display = angka; 
	} else {
		display += angka;
	}
	document.getElementById("output").value = display;
}
 
function clr() {
	document.getElementById("output").value = "0";
	angka1 = 0;
	angka2 = 0;
	operator_seleksi = false;
}
 
function koma() {
	var display = document.getElementById("output").value;
	if (display.includes(".") == false) {
		display += ".";
	}
	document.getElementById("output").value = display;	
}
 
function btn_opr(o) {
	operator_seleksi = true;
	angka1 = parseFloat(document.getElementById("output").value);
	opr = o;
	document.getElementById("output").value = "0";
}
 
function hitung() {
	if (operator_seleksi == true) {
		angka2 = parseFloat(document.getElementById("output").value);
		switch(opr){
			case 1 :
				hasil = angka1 * angka2;
				document.getElementById("output").value = hasil;			
				break;
			case 2 :
				hasil = angka1 / angka2;
				document.getElementById("output").value = hasil;
				break;
			case 3 :
				hasil = angka1 - angka2;
				document.getElementById("output").value = hasil;
				break;
			case 4 :
				hasil = angka1 + angka2;
				document.getElementById("output").value = hasil;
				break;
		}
		operator_seleksi = false
		hasil = 0;
		angka1 = 0;
		angka2 = 0;
	}
}
