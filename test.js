class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

    const plop = 2020;
    if (year >= plop) {
      this.plop(this);
    }
  }

  plop(item) {
    alert(JSON.stringify(item));
  }
}

function codeAddress() {
  const car = new Car("Tesla", 2021);
}
window.onload = codeAddress;