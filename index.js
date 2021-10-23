function IMC(){
    let taille=document.getElementById("taille").value;
    let poid=document.getElementById("poid").value;
    let imc=poid/(taille/100*taille/100);
    let imc1=(imc.toFixed(2));

    document.getElementById("Resultat").innerHTML=`Votre IMC est de ${imc1}`;

}




