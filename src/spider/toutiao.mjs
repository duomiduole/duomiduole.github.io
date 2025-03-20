import axios from "axios";
import moment from "moment";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const toudiaoDir = path.join(__dirname, '../../raw/toutiao');

const toudiaoFilePath = path.join(toudiaoDir, `${moment().format('YYYY-MM-DD')}.json`);

if (!fs.existsSync(toudiaoFilePath)) {

    const directory = path.dirname(toudiaoFilePath);

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
    fs.writeFileSync(toudiaoFilePath, '[]');
}

const 头条热榜 = 'https://www.toutiao.com/hot-event/hot-board/?origin=toutiao_pc';


axios.get(头条热榜).then(async res => {

    const todayToutiaoString = fs.readFileSync(toudiaoFilePath, 'utf-8');
    const todayToutiao = JSON.parse(todayToutiaoString) || [];

    res.data.data?.forEach(i => {
        if (!todayToutiao.find(t => t.title === i.Title)) {
            todayToutiao.push({
                title: i.Title,
                query_word: i.QueryWord,
                href: i.Url,
                create_time: moment().valueOf(),
            })
        }
    });

    res.data.fixed_top_data?.forEach(i => {
        if (!todayToutiao.find(t => t.title === i.Title)) {
            todayToutiao.push({
                title: i.Title,
                query_word: i.QueryWord,
                href: i.Url,
                create_time: moment().valueOf(),
            })
        }
    });

    if (todayToutiao.length) {
        fs.writeFileSync(toudiaoFilePath, JSON.stringify(todayToutiao, null, 4));
    }

})

