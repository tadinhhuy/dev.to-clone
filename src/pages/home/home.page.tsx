import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <div className="text-3xl font-bold underline">Home Page</div>
      <Link to="/user">User</Link>
    </>
  );
};

export default Home;
