let siteUrl, dbHost;

const dev = true;

if ( dev ) {
	siteUrl = 'http://localhost:3000';
	dbHost = 'mongodb://kesimm:Quince27@ds131971.mlab.com:31971/projectthree';
} else {
	siteUrl = 'https://shrouded-garden-69575.herokuapp.com/';
	dbHost = 'mongodb://heroku_pbbdj41v:Quince27>@ds151180.mlab.com:51180/heroku_pbbdj41v';
}

module.exports = { siteUrl, dbHost };
