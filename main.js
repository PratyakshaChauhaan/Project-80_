var name_of_people = [];

function submit()
{
    var GuestName = document.getElementById("name1").Value;
    names_of_people.push(GuestName);

    console.log(GuestName);

    console.log(name_of_people);
    var lenght_of_name = name_of_people.length;
    console.log(lenght_of_name);
    document.getElementById("display_name").innerHTML=names_of_people.toStrong();

}
function sorting()
{
    names_of_people.sort();
    var i =names_of_people.join("<br>")
    console.log(names_of_people);
    document.getElementById("sorted").innerHTML=i.toStrong;
}
function sorting()
{
    var i= names_of_people.join("<br>")
    console.log(names_of_people);
    document.getElementById("p1").innerHTML=i.toStrong();
    document.getElementById("sort_button").style.display="block";
}

function searching(){
    var s=document.getElementById("s1").Value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)
    {
        if(s==names_of_people[j]){
            found=found=1;
        }
    }
    document.getElementById("p2").innerHTML="name found"+found+"time/s";
    console.log("found name"+found+"time/s");
}