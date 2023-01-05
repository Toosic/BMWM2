function mobileMenu()
{
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if(btn.innerText === 'MENU')
    {
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    }
    else
    {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
}

function haveCar(){
    let img = document.querySelector('.HOME img')
    img.style.opacity = 1;
}
function DontHaveCar(){
    let img = document.querySelector('.HOME img')
    img.style.opacity = 0;
}

function MorePicture(){
    let pic1 = document.getElementById('img1');
    let pic2 = document.getElementById('img2');
    let pic3 = document.getElementById('img3');
    let pic4 = document.getElementById('img4');
document.getElementById('pf6').innerText = "Molim Vas sacekajte!";


let btn = document.getElementById('btn');
console.log(btn);
if(btn.innerText === "Prikazi jos slika")
{

    let interval = setTimeout(() => {
        document.getElementById('pf6').innerText = " "
                pic1.style.display = "block";  
                //pic1.style.opacity = 1;  
        
            }, 2000);
            interval = setTimeout(()=>{
                pic2.style.display = "block";  
                //pic2.style.opacity = 1;  

            },4000)
            interval = setTimeout(()=>{
                pic3.style.display = "block";  
                //pic3.style.opacity = 1;  

            },6000)  
            interval = setTimeout(()=>{
                pic4.style.display = "block";  
                //pic4.style.opacity = 1;  
                btn.innerText = "Ukloni slike";
            },8000)
            btn.innerText = "Slike se prikazuju!";
}
else
{
    pic1.style.display = "none";  
    pic2.style.display = "none";  
    pic3.style.display = "none";  
    pic4.style.display = "none";  

    /*pic1.style.opacity = 0;  
    pic2.style.opacity = 0;  
    pic3.style.opacity = 0;  
    pic4.style.opacity = 0;*/  
    btn.innerText = "Prikazi jos slika";
    document.getElementById('pf6').innerText = "";

}
}

function opneModal1(){
    let modalWidonw = document.querySelector('.popup-modal1');
    let overlay = document.querySelector('.overlay');


    modalWidonw.style.display = "block";
    overlay.style.display = "block";
}
function closeModal1(){
    let modalWidonw = document.querySelector('.popup-modal1');
    let overlay = document.querySelector('.overlay');


    modalWidonw.style.display = "none";
    overlay.style.display = "none";
}


function opneModal2(){
    let modalWidonw = document.querySelector('.popup-modal2');
    let overlay = document.querySelector('.overlay');


    modalWidonw.style.display = "block";
    overlay.style.display = "block";
}
function closeModal2(){
    let modalWidonw = document.querySelector('.popup-modal2');
    let overlay = document.querySelector('.overlay');


    modalWidonw.style.display = "none";
    overlay.style.display = "none";
}

function opneModal3(){
    let modalWidonw = document.querySelector('.popup-modal3');
    let overlay = document.querySelector('.overlay');


    modalWidonw.style.display = "block";
    overlay.style.display = "block";
}
function closeModal3(){
    let modalWidonw = document.querySelector('.popup-modal3');
    let overlay = document.querySelector('.overlay');


    modalWidonw.style.display = "none";
    overlay.style.display = "none";
}

function opneModal4(){
    let modalWidonw = document.querySelector('.popup-modal4');
    let overlay = document.querySelector('.overlay');


    modalWidonw.style.display = "block";
    overlay.style.display = "block";
}
function closeModal4(){
    let modalWidonw = document.querySelector('.popup-modal4');
    let overlay = document.querySelector('.overlay');


    modalWidonw.style.display = "none";
    overlay.style.display = "none";
}

function showPic(){
    let pic1 = document.getElementById('pic1');
    let pic2 = document.getElementById('pic2');
    let pic3 = document.getElementById('pic3');

    let inertval = setTimeout(()=>{
        pic1.style.opacity = 1;
        pic2.style.opacity = 1;
        pic3.style.opacity = 1;
    },500)
}
function showPic1(){
    let pic1 = document.getElementById('pic4');
    let pic2 = document.getElementById('pic5');
    let pic3 = document.getElementById('pic6');

    let inertval = setTimeout(()=>{
        pic1.style.opacity = 1;
        pic2.style.opacity = 1;
        pic3.style.opacity = 1;
    },500)
}
function showPic2(){
    let pic1 = document.getElementById('pic7');
    let pic2 = document.getElementById('pic8');
    let pic3 = document.getElementById('pic9');

    let inertval = setTimeout(()=>{
        pic1.style.opacity = 1;
        pic2.style.opacity = 1;
        pic3.style.opacity = 1;
    },500)
}

function showText1(){
    //let opac = document.getElementsByClassName('paragrafs');
    document.getElementById('jedan').innerHTML = " <br><b>M TwinPower Turbo redni 6- <br>  cilindricni benzinski motor <br> visokih performansi.</b><br><br> Vrhunski sportista koji nudi cisto <br> zadovoljstvo tokom voznje: M TwinPower <br> Turbo redni 6-cilindricni benzinski motor <br> karakterise dinamicka isporuka snage i <br> karakteristican grleni M zvuk motora. Visoko <br> efikasne tehnologije kao Sto su dvostroki <br>VANOS, Valvetronic, visoko precizno <br> ubrizgavanje: TwinScroll turbopunjac <br> obezbedjuje odlican ucinak.<br>"
    //opac.style.display = "block";
}
function showText2(){
    document.getElementById('dva').innerHTML = "<br><b>Rucni menjac </b><br><br> Rucni menjac sa sest brzina obecava cisto <br> zadovoljstvo u voznji. Samim odabirom <br> stepena prenosa i njihovim rucnim <br> ukljudivaniem u poredenju sa automatskim <br> menjacem, mozete da dozivite direktnu, <br> istinsku vezu sa pogonom vaseg BMW-a - a <br> samim tim i sportsku voznju u svom <br> nojcistijem obliku. Takodje imate koristi od <br> dizajna menjoca optimizovanog za tezinu. "
}
function showText3(){
    document.getElementById('tri').innerHTML = "<br><b>Adaptivno M oslanjanje </b><br><br> Sa prilagodijivom M sasikom sa varijabilnim <br> podesavanjem amortizera, karakteristike <br> sasije se mogu individualno prilagoditi - od <br> udobnih do posebno sportskih sa izrazenim <br> agilnim uprovlianjem. Sa funkciiom Driving <br> Experience Control (kontrolom iskustva <br> voznje), mozete brzo i lako da prilagodite <br> elektronski kontrolisanu sasiju uslovima na <br> putu i situaciji prilikom voinje.";
}
function showText4(){
    document.getElementById('cetri').innerHTML = "<br><b>Dizajn prednjeg kraja</b><br><br>Kompaktne srazmere jasne konture <br> definisu karakteristican dizain BMW-a M2 <br> Coupe. U stilu BMW-a 2002, farovi su <br> izvedeni kao pojedinacne jedinice";
}
function showText5(){
    document.getElementById('pet').innerHTML = "<br><b>M krov od karbon vlakana</b><br><br> Deo deo koncepta inteligentne lagane <br> konstrukcije, M krov od ugljenicnih viakana <br> znacajno pomaze da se smanji tezing vozila.<br>Zahvaljujuci dizajnu od plastike ojacane <br> ugljenicnim viaknima (CFRP), laksi je ako 6 <br> kg od uporedivog krova od celika. Ovo <br> pomera teziste vozila nanize i povecava <br> dinamiku voznje.";
}
function showText6(){
    document.getElementById('sest').innerHTML = "<br><b>Dizajn zadnjeg kraja</b><br><br>Snazno kuciste tockova i tipicni M lukovi <br> tockova naglosavaju sirok i mocan stav <br> novog BMW-a Serie 2 Coupe-a na putu, <br> impresivno prenoseci svoru snagu sportske <br> karakteristike spolja. Zadnja svetla otkrivaju <br> potpuno novu interpretaciju karakteristicnog <br> L-oblika dok se pulsirajude sire k strani.";
}
function showText7(){
    document.getElementById('sedam').innerHTML = "<br><b>M Carbon sportska sedista</b><br><br>M Carbon sportsko sediste sa osvetljenjem <br> M2 logotipom kombinuje lakocu i trkacki <br> karakter sedista sa nizom funkcija M Sport <br> sedista. Prijanjanje sedista pruza optimalnu <br> bocnu podrsku i zuzetnu udoonost tokom <br> dugih putovanja. Sediste ie kompatibilno sa <br> visestrukim pojasevima i stoga je potpuno <br> pogodno za trke."
}
function showText8(){
    document.getElementById('osam').innerHTML = "<br><b>M upravljac </b><br><br> Sa M koznim upravljacem, mozete da <br> uzivate u sportskom, direkntom osecaju <br> upravljanja i da jednostavno preuzmete <br> unapred podesene M Drive konfiguracije <br> pritiskom na dugme."
}function showText9(){
    document.getElementById('devet').innerHTML = "<br><b>BMW zakrivljen ekran</b><br><br>Jednodelni, potpuno digitalni BMW <br> zakrivljeni ekran pruza informacije o vasem <br> BMW-u na velikoj povrsini i jasno <br> rasporedjeno. Kombinuje 12,3-incni ekran - <br> instrument tablu so 14.9-incnim kontrolnim <br> ekranom koji ima mogudnost dodira. Rad je ergonomski optimizovan i intuitivan. <br> Zakrivijeni, gotovo siobodno lebdeci dizajn <br> izgieda i sofisticirano i moderno."
}

function changePicutre(){
    let image = document.querySelector('.images img');
    let images = []
    images[0] = ['./picture/bigPic11.jpg'];
    images[1] = ['./picture/bigPic12.png']
    let index = 0;
    let interval = setInterval(()=>{
        if(index === 0)
        {
            image.src = images[1];
            index = 1;
        }
        else
        {
            image.src = images[0];
            index = 0;
        }
},3500)
}


function aboutMe(){
    var slider = document.getElementById('slider');
    var display = document.getElementById('display');
    var view = document.querySelector('.aboutMe');
    var ABM = document.querySelector('.ABM img')
    slider.value = 0
  let interval = setInterval(() => {
       slider.value++;
       display.innerText = slider.value; 
       if(slider.value==100)
       {
        view.style.display = "block";
        slider.style.opacity = 0;
        display.style.opacity = 0;
        ABM.style.opacity =1
       }
    }, 50);
}

let interval;
function startTimer(){
    let dateElement = document.getElementById('dateTime');
    let date = new Date();

    let DATE = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + ".";

    dateElement.innerHTML = DATE

    var d = new Date();
    document.getElementById('dateTime').innerHTML +=" " + d.toLocaleTimeString();

    interval = setInterval(() =>{
        var d = new Date();
        document.getElementById('dateTime').innerHTML = DATE + " " + d.toLocaleTimeString();
    }, 1000);
}


function moreInfo()
{
    window.open("https://www.bmw.rs/sr/all-models/m-series/m2-coupe/2022/bmw-serija-2-coupe-m-automobili-tehnicki-podaci.html#tab-0")
  
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  }

function submit()
{
    cokiImeSET();
    cokiPrezimeSET();
    cokiEmailSET();
    cokiOpisSET();
    cokiDateTimeSET();
}

function cooki()
{

   

    let cokies = document.querySelector('.lastInf');
    let image = document.querySelector('.image img');
    let btn = document.getElementById('prikaz');


    if(btn.innerText == "Vasi prethodni podaci")
    {
        cokiImeINSET();
        cokiPrezimeINSERT();
        cokiEmailINSERT();
        cokiOpisINSERT();
        cokiDateTimeINSERT();
        cokies.style.display = "block";
        btn.innerText = "Ukloni prethodne podatke"
        image.style.display = "none";
    }
    else
    {
        cokies.style.display = "none";
        btn.innerText = "Vasi prethodni podaci"
        image.style.display = "block";
    }
}
function cokiImeSET(){
    let name = getCookie("Ime");
    if (name != "") {
      } 
    else {
        name = document.getElementById('ime').value;
         if (name != "" && name != null) 
         {
           setCookie("Ime", name, 30);
         }
      }
}

function cokiImeINSET(){
    let name = getCookie("Ime");
    if (name != "") {
        document.getElementById('ispis').innerHTML += "Vase ime: " + name;
      } 
    else {
        document.getElementById('ispis').innerHTML += "Niste uneli Vase ime" + "<br>";
        name = document.getElementById('ime').value;
         if (name != "" && name != null) 
         {
           setCookie("Ime", name, 30);
         }
      }
}

function cokiPrezimeSET(){
    let lastName = getCookie("Prezime");
    if (lastName != "") {
      } 
    else {
        lastName = document.getElementById('prezime').value;
         if (lastName != "" && lastName != null) 
         {
           setCookie("Prezime", lastName, 30);
         }
      }
}
function cokiPrezimeINSERT(){
    let lastName = getCookie("Prezime");
    if (lastName != "") {
        document.getElementById('ispis').innerHTML += "<br><br>" + "Vase prezime: " + lastName;
      }  
    else {
        document.getElementById('ispis').innerHTML += "Niste uneli Vase prezime" + "<br>";
        lastName = document.getElementById('prezime').value;
         if (lastName != "" && lastName != null) 
         {
           setCookie("Prezime", lastName, 30);
         }
      }
}

function cokiEmailSET()
{
    let Email = getCookie("Email");
    if (Email != "") {
      } 
    else {
        Email = document.getElementById('meil').value;
         if (Email != "" && Email != null) 
         {
           setCookie("Email", Email, 30);
         }
      }
}

function cokiEmailINSERT(){
    let Email = getCookie("Email");
    if (Email != "") {
        document.getElementById('ispis').innerHTML += "<br><br>" + "Vas meil: " + Email;
      } 
    else {
        document.getElementById('ispis').innerHTML += "Niste uneli vase meil" + "<br>";
        Email = document.getElementById('meil').value;
         if (Email != "" && Email != null) 
         {
           setCookie("Email", Email, 30);
         }
        }
}
function cokiOpisSET()
{
    let Opis = getCookie("Opis");
    if (Opis != "") {
      } 
    else {
        Opis = document.getElementById('description').value;
         if (Opis != "" && Opis != null) 
         {
           setCookie("Opis", Opis, 30);
         }
      }
}

function cokiOpisINSERT(){
    let Opis = getCookie("Opis");
    if (Opis != "") {
        document.getElementById('ispis').innerHTML += "<br><br>" + "Vas opis: " + Opis;
      } 
    else {
        document.getElementById('ispis').innerHTML += "Niste uneli vas opis" + "<br>";
        Opis = document.getElementById('description').value;
         if (Opis != "" && Opis != null) 
         {
           setCookie("Opis", Opis, 30);
         }
        }
}

function cokiDateTimeSET()
{
    let DT = getCookie("dateTime");
    if (DT != "") {
      } 
    else {
        DT = document.getElementById('dateTime').innerText;
         if (DT != "" && DT != null) 
         {
           setCookie("dateTime", DT, 30);
         }
      }
}

function cokiDateTimeINSERT(){
    let DT = getCookie("dateTime");
    if (DT != "") {
        document.getElementById('ispis').innerHTML += "<br><br>" + "Datum i vreme kontaktiranja: " + DT;
      } 
    else {
        document.getElementById('ispis').innerHTML += "Niste uneli vas opis" + "<br>";
        DT = document.getElementById('dateTime').innerText;
         if (DT != "" && DT != null) 
         {
           setCookie("dateTime", DT, 30);
         }
        }
}
