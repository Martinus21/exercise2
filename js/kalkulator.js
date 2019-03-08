var angka1;
var angka2;
var hitung;
var operator;
var operator_seleksi = false;

/* FUNGSI UNTUK MENGAMBIL DATA ANGKA */
function btn(angka) {
	var tampilkan = document.getElementById("hasil").value;
	if (tampilkan == "0") {
		tampilkan = angka; 
	} else {
		tampilkan += angka;
	}
	document.getElementById("hasil").value = tampilkan;
}


/* FUNGSI UNTUK MENGAMBIL DATA KOMA */
function koma() {
	var tampilkan = document.getElementById("hasil").value;
	if (tampilkan.includes(".") == false) {
		tampilkan += ".";
	}
	document.getElementById("hasil").value = tampilkan;	
}
 



/* FUNGSI UNTUK SELEKSI BTN OPERATOR */
function btn_opr(o) {
	operator_seleksi = true;
	angka1 = parseFloat(document.getElementById("hasil").value);
	operator = o;
	document.getElementById("hasil").value = "0";
}
 
function hitung() {
	if (operator_seleksi == true) {
		angka2 = parseFloat(document.getElementById("hasil").value);
		switch(operator){
			case 1 :
				hitung = angka1 * angka2;
				document.getElementById("hasil").value = hitung;			
				break;
			case 2 :
				hitung = angka1 / angka2;
				document.getElementById("hasil").value = hitung;
				break;
			case 3 :
				hitung = angka1 - angka2;
				document.getElementById("hasil").value = hitung;
				break;
			case 4 :
				hitung = angka1 + angka2;
				document.getElementById("hasil").value = hitung;
				break;
		}
		operator_seleksi = false
		hitung = 0;
		angka1 = 0;
		angka2 = 0;
	}
}

/* FUNGSI UNTUK MENGULANG */
function clr() {
	document.getElementById("hasil").value = "0";
	angka1 = 0;
	angka2 = 0;
	operator_seleksi = false;
}
