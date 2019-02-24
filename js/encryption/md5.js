$("#encryption").click(function(){
	var plaintext=""+$("#plaintext").val();
	var ciphertext=CryptoJS.MD5(plaintext);
	$("#ciphertext").val(ciphertext); 
});
$("#deciphering").click(function(){
  alert("HTML: deciphering");
});
