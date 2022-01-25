/**
  These exercises aim to get you familiar with object syntax. Hopefully it doesn't trigger
  highschool biology flashbacks.
 */

// You can think of an object like a python dictionary or tree
// They usually have lots of deeply nested data
const TreeOfLife = {
  // Objects can contain basic data types ...
  rank: 'domain',
  archae: 'archaebacteria',
  bacteria: 'eubacteria',
  // ... but they can also contain nested objects, arrays, functions, or anything else
  eukarya: {
    rank: 'kingdom',
    plantae: ['my succulent', 'tomatoes', 'big trees'],
    animalia: {
      rank: 'phylum',
      birds: 'work for the bourgeoisie.',
      humans: ['you', 'me', 'us', 'them', 'everyone!'],
    },
    fungi: {
      guy: "he's fun",
    },
    protista: 'What even is this?',
  },
  // The best domain's key
  bestDomain: 'archae',
}

//TODO -- Write a function which returns the domain "archae"
const getArchae = () => {
  return TreeOfLife.archae; 
}

// TODO -- Write a function which returns the array of humans
const getHumans = () => {
  return TreeOfLife.eukarya.animalia.humans;
}

// TODO -- Write a function which adds a name to the array of humans
const addHuman = (name) => {
  return TreeOfLife.eukarya.animalia.humans.push(name);
}
// push function
// TODO -- Write a fuction which returns the data representing the "bestDomain"
const getBestDomain = () => {
let best = TreeOfLife.bestDomain;
  return TreeOfLife[best];
// archae string points to other property
}
// TODO -- Write a function which sets the best domain to "eukarya" and then returns the "bestDomain"
const setGetBestDomain = () => {
  TreeOfLife.bestDomain = 'eukarya';
  return TreeOfLife[TreeOfLife.bestDomain];
}

/**
  TODO
  Write a function using destructuring and object renaming which returns an array with all the ranks like:
  (Don't hardcode it, pull it from the TreeOfLife)
  [
    'domain',
    'kingdom',
    'phylum',
  ]
 */
const getRanks = () => {
  for (const property in TreeOfLife) {
    if (typeof obj[key] === 'object') {
      iterate(obj[key])
    console.log(`${property}`);
    }
  }
}

// TODO -- Write a function which uses destructuring and the rest operator to return everything BUT the "eukarya"
const noEukaryotes = () => {}

module.exports = {
  getArchae,
  getHumans,
  addHuman,
  getBestDomain,
  setGetBestDomain,
  getRanks,
  noEukaryotes,
  TreeOfLife,
}


// elements.forEach(function(element){
//   // do something with individual grade
//       console.log(element);
//   })