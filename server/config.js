let siteUrl, dbHost;

const dev = true;

if ( dev ) {
	siteUrl = 'http://localhost:3000';
	dbHost = 'mongodb://kesimm:Quince27@ds131971.mlab.com:31971/projectthree';
} else {
	siteUrl = '';
	dbHost = process.env.LIVE_DB;
}

module.exports = { siteUrl, dbHost };
