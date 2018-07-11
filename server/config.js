let siteUrl, dbHost;

const dev = true;

if ( dev ) {
	siteUrl = 'http://localhost:3000';
	dbHost = 'mongodb://kesimm:Quince27@ds233581.mlab.com:33581/heroku_bs8zhnfp';
} else {
	siteUrl = 'https://shrouded-garden-69575.herokuapp.com/';
	dbHost = process.env.LIVE_DB;
}

module.exports = { siteUrl, dbHost };
