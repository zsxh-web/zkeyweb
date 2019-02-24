$("#encryption").click(function(){
	var plaintext=$("#plaintext").val();
	var password=$("#password").val();
	var encrypted = CryptoJS.AES.encrypt(plaintext, password);
	$("#ciphertext").val(encrypted); 
});
$("#deciphering").click(function(){
	var ciphertext=$("#ciphertext").val();
	var password=$("#password").val();
	var plaintext=CryptoJS.AES.decrypt(ciphertext,password).toString(CryptoJS.enc.Utf8);
	$("#plaintext").val(plaintext); 
});
