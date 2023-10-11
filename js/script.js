function Bilar(modell, color, year, price,look){
    this.modell=modell;
    this.color=color;
    this.year=year;
    this.price=price;
    this.look=look;
}

const bil1= new Bilar("BMW","White",2000,19900,"../img/bil1");
const bil2= new Bilar("TOYOTA","BLACK",2002,19900,"../img/bil2");
const bil3= new Bilar("NISSAN","BLUE",2003,19900,"../img/bil3");
const bil4= new Bilar("TESLA","RED",2004,19900,"../img/bil4");
const bil5= new Bilar("SAAB","YELLOW",2005,19900,"../img/bil5");
const bil6= new Bilar("VOLVO","RED",2017,19900,"../img/bil6");
const bil7= new Bilar("NISSAN","White",2007,19900,"../img/bil7");
const bil8= new Bilar("CHEVROLETTE","BLACK",2023,19900,"../img/bil8");
const bil9= new Bilar("PORCHE","GRAY",2012,19900,"../img/bil9");
const bil10= new Bilar("SCANIA","BLACK",2008,19900,"../img/bil10");

const bilMap = new Map();

bilMap.set("1",bil1);
bilMap.set("2",bil2);
bilMap.set("3",bil3);
bilMap.set("4",bil4);
bilMap.set("5",bil5);
bilMap.set("6",bil6);
bilMap.set("7",bil7);
bilMap.set("8",bil8);
bilMap.set("9",bil9);
bilMap.set("10",bil10);


console.log(bilMap.get("1").modell);


const bilDiv = document.createElement("div");
const bilP = document.createElement("p");
const bilImg = document.createElement("img")
bilDiv.append(bilP);
bilDiv.append(bilImg);
function printaBilar(){
    for(i=1;i<=bilMap.size;i++){
        let p = document.createElement('p');
        let img = document.createElement('img');
        img.src=`${bilMap.get(i.toString()).look}.jpeg`
        p.textContent=`Car: ${bilMap.get(i.toString()).modell} ` + `Färg: ${bilMap.get(i.toString()).color} `+`Year: ${bilMap.get(i.toString()).year} `+`Price:${bilMap.get(i.toString()).price} $`;
        bilDiv.appendChild(p);
        bilDiv.appendChild(img);
        document.body.append(bilDiv)
    }
}
printaBilar();