const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const writeStream = fs.createWriteStream("post.csv");

// headers
writeStream.write("Title,Link,Date \n");

request("https://www.theguardian.com/international", (error,
response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        
        $('.fc-item__title', html).each((i, el) => {
            const title = $(el)
              .find('h3')
              .text();
            
            const link = $(el)
              .find('a')
              .attr('href');
            
            // write to csv
            writeStream.write(`${title}, ${link} \n`);
        });
        console.log("scraping done!");
    }
});