import Crawler from "crawler";
import moment from "moment";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const weiboDir = path.join(__dirname, '../../raw/weibo');

const weiboFilePath = path.join(weiboDir, `${moment().format('YYYY-MM-DD')}.json`);

if (!fs.existsSync(weiboFilePath)) {
    const directory = path.dirname(filePath);

      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }
      fs.writeFileSync(filePath, '');
}

const 微博热搜 = 'https://s.weibo.com/top/summary?cate=realtimehot';

const c = new Crawler({
    maxConnections: 10,
});

c.add([{
    uri: 微博热搜,
    headers: {
        cookie: `SUB=_2AkMVK2Evf8NxqwJRmP8dxGrkbol3zgrEieKjd5D0JRMxHRl-yT8XqkgNtRB6PqtPwQPPOHx_arSEYNNE_lg31R7Lc52J; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WhmsWd.MkuuwY1iMg1Q-PzK; _s_tentry=passport.weibo.com; Apache=3773639484360.889.1652026906266; SINAGLOBAL=3773639484360.889.1652026906266; ULV=1652026906280:1:1:1:3773639484360.889.1652026906266:`
    },
    callback: async function (error, res, done) {
        if (error) {
            console.log(error);
            return;
        }

        const todayWeiboString = fs.readFileSync(weiboFile, 'utf-8');
        const todayWeibo = JSON.parse(todayWeiboString) || [];

        const $ = res.$;

        $('#pl_top_realtimehot tbody tr')?.map?.((index, el) => {
            const title = $(el).find('a').text();
            if (!todayWeibo?.find?.(t => t.title === title)) {
                todayWeibo.push({
                    title,
                    href: `https://s.weibo.com${$(el).find('a').attr('href')}`,
                    tag: $(el).find('.icon-txt').text(),
                    create_time: moment().valueOf(),
                })
            }
        });

        if (todayWeibo.length) {
            fs.writeFileSync(weiboFile, JSON.stringify(todayWeibo, null, 4));
        }
        done();
    }
}]);