var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let myObj = JSON.parse(this.responseText);
        let chek = document.getElementById("sp");
        chek.onclick = function(rr){
            let emal = document.getElementById("exampleInputEmail1").value;
            let pass = document.getElementById("exampleInputPassword1").value;
            let  error = document.querySelector(".erorr");
            for(let i = 0; i < myObj.length; i++){
            if(emal === myObj[i].emal && pass === myObj[i].pass){
                location.href= './home.html'
            }else{
                error.style.display= "block"
            }
        }
        // console.log(myObj[i].emal);
    }
    
  }
};
xhttp.open("GET", "kk.json", true);
xhttp.send();