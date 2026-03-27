function showMessage(){

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if(name === ""){
        alert("Name is required!");
        return false;
    }

    if(email === ""){
        alert("Email is required!");
        return false;
    }

    alert("Response submitted successfully!");
    return true;
}


function toggleMode() {
    document.body.classList.toggle("dark");
}


