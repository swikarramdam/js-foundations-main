// Parent Class
class Vehicle {
  constructor([wheelTotal, energySource, manufacturer]) {
    this.wheelTotal = wheelTotal;
    this.energySource = energySource;
    this.manufacturer = manufacturer;
    this.isOn = false;
  }
  getSpec(key) {
    if (this.hasOwnProperty(key)) {
      return this[key];
    }
    return undefined;
  }
}

// Tesla Subclass
class Tesla extends Vehicle {
  constructor([
    milesPerCharge,
    model,
    chargePercentage,
    minutesToCharge,
    [[wheelTotal, energySource, manufacturer]],
    // double array destructure
  ]) {
    super([wheelTotal, energySource, manufacturer]);

    this.milesPerCharge = milesPerCharge;
    this.model = model;
    this.chargePercentage = chargePercentage;
    this.minutesToCharge = minutesToCharge;
  }

  minutesToFullCharge(currentChargePercentage) {
    const remaining =
      (100 - currentChargePercentage) * (this.minutesToCharge / 100);
    return `${remaining} minutes until the charge is full!`;
  }
}
