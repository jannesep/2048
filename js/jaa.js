function juojana(p)
{
var s = "Sudari";
if (p >= 500) s = "Seikkailija";
if (p >= 1000) s = "Tarpoja";
if (p >= 1500) s = "Samoaja";
if (p >= 2000) s = "Vaeltaja";
if (p >= 2500) s = "Aikuinen";
if (p >= 3000) s = "Partiojohtaja";
if (p >= 3500) s = "Lintukansaa";
if (p >= 4000) s = "XXX";
if (p >= 4500) s = "XXX";
if (p >= 5000) s = "XXX";
if (p >= 5500) s = "XXX";
if (p >= 6000) s = "XXX";
if (p >= 6500) s = "XXX";
if (p >= 7000) s = "XXX";
if (p >= 7500) s = "XXX";
if (p >= 8000) s = "XXX";
if (p >= 8500) s = "XXX";
if (p >= 9000) s = "XXX";
if (p >= 9500) s = "XXX";
if (p >= 11000) s = "XXX";
if (p >= 12500) s = "XXX";
if (p >= 15000) s = "XXX XXX";
if (p >= 17500) s = "XXX XXX";
if (p >= 20000) s = "XXX XXX";
if (p >= 25000) s = "XXX";
return s;
}


function jaa(p)
{
var s = juojana(p);
var viesti;
if (p >= 0)
{
	viesti = 'Sain partioindeksikseni ' + p + ' ja olen siis tasoltani ' + s;
} else {
	viesti = "Ansaitsin Suuren Ansioristin indeksini ollessa " + (p*-1) + "!";
}

FB.ui(
  {
    method: 'feed',
    name: 'Partiopolku',
    link: 'http://tuisku.pohjanmaa.partio.fi/2048/',
    picture: 'https://scontent-b-fra.xx.fbcdn.net/hphotos-prn2/t1.0-9/1544351_555767371187554_1617883906_n.png',
    caption: '' + viesti + '',
    description: 'Selvi&auml;tk&ouml; Partiopolun loppuun asti? Partioaiheinen klooni 2048-pelistä'
  },
  function(response) {
    if (response && response.post_id) {
      alert('Julkaisu onnistui.');
    } else {
      alert('Tulosta ei julkaistu.');
    }
  }
);

}
