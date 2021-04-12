
/// THIS IS ALL ABOUT THE SCOPE OF THINGS


const a = 1;

function test() {
  const a = 2;
  console.log(`value of a is: ${a}`)
}

test()
console.log(`value of a is: ${a}`)

{
  const a = 3
  console.log(`value of a is: ${a}`)
}