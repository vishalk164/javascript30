// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [{
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955
},
{
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727
},
{
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642
},
{
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934
},
{
    first: 'Johannes',
    last: 'Kepler',
    year: 1571,
    passed: 1630
},
{
    first: 'Nicolaus',
    last: 'Copernicus',
    year: 1473,
    passed: 1543
},
{
    first: 'Max',
    last: 'Planck',
    year: 1858,
    passed: 1947
},
{
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979
},
{
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852
},
{
    first: 'Sarah E.',
    last: 'Goode',
    year: 1855,
    passed: 1905
},
{
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968
},
{
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909
}
];

document.getElementById('inventors').innerHTML = JSON.stringify(inventors);

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
    'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
    'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
    'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
    'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
    'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
    'Blair, Tony', 'Blake, William'
];

document.getElementById('people').innerHTML = JSON.stringify(people);

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filter = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
document.getElementById('one').innerHTML = JSON.stringify(filter);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const map = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
document.getElementById('two').innerHTML = JSON.stringify(map);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to
const birthdate = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
document.getElementById('three').innerHTML = JSON.stringify(birthdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
document.getElementById('four').innerHTML = JSON.stringify(totalYears);

// 5. Sort the inventors by years lived
const yearsLived = inventors.sort((a, b) => (a.passed - a.year) < (b.passed - b.year) ? 1 : -1);
document.getElementById('five').innerHTML = JSON.stringify(yearsLived);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortPeople = people.sort((a, b) => {
    const [lastA, firstA] = a.split(', ');
    const [lastB, firstB] = b.split(', ');

    return lastA > lastB ? 1 : -1;
});
document.getElementById('seven').innerHTML = JSON.stringify(sortPeople);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car',
    'truck'
];

document.getElementById('transportation').innerHTML = JSON.stringify(data);

const sum = data.reduce((object, item) => {
    if (!object[item]) {
        object[item] = 0;
    }
    object[item]++;

    return object;
}, {});

document.getElementById('eight').innerHTML = JSON.stringify(sum);