var ChangeCase = function(str){

	var strChanged = "";

	for(var i = 0; i < str.length; i++){
		if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
			strChanged += String.fromCharCode(str.charCodeAt(i) - 32);
		}else if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
			strChanged += String.fromCharCode(str.charCodeAt(i) + 32);
		}else{
			strChanged += str[i];
		}
	}

	return strChanged;

};

module.exports = {
	ChangeCase: ChangeCase
};
