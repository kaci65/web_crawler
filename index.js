const request = require("request");
const cheerio = require("cheerio");

request("https://demotbs.blogspot.com/", (error,
response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        //const heading = $('.large-12, .columns');
        //console.log(heading.html);
        //console.log(heading.text);

        //const output = heading.find('h1').text();
        //const output = heading.children('h1').text();
        //const output = heading.children('h1').next().text();
        //const output = heading.children('h1').parent().text();
        //console.log(output);

        // fetch navigation stuff
        $('li, .ripple_link').each((i, el) => {
            const item = $(el).text();
            const link = $(el).attr('href');

            console.log(link);
        });
    }
});