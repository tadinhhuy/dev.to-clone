import CardPost from './components/card-post';
import Layout from './home.layout';

const HomePage = () => {
  return (
    <Layout>
      <CardPost title="Author Name" date="date" />
      <CardPost title="Author Name" date="date" />
      <CardPost title="Author Name" date="date" />
    </Layout>
  );
};

export default HomePage;
