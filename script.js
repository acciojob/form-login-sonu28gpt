function getFormvalue() {
    //Write your code here
	// e.preventDefault();
	let form=document.getElementById('form1');
	let formData=new FormData(form);
	let {fname='',lname=''}=Object.fromEntries(formData);
	alert(fname+' '+lname);
	

}
