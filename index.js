var colnav = myElement('div','mb-3');
var nav = myElement('nav','navbar navbar-expand-lg justify-content-between');
//document.body.onload = getTopstories('home');

var a1 = myElement('button','btn btn-dark');
a1.setAttribute('style','font-weight:normal')
a1.setAttribute('onclick',"getTopstories('home')");
a1.innerHTML = 'HOME';

var a2 = myElement('button','btn btn-dark');
a2.setAttribute('style','font-weight:normal');
a2.setAttribute('onclick',"getTopstories('world')");
a2.innerHTML = 'WORLD';

var a3 = myElement('button','btn btn-dark');
a3.setAttribute('style','font-weight:normal');
a3.setAttribute('onclick',"getTopstories('politics')");
a3.innerHTML = 'POLITICS';

var a4 = myElement('button','btn btn-dark');
a4.setAttribute('style','font-weight:normal')
a4.setAttribute('onclick',"getTopstories('magazine')");
a4.innerHTML = 'MAGAZINE';

var a5 = myElement('button','btn btn-dark');
a5.setAttribute('style','font-weight:normal')
a5.setAttribute('onclick',"getTopstories('technology')");
a5.innerHTML = 'TECHNOLOGY';

var a6 = myElement('button','btn btn-dark');
a6.setAttribute('style','font-weight:normal');
a6.setAttribute('onclick',"getTopstories('science')");
a6.innerHTML = 'SCIENCE';

var a7 = myElement('button','btn btn-dark');
a7.setAttribute('style','font-weight:normal');
a7.setAttribute('onclick',"getTopstories('health')");
a7.innerHTML = 'HEALTH';

var a8 = myElement('button','btn btn-dark');
a8.setAttribute('style','font-weight:normal');
a8.setAttribute('onclick',"getTopstories('sports')");
a8.innerHTML = 'SPORTS';

var a9 = myElement('button','btn btn-dark');
a9.setAttribute('style','font-weight:normal');
a9.setAttribute('onclick',"getTopstories('arts')");
a9.innerHTML = 'ARTS';

var a10 = myElement('button','btn btn-dark');
a10.setAttribute('style','font-weight:normal');
a10.setAttribute('onclick',"getTopstories('fashion')");
a10.innerHTML = 'FASHION';

var a11 = myElement('button','btn btn-dark');
a11.setAttribute('style','font-weight:normal');
a11.setAttribute('onclick',"getTopstories('food')");
a11.innerHTML = 'FOOD';

var a12 = myElement('button','btn btn-dark');
a12.setAttribute('style','font-weight:normal');
a12.setAttribute('onclick',"getTopstories('travel')");
a12.innerHTML = 'TRAVEL';
nav.append(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
colnav.append(nav);

var hr = document.createElement('hr');
document.body.append(colnav,hr);

var home = myElement('div','container','home');
var world = myElement('div','container','world');
var politics = myElement('div','container','politics');
var magazine = myElement('div','container','magazine');
var technology = myElement('div','container','technology');
var science = myElement('div','container','science');
var health = myElement('div','container','health');
var sports = myElement('div','container','sports');
var arts = myElement('div','container','arts');
var fashion = myElement('div','container','fashion');
var food = myElement('div','container','food');
var travel = myElement('div','container','travel');
document.body.append(home,world,politics,magazine,technology,science,health,sports,arts,fashion,food,travel);
//Get data from API

async function getTopstories(sec)
{
   try{
     // document.getElementsByClassName('container').empty();
      var response = await fetch('https://api.nytimes.com/svc/topstories/v2/'+sec+'.json?api-key=6r2jF1jTjUIHpxMH1Hsy3GzQNcZ8dx92');
      var result = await response.json();
      var data = result.results;
      data.forEach((element)=>
      {
         console.log(element);
         var row = myElement('div','row');
         var col1 = myElement('div','col-md-12 mb-3');
         var card = myElement('div','card');
         var row1 = myElement('div','row no-gutters');
         var col2 = myElement('div','col-md-9');
         var cardbody = myElement('div','card-body');
         var section = myElement('div','section-card');
         var psection = myElement('p');
         psection.setAttribute('style','font-style:italic;font-weight:bold;color:blue');
         psection.innerHTML = element.section.toUpperCase();
         section.append(psection);
         var dtitle = myElement('div','title-card');
         dtitle.setAttribute('style','font-style:italic;font-weight:bold');
         dtitle.innerHTML = element.title;
         var ddate = myElement('div','date-card');
         ddate.setAttribute('style','font-style:italic');
         var by = myElement('div');
         by.setAttribute('style','font-style:italic');
         by.innerHTML = element.byline;
         var d = new Date(element.created_date);
         ddate.innerHTML = d.toLocaleString('default', { month: 'long' })+' '+d.getDate()+', '+d.getFullYear();
         var dabstract = myElement('div','abstract-card');
         dabstract.setAttribute('style','font-style:italic');
         dabstract.innerHTML = element.abstract;
         var cr = myElement('p');
         cr.setAttribute('style','font-style:italic;color:blue')
         var acr = myElement('a');
         acr.setAttribute('href',element.url);
         acr.innerHTML = 'Continue Reading';
         cr.append(acr);
    
         var col3 = myElement('div','col-md-3');
         var img = myElement('img','img-fluid card-img-top');
         img.setAttribute('src',element.multimedia[4].url);
         img.setAttribute('style','height:250px;width:300px')
         
         cardbody.append(section,dtitle,by,ddate,dabstract,cr);
         col2.append(cardbody);
         col3.append(img);
         row1.append(col2,col3);
         card.append(row1);
         col1.append(card);
         row.append(col1);
         document.getElementById(sec).append(row);
        
      });
   }
   catch(error){
      console.log(error);
   }
  
}

//create element through DOM
function myElement(elemName,elemClass='',elemId='')
{
   var elem = document.createElement(elemName);
   elem.setAttribute('class',elemClass);
   elem.setAttribute('id',elemId);
   return elem;
}