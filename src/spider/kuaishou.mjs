import Crawler from "crawler";
import moment from "moment";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const kuaishouDir = path.join(__dirname, '../../raw/kuaishou');

const kuaishouFilePath = path.join(kuaishouDir, `${moment().format('YYYY-MM-DD')}.json`);

if (!fs.existsSync(kuaishouFilePath)) {

    const directory = path.dirname(kuaishouFilePath);

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
    fs.writeFileSync(kuaishouFilePath, '[]');
}

const 快手短视频热榜 = 'https://www.kuaishou.com/brilliant';

const c = new Crawler({
    maxConnections: 10,
});

c.add([{
    uri: 快手短视频热榜,
    callback: async function (error, res, done) {
        if (error) {
            console.log(error);
            return;
        }
        const $ = res.$;

        const html = $.html();

        const reg = /VisionHotRankItem:([^"'{},]+)/gi;
        const data = Array.from(new Set(html.match(reg)?.map(i => {
            return i?.replace('VisionHotRankItem:', '');
        })));

        if (!data?.length) return;

        const todayKuaishouString = fs.readFileSync(kuaishouFilePath, 'utf-8');
        const todayKuaishou = JSON.parse(todayKuaishouString) || [];

        data?.forEach(i => {
            if (!todayKuaishou.find(t => t.title === i)) {
                todayKuaishou.push({
                    title: i,
                    href: `https://www.kuaishou.com/search/video?searchKey=${i}`,
                    create_time: moment().valueOf(),
                })
            }
        });

        if (todayKuaishou.length) {
            fs.writeFileSync(kuaishouFilePath, JSON.stringify(todayKuaishou, null, 4));
        }
        done();
    }
}]);