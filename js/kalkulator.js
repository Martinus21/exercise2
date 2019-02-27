var angka_1;
var angka_2;
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
	angka_1 = parseFloat(document.getElementById("hasil").value);
	operator = o;
	document.getElementById("hasil").value = "0";
}
 
function hitung() {
	if (operator_seleksi == true) {
		angka_2 = parseFloat(document.getElementById("hasil").value);
		switch(operator){
			case 1 :
				hitung = angka_1 * angka_2;
				document.getElementById("hasil").value = hitung;			
				break;
			case 2 :
				hitung = angka_1 / angka_2;
				document.getElementById("hasil").value = hitung;
				break;
			case 3 :
				hitung = angka_1 - angka_2;
				document.getElementById("hasil").value = hitung;
				break;
			case 4 :
				hitung = angka_1 + angka_2;
				document.getElementById("hasil").value = hitung;
				break;
		}
		operator_seleksi = false
		hitung = 0;
		angka_1 = 0;
		angka_2 = 0;
	}
}

/* FUNGSI UNTUK MENGULANG */
function clr() {
	document.getElementById("hasil").value = "0";
	angka_1 = 0;
	angka_2 = 0;
	operator_seleksi = false;
}