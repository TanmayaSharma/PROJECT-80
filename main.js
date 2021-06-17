var students=[];

function submit()
{
for( var we=1;we<=4;we++){
    var home=document.getElementById("student"+we).value;
    students.push(home);
}
var ate=students.join(" ");


document.getElementById("Answer").innerHTML=ate;
}
function sorting()
{
students.sort();
var mate=students.join(" ")
document.getElementById("Answer").innerHTML=mate;
}