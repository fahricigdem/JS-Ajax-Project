   var xmlhttp= new XMLHttpRequest();

xmlhttp.open("GET","json_veri_ajax.txt",true);
xmlhttp.send();





xmlhttp.onreadystatechange=function(){

    if (this.readyState==4 && this.status==200) {

        var daten=JSON.parse(this.responseText);
        console.log(daten);
        console.log(typeof daten["nachricht1_header"])
 
        //document.getElementById("header1").innerHTML=daten["nachricht1_header"];
        //document.getElementById("text1").innerHTML=daten["nachricht1_text"];
        //document.getElementById("info1").innerHTML=daten["nachricht1_info"];
        //document.getElementById("image"+1).setAttribute("src","images/1.jpg")

        for (var i = 1; i <= 4; i++ ){
            document.getElementById("image"+i).setAttribute("src",daten["nachricht"+i+"_img"])
            document.getElementById("header"+i).innerHTML=daten["nachricht"+i+"_header"];
            document.getElementById("text"+i).innerHTML=daten["nachricht"+i+"_text"];
            document.getElementById("info"+i).innerHTML=daten["nachricht"+i+"_info"];
            
        }
    }
}


