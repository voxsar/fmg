var t1 = {
  isbn: '9781597226769',
  name: 'Salman Nizamdeen',
  gender: 'Male',
  operatingcity: 'Colombo',
  educationlevel: [
    'Government',
    'London',
    'Under',
    'Post'
  ],
  visit_type: [
    'home visit',
    'classroom',
    'group house'
  ],
  tags: ['book', 'inspirational']
};

var t2 = {
  isbn: '97815972267',
  name: 'Sabith Nizamdeen',
  gender: 'Female',
  operatingcity: 'Gampaha',
  educationlevel: [
    'Government',
    'London'
  ],
  visit_type: [
    'home visit',
    'group house'
  ],
  tags: ['book', 'inspirational']
};

var t3 = {
  isbn: '9781597226',
  name: 'Miyuru Dharmage',
  gender: 'Male',
  operatingcity: 'Katubedda',
  educationlevel: [
    'Under',
    'Post'
  ],
  visit_type: [
    'classroom',
    'group house'
  ],
  tags: ['book', 'inspirational']
};

var search = new JsSearch.Search('isbn');
search.addIndex('name');
search.addIndex('gender');
search.addIndex('operatingcity');
search.addIndex(['educationlevel']);
search.addIndex('visit_type');

search.addDocuments([t1, t2, t3]);

console.log(search.search('Miyuru'));