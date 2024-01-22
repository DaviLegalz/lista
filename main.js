nameOfThePeopleArray = [nameOfThePeople1, nameOfThePeople2, nameOfThePeople3, nameOfThePeople4];


function submit()
{

    var name1 = document.getElementById("nameOfThePeople1").value;
    var name2 = document.getElementById("nameOfThePeople2").value;
    var name3 = document.getElementById("nameOfThePeople3").value;
    var name4 = document.getElementById("nameOfThePeople4").value;

    console.log(nameOfThePeopleArray);

    document.getElementById("displayName").innerHTML;

    nameOfThePeople.sorting();
    nameOfThePeople.push();
}

function push()
{
    var GuestName1 = document.getElementById("name1").value;
    nameOfThePeople.push(GuestName);
}

function searching()
{
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<nameOfThePeople.length; j++)
    {
        if(s==nameOfThePeople[j])
        {
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="Nome encontrado"+found+"vez(es)";
    console.log("Nome encontrado"+found+"vez(es)");
}