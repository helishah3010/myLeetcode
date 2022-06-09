//Get array which has all the ids

var officers = [
    { id: 1, name: 'Captain Piett' },
    { id: 1, name: 'General Veers' },
    { id: 1, name: 'Admiral Ozzel' },
    { id: 1, name: 'Commander Jerjerrod' }
  ];
  /*
  With Foreach
  var officerId = [];
  officers.forEach(element => {
    officerId.push(element.id);
  });*/
  var officerId = officers.map(element => {
    return element.id;
  });
  
  //get sum of all ids
  var total = officers.reduce((sum, e) => {
  return sum + e.id
  },0)
  console.log(total);