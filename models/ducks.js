const Duck = require('../Duck');

class Patos extends Duck {
    mallardDuck() {
        console.log('Pato Real');
        const mallard = new Duck();
        mallard.setFlyBehavior().FlyWithWings();
        mallard.setFlyBehavior().fly();
        mallard.setQuackBehavior().quack();
    }

    woodDuck() {
        console.log('Pato de Goma ');
        const woodDuck = new Duck();
        woodDuck.setFlyBehavior().FlyNoWay();
        woodDuck.setQuackBehavior().noQuack();
    }
}

module.exports = Patos;
