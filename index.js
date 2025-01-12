// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    return drivers.push(name);
}

function destructivelyPrependDriver(name){
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    return drivers.pop();
}

function destructivelyRemoveFirstDriver(){
    return drivers.shift();
}

function appendDriver(name){
    let newDrivers = [...drivers, name];
    return newDrivers;
}

function prependDriver(name){
    let newDrivers = [name, ...drivers];
    return newDrivers;
}

function removeLastDriver(){
    let newDrivers = drivers.slice(0, drivers.length -1);
    return newDrivers;
}

function removeFirstDriver(){
    let newDrivers = drivers.slice(1, drivers.length);
    return newDrivers;
}