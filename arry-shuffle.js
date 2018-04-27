let thirtyMonth = ["april","june","september","november"];
let thirtyOneMonth = ["january","march","may","july","august","october","december"];
let febMonth = ["february"];
function getSatSun (month,year) {
	if (month === thirtyMonth) {
		return 30;
	} else if (month === thirtyOneMonth) {
		return 31;
	} else if (month === febMonth && year%4 ===0) {
		return 29;
	} else if (month === febMonth) {
		return 28;
	} else {
		return false;
	}

} 