const sdk = require('api')('@developers/v2.0#5p9er16kx9dx3ib');
require('dotenv').config();

sdk.auth(`${process.env['README_TOKEN']}`)
sdk.createChangelog({
  hidden: false,
  title: `${process.env['RELEASE_NAME']} :${process.env['RELEASE_TITLE']}`,
  body: `${process.env['RELEASE_BODY']}`,
})
  .then(res => console.log(res))
  .catch(err => console.error(err));