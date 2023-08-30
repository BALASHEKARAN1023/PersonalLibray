//Personal library JS code:-
const dataLib=[];
dataLib.push({
    Author:'J. R. R. Tolkien',
    Title:"Life The Lord of the Rings heven",
    Year:1950,
    ReadStatus:'YES'
})
dataLib.push({
    Author:'George R.R',
    Title:" Game of Thrones",
    Year:1996,
    ReadStatus:'YES'
})
dataLib.push({
    Author:'Ralph Ellison',
    Title:"Invisible Man",
    Year:1952,
    ReadStatus:'NO'
})
dataLib.push({
    Author:'Lucy Score',
    Title:"Things We Never Got Over",
    Year:2022,
    ReadStatus:'NO'
})
dataLib.push({
    Author:'Sarah J. Maas',
    Title:"House of Sky and Breath",
    Year:2022,
    ReadStatus:'YES'
})
console.log(dataLib);
let display=document.getElementById('show');
function addbook(){
let author =document.getElementById('author').value;
let title=document.getElementById('title').value;
let year=document.getElementById('year').value;
let readStatus=document.getElementById('status').value;
    dataLib.push({
        Author:author,
        Title:title,
        Year:year,
        ReadStatus:readStatus
    });
    console.log(dataLib);
    document.getElementById('disMessage').innerHTML="<b>New BOOK </b> added to your library";
    display.removeAttribute('hidden');
}
document.querySelector('#addbook').addEventListener('click',addbook);
function addFornt(){
 let author =document.getElementById('author').value;
let title=document.getElementById('title').value;
let year=document.getElementById('year').value;
let readStatus=document.getElementById('status').value;
 dataLib.unshift({
    Author:author,
        Title:title,
        Year:year,
        ReadStatus:readStatus
 });
 console.log(dataLib);
 document.getElementById('disMessage').innerHTML="<b>New BOOK </b> added in<b> Fornt</b> to your library";
 display.removeAttribute('hidden');
}
document.querySelector('#addFornt').addEventListener('click',addFornt);
function removeFont(){
    dataLib.shift();
    console.log(dataLib);
    document.getElementById('disMessage').innerHTML="<b>OLD BOOK</b>removed in <b>Fornt</b>  to your library";
    display.removeAttribute('hidden');
}
document.querySelector('#removefront').addEventListener("click",removeFont);
function removeBack(){
    dataLib.pop();
    console.log(dataLib);
    document.getElementById('disMessage').innerHTML="<b>OLD BOOK</b>removed in <b>Back</b>  to your library";
    display.removeAttribute('hidden');
}
document.querySelector('#removeBack').addEventListener("click",removeBack);
function getAlltitlesAndYears(){
    let at=dataLib.map((booktitles)=>booktitles.Title);
    let ays=dataLib.map((bookYears)=> bookYears.Year);
    document.getElementById('disModel').innerHTML="\n"+at+"\n"+ays+"\n";
 
}
document.querySelector('#allTitleAndYear').addEventListener('click',getAlltitlesAndYears);

function searchAuthor(){
  const name=prompt("Enter the author Name");
  let result=dataLib.filter((authors)=>authors.Author==name).map((book)=>book.Title);
  document.getElementById('disSearch').innerHTML=result;
}
document.querySelector('#SearchAuthor').addEventListener('click',searchAuthor);

