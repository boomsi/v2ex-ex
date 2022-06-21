import Header from '../components/header'
import "./Container.less";

function Container() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <main></main>
        <aside></aside>
      </div>
      <footer className="footer"></footer>
    </div>
  );
}

export default Container;
