const sdk = require('api')('@developers/v2.0#5p9er16kx9dx3ib');
require('dotenv').config();

sdk.auth(`NqT6pqeHehWcFJ4SbPiy5t0LCvcL2eMp`)
sdk.createChangelog({
  hidden: false,
  title: `v2.3`,
  body: `release version 2.3`,
})
  .then(res => console.log(res))
  .catch(err => console.error(err));