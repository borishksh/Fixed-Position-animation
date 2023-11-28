import Cube from '../components/Cube';
import '../styles/Home.module.css';

const Home = () => {

  return (
    <div>
      <Cube color={"green"} size={20} />
      <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
    </div>
  );
};

export default Home;