function görünebilir(){
    var ID;
    ID = document.getElementById("detaylar");

    if (ID.style.visibility == "hidden") {
            ID.style.visibility = "visible";
            console.log("Kullanıcı destek bilgerini görüntüledi.");
        } else {
            ID.style.visibility = "hidden";
            console.log("Kullanıcı destek bilgerini kapattı.");
    }
}
