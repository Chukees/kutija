//KONFIGURACIJA PROIZVODA
//
// dummy = ['First Array,
//          'Second Array', etc]
// NOTE: First Array = 0 | Second Array = 1

var ProductImage = ['Kutijice/Kutijica1.jpg',
                    'Kutijice/Kutijica2.jpg',
                    'Kutijice/Kutijica3.jpg'] //Kutijice

var ProductDescription = ['velika kutijica',
                          'mala kutijica',
                          'velika kutijica']

var ProductTags = [ [0, 'velika', 'pravougaonik'],  //MAKSIMALNO 99
                    [1, 'mala', 'pravougaonik'],
                    [2, 'velika', 'kocka']  ];

var ProdcutColor = [ [0, 'crvena', 'crna', 'zuta'],
                     [1, 'crvena', 'plava'],
                     [2, 'smedja', 'bela'], ]

var ProductNumber = 2 //BROJ KUTIJICA, POCEVSI OD 0


//-----

var Colors = new Array();
var redInt = 1;
var blueInt = 1;
var yellowInt = 1;
var blackInt = 1;
var whiteInt = 1;
var brownInt = 1;
var SubInt = 0;

//INDEX
function SetInteger(n) {
  sessionStorage.setItem('Integer', n)
  window.location.href = "Product.html";
}

//FUNKCIJA
function product() {
Integer = sessionStorage.getItem('Integer')
document.getElementById('Image').src = ProductImage[Integer];
document.getElementById('Description').innerHTML = ProductDescription[Integer];
}

function search() {
window.location.href = "Search.html";
for(i = 0; i <= 999; i++) {
  sessionStorage.setItem('Product' + i, -1);
}

//  if(ProductTags[i][j] == SrcTag[k] && ProductTags[i][j] != null && SrcTag[k] != null || ProdcutColor[i][j] == Colors[k] && Colors[k] != null) {
//    if(searchInt <= i) {
  //    searchInt++;
  //    sessionStorage.setItem('searchInt', searchInt);
  //    sessionStorage.setItem('Product' + searchInt, i);
//    }


var searchInt = 0;
sessionStorage.setItem('searchInt', searchInt);
var tag = document.getElementById('search').value
var SrcTag = tag.split(" ")
  for(i = 0; i <= ProductNumber; i++) {
    SubInt = i;
    for(j = 1; j <= 99; j++) {
      for(k = 0; k <= 99; k++) {
        //Nothing to search
        if(tag == "" && Colors.length == 0) {
          window.location.href = "Index.html";
        }


        //only tags
        if(tag != "" && Colors.length == 0) {

          if(ProductTags[i][j] == SrcTag[k] && ProductTags[i][j] != null && SrcTag[k] != null) {
            if(SubInt <= i && SrcTag[k] != SrcTag[k-1]) {
              SubInt++;
              searchInt++;
              sessionStorage.setItem('searchInt', searchInt);
              sessionStorage.setItem('Product' + searchInt, i);
            }
          }
        }

        //only color
        if(tag == "" && Colors.length > 0) {

          if(ProdcutColor[i][j] == Colors[k] && ProdcutColor[i][j] != null && Colors[k] != null) {
            if(SubInt <= i) {
              SubInt++;
              searchInt++;
              sessionStorage.setItem('searchInt', searchInt);
              sessionStorage.setItem('Product' + searchInt, i);
            }
          }
        }

        //tags and colors
        if(tag != "" && Colors.length > 0) {
          if(ProductTags[i][j] == SrcTag[k] && SrcTag[k] != null) {
            for(h = 1; h < 99; h++) {
            for(l = 0; l < 99; l++) {
              if(ProdcutColor[i][h] == Colors[l] && ProdcutColor[i][h] != null && Colors[l] != null) {
                if(SubInt <= i) {
                  SubInt++;
                  searchInt++;
                  sessionStorage.setItem('searchInt', searchInt);
                  sessionStorage.setItem('Product' + searchInt, i);
                  }
                }
              }
            }
          }
        }


          }
        }
      }
    }



function getSearch() {
  document.getElementById('SearchList').innerHTML = " "
  IntegerS = sessionStorage.getItem('searchInt');
  if(IntegerS > 0 ) {
  for(i = 1; i <= IntegerS; i++) {
  Integer = sessionStorage.getItem('Product' + i);
  document.getElementById('SearchList').innerHTML += "<li><img src=\"" + ProductImage[Integer] + "\"></img>" +
  "<a href=\"#\" onclick=\"" + "SetInteger(" + Integer + ")\">Proizvod</a></li>";
}
}
else {
document.getElementById('SearchList').innerHTML += "No Items"
}
IntegerS = sessionStorage.setItem('searchInt', 0);
}

function red() {
if(redInt == 1) {
Colors.push("crvena");
document.getElementById("redButton").style.background='#FFF300';
redInt = 2;
} else {
  var ColorRemove = Colors.indexOf("crvena");
  Colors.splice(ColorRemove, 1);
  document.getElementById("redButton").style.backgroundColor = 'Transparent';
  redInt = 1;
}
}

function blue() {
if(blueInt == 1) {
Colors.push("plava");
document.getElementById("blueButton").style.background='#FFF300';
blueInt = 2;
} else {
  var ColorRemove = Colors.indexOf("plava");
  Colors.splice(ColorRemove, 1);
  document.getElementById("blueButton").style.backgroundColor = 'Transparent';
  blueInt = 1;
}
}

function yellow() {
if(yellowInt == 1) {
Colors.push("zuta");
document.getElementById("yellowButton").style.background='#FFF300';
yellowInt = 2;
} else {
  var ColorRemove = Colors.indexOf("zuta");
  Colors.splice(ColorRemove, 1);
  document.getElementById("yellowButton").style.backgroundColor = 'Transparent';
  yellowInt = 1;
}
}

function black() {
if(blackInt == 1) {
Colors.push("crna");
document.getElementById("blackButton").style.background='#FFF300';
blackInt = 2;
} else {
  var ColorRemove = Colors.indexOf("crna");
  Colors.splice(ColorRemove, 1);
  document.getElementById("blackButton").style.backgroundColor = 'Transparent';
  blackInt = 1;
}
}

function white() {
if(whiteInt == 1) {
Colors.push("bela");
document.getElementById("whiteButton").style.background='#FFF300';
whiteInt = 2;
} else {
  var ColorRemove = Colors.indexOf("bela");
  Colors.splice(ColorRemove, 1);
  document.getElementById("whiteButton").style.backgroundColor = 'Transparent';
  whiteInt = 1;
}
}

function brown() {
if(brownInt == 1) {
Colors.push("smedja");
document.getElementById("brownButton").style.background='#FFF300';
brownInt = 2;
} else {
  var ColorRemove = Colors.indexOf("smedja");
  Colors.splice(ColorRemove, 1);
  document.getElementById("brownButton").style.backgroundColor = 'Transparent';
  brownInt = 1;
}
}
