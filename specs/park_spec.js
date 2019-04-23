const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaur5;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Velociraptor', "Goats", 75);
    dinosaur2 = new Dinosaur("Brontosaurus", "Leaves", 20);
    dinosaur3 = new Dinosaur("Diplodocus", "Plants", 60);
    dinosaur4 = new Dinosaur("Gigantosaurus", "Meat", 95);
    dinosaur5 = new Dinosaur("Stegosaurus", "Grass", 35);
    dinosaur6 = new Dinosaur("Stegosaurus", "Grass", 35);
    park = new Park("Jurassic Park", 250);
  });


  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function () {
    const actual = park.price;
    assert.strictEqual(actual, 250);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaurToPark(dinosaur1);
    const actual = [dinosaur1];
    assert.deepStrictEqual(park.dinosaurs, actual)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaurToPark(dinosaur1);
    park.addDinosaurToPark(dinosaur2);
    park.removeDinosaurFromPark();
    const actual = [dinosaur1];
    assert.deepStrictEqual(park.dinosaurs, actual);
  });

  it('should be able to find the dinosaur that attracts the most visitors,', function () {
    
  });

  // it('should be able to find all dinosaurs of a particular species', function () {
  //   park.addDinosaurToPark(dinosaur1);
  //   park.addDinosaurToPark(dinosaur2);
  //   park.addDinosaurToPark(dinosaur5);
  //   park.addDinosaurToPark(dinosaur6);
  //
  //   const expected = [dinosaur5, dinosaur6];
  //   assert.strictEqual(park.findParticularSpecies('Stegosaurus'), expected);
  // });

 it('should be able to calculate total number of visitors per day', function () {
   park.addDinosaurToPark(dinosaur1);
   park.addDinosaurToPark(dinosaur2);
   park.addDinosaurToPark(dinosaur3);
   // park.totalVisitorsPerDay();
   const expected = 155;
   assert.strictEqual(park.totalVisitorsPerDay(), expected);
 });

 it('should be able to calculate the total number of visitors per year', function () {
   park.addDinosaurToPark(dinosaur1);
   park.addDinosaurToPark(dinosaur2);
   park.addDinosaurToPark(dinosaur3);
   // park.totalVisitorsPerDay();
   const expected = 56575;
   assert.strictEqual(park.totalVisitorsPerYear(), expected);
 })

 it('should be able to calculate the total ticket revenue per year', function () {
   park.addDinosaurToPark(dinosaur1);
   park.addDinosaurToPark(dinosaur2);
   park.addDinosaurToPark(dinosaur3);
   // park.totalVisitorsPerDay();
   const expected = 14143750;
   assert.strictEqual(park.totalRevenuePerYear(), expected);
 })

  it('should be able to remove all dinosaurs of a particular species', function () {

  });

});
