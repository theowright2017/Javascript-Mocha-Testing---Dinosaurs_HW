const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
}

Park.prototype.addDinosaurToPark = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurFromPark = function() {
  this.dinosaurs.pop();
};

Park.prototype.totalVisitorsPerDay = function() {
  let total = 0;
  for (const dino of this.dinosaurs) {
    total += dino.guestsAttractedPerDay;
  }
  return total;
};

Park.prototype.totalVisitorsPerYear = function() {
  let total = 0;
  for (const dino of this.dinosaurs) {
    total += dino.guestsAttractedPerDay;
  }
  return total*365;
};

Park.prototype.totalRevenuePerYear = function() {
  let total = 0;
  for (const dino of this.dinosaurs) {
    total += dino.guestsAttractedPerDay;
  }
  return total*365*this.price;
};

Park.prototype.attractsMostVisitors = function () {

};

// Park.prototype.findParticularSpecies = function(species) {
//   const arrayOfSpecies = [];
//   for (const dino of this.dinosaurs ) {
//     if (dino.species == species) {
//       arrayOfSpecies.push(dino)
//     }
//   }
// };



module.exports = Park;
