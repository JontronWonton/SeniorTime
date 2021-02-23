class account { // class for each account, one per each student in the school
	constructor(name, id){
		this.name = name; // student name
		this.id = id; // student id
		this.rep = 0; // document can be referenced to change thsi value depending on id
	}



}
// add type parameter to account class.
// **Check firebase

function login(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in
    	var user = userCredential.user;
      location.replace("home.html");
    // ...
  	}).catch((error) => {
      window.alert("Login unsuccessful! Please try again.");
  	});
}

function register(){
	console.log("this function is being run successfully");
	fName = document.getElementById("firstname").value;
	lName = document.getElementById("lastname").value;
	sID = document.getElementById("sID").value;
	email = document.getElementById("email").value;
	password = document.getElementById("password").value;
	
	firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential)=> {
    	var user = userCredential.user;
		window.alert("Success!")
	}).catch((error) => {
    	window.alert("Error! Account creation failed. Please be sure to fill in all fields correctly.")
  });
}

function pwdToggle(){
	var temp = document.getElementById("password")
	if (temp.type === "password"){
		temp.type = "text";
	} else {
		temp.type = "password";
	}
}

function logout(){
  location.replace("index.html");


}

function test(){
  console.log("[TEST]");
  window.alert("YOOOOOOOOOOOOOOOOOOOOOOO")
}

// document.getElementById("insert").onclick = function(){
//   Register();
//   firebase.database
// }
