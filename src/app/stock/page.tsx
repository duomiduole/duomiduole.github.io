
import Nav from '@/components/nav';
import Futures from './Futures';
import IndexInfo from './IndexInfo';
import MainInfo from './MainInfo';
import Chengjiaoe from './Chengjiaoe';
import OverviewPE from './OverviewPE';
import Gold from './Gold';


const Index = () => {
  return <div>
    <Nav />
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        padding: 10,
        paddingBottom: 40,
      }}
    >
      <IndexInfo />
      <MainInfo />
      <Chengjiaoe />
      <OverviewPE />
      <Gold />
      <Futures />
    </div>
  </div>
}


export default Index;
