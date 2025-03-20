import Crawler from "crawler";
import moment from "moment";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const baiduDir = path.join(__dirname, '../../raw/baidu');

const baiduFilePath = path.join(baiduDir, `${moment().format('YYYY-MM-DD')}.json`);

if (!fs.existsSync(baiduFilePath)) {

    const directory = path.dirname(baiduFilePath);

      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }
      fs.writeFileSync(baiduFilePath, '[]');
}

const 百度热搜 = 'https://top.baidu.com/board?tab=realtime';

const c = new Crawler({
    maxConnections: 10,
});

c.add([{
    uri: 百度热搜,
      callback: async function (error, res, done) {
        if (error) {
          console.log(error);
          return;
        }
        const $ = res.$;

        const todayBaiduString = fs.readFileSync(baiduFilePath, 'utf-8');
        const todayBaidu = JSON.parse(todayBaiduString) || [];

        $('main > .container:last-child > div > div:last-child > div')?.map((index, el) => {
          const title = $(el).find('div:last-child a .c-single-text-ellipsis')?.text()?.trim();
          if (!todayBaidu.find(t => t.title === title)) {
            todayBaidu.push({
              title,
              href: $(el).find('div:last-child a').attr('href'),
              create_time: moment().valueOf(),           
         })
          }
        });

        if (todayBaidu.length) {
            fs.writeFileSync(baiduFilePath, JSON.stringify(todayBaidu, null, 4));
        }
        done();
    }
}]);