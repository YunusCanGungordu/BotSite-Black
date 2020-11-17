		function görünebilir(){
			var ID;
			ID = document.getElementById('detaylar');

			if (ID.style.visibility="hidden") {
				ID.style.visibility="visible";
			} else {
				ID.style.visibility="hidden";
			}
        }


        var dil;
        dil = "python"; 
        if (dil == "nodejs") {
            document.write("Yapay zeka hazırlanırken NodeJS kullanılmıştır.")
        } else if (dil == "java") {
            document.write("Yapay zeka hazırlanırken Java dili kullanılmıştır.")
        } else if (dil == "python") {
            document.write("Yapay zeka hazırlanırken Python dili kullanılmıştır.")
        }
        
        var dil;
        dil = "python"; 

        if (dil == "java") {
            document.write('<button style="background-color: transparent; border: 0px; font-size: 20px;"><i class="fab fa-java" style="color: white;"></i></button>');
        } else if (dil == "python") {
            document.write('<button style="background-color: transparent; border: 0px; font-size: 20px;"><i class="fab fa-python" style="color: white;"></i></button>');
        } else if (dil == "nodejs"){
            document.write('<button style="background-color: transparent; border: 0px; font-size: 20px;"><i class="fab fa-node-js" style="color: white;"></i></button>');
        }    
        
        
// Bu kodlar siteye entegre değidlir, zaten onlar html sayfalarında derlendi. 
// Buradakiler sadece arşiv. Yani siteye etkisi yok.        