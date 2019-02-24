$("#encryption").click(function(){
	var plaintext=$("#plaintext").val();
	var password=$("#password").val();
	var ciphertext=CryptoJS.RC4.encrypt(plaintext,password);
	$("#ciphertext").val(ciphertext); 
});
$("#deciphering").click(function(){
	var ciphertext=$("#ciphertext").val();
	var password=$("#password").val();
	var plaintext=CryptoJS.RC4.decrypt(ciphertext,password).toString(CryptoJS.enc.Utf8);
	$("#plaintext").val(plaintext); 
});
