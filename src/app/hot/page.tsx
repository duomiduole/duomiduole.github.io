import Nav from '@/components/nav';
import moment from 'moment';

const weiboData = require(`../../../raw/weibo/${moment().format('YYYY-MM-DD')}.json`);



const Index = () => {
    return <div>
        <Nav />
        {weiboData?.map?.(i => {
            return <div>{i.title}</div>
        })}
    </div>
}


export default Index;
