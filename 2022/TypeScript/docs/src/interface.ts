interface CraftBeer {
  (beer: string): string;
  brand: string;
  brew(): void;
}

function myBeer(): CraftBeer {
  const my = function (beer: string) {} as CraftBeer;
  my.brand = 'Beer Kitchen';
  my.brew = function () {};

  return my;
}

const brewedBeer = myBeer();
brewedBeer('My First Beer');
brewedBeer.brand = 'Pangyo Craft';
brewedBeer.brew();
