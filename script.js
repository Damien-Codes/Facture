// alert("yé souis lo potit chat")
function ajouterLigne(){
    var newLi= document.getElementById("modeleLigne").cloneNode(true);
    var lastLi= document.getElementById("lastLigne");

    var pere= document.getElementById("table_inv").firstChild.nextSibling;
    pere.insertBefore(newLi,lastLi);

}
function supprimerLigne(){
	document.getElementById("table_inv").deleteRow(-1);
}

function calculate(){
    var total = 0

    var listePrix = document.getElementsByClassName("prix");
    var listeQte = document.getElementsByClassName("qte");
    var listeTtl = document.getElementsByClassName("totalLigne");

    for (var i = 0; i< listePrix.length;i++) {
        listeTtl[i].value = parseInt(listeQte[i].value)*parseInt(listePrix[i].value);
        total = total + parseInt(listeTtl[i].value);
        document.getElementById("total").innerHTML = total;
    }
}