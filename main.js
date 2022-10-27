nomearray=[];
function enviar(){
    var displayarray = [];
    for(var h = 1; h <= 4; h++){
        var nomestu = document.getElementById("n"+ h).value;
        console.log(nomestu);
        nomearray.push(nomestu);
    }
    console.log(nomearray);
    var lengthstu = nomearray.lenght;
    console.log(lengthstu);
    for(var v = 0; v < lengthstu; v++){
        displayarray.push("<h4>NAME - "+ nomearray[v] + "</h4>");
        console.log(displayarray);
    }
    document.getElementById("displayNameWithCommas").innerHTML = displayarray;

    var removeCommas = displayarray.join(" ");
    console.log(removeCommas);
    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
    document.getElementById("orgbut").style.display = "inline-block";
}
function organizar(){
    nomearray.sort();
    console.log(nomearray);
    var displayStudentArraySorting = [];
    var lengthstu = nomearray.lenght;
    console.log(lengthstu);
    for(var v = 0; v < lengthstu; v++){
        displayStudentArraySorting.push("<h4>NAME - "+ nomearray[v] + "</h4>");
        console.log(displayStudentArraySorting);
    }
    var removeCommas = displayStudentArraySorting.join(" ");
    console.log(removeCommas);

    document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}