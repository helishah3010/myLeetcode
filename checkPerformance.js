//this does not give accurate results but just posting it here until i find best way

const t0 = performance.now();
//do something
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

