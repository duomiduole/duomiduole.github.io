import axios from "axios";
import moment from "moment";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const zhihuDir = path.join(__dirname, '../../raw/zhihu');

const zhihuFilePath = path.join(zhihuDir, `${moment().format('YYYY-MM-DD')}.json`);

if (!fs.existsSync(zhihuFilePath)) {

    const directory = path.dirname(zhihuFilePath);

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
    fs.writeFileSync(zhihuFilePath, '[]');
}

const 知乎热榜 = 'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total?limit=50&desktop=true';


axios.get(知乎热榜).then(async res => {

    const todayZhihuString = fs.readFileSync(zhihuFilePath, 'utf-8');
    const todayZhihu = JSON.parse(todayZhihuString) || [];

    res.data.data?.forEach(i => {
        if (!todayZhihu.find(t => t.title === i.target?.title)) {
            todayZhihu.push({
                title: i.target?.title,
                href: `https://www.zhihu.com/question/${i.target?.id}`,
                create_time: moment().valueOf(),
            })
        }
    });

    if (todayZhihu.length) {
        fs.writeFileSync(zhihuFilePath, JSON.stringify(todayZhihu, null, 4));
    }

})

