function myBeer() {
    const my = function (beer) { };
    my.brand = 'Beer Kitchen';
    my.brew = function () { };
    return my;
}
const brewedBeer = myBeer();
brewedBeer('My First Beer');
brewedBeer.brand = 'Pangyo Craft';
brewedBeer.brew();
