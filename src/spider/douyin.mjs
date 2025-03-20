import axios from "axios";
import moment from "moment";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const douyinDir = path.join(__dirname, '../../raw/douyin');

const douyinFilePath = path.join(douyinDir, `${moment().format('YYYY-MM-DD')}.json`);

if (!fs.existsSync(douyinFilePath)) {

    const directory = path.dirname(douyinFilePath);

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
    fs.writeFileSync(douyinFilePath, '[]');
}

const 抖音热榜 = 'https://aweme.snssdk.com/aweme/v1/hot/search/list/';


axios.get(抖音热榜).then(async res => {

    const todayDouyinString = fs.readFileSync(douyinFilePath, 'utf-8');
    const todayDouyin = JSON.parse(todayDouyinString) || [];

    res.data.data?.word_list?.forEach(i => {
        if (!todayDouyin.find(t => t.title === i.word)) {
            todayDouyin.push({
                title: i.word,
                href: `https://www.douyin.com/hot/${i.sentence_id}`,
                create_time: moment().valueOf(),
            })
        }
    });


    if (todayDouyin.length) {
        fs.writeFileSync(douyinFilePath, JSON.stringify(todayDouyin, null, 4));
    }

})

