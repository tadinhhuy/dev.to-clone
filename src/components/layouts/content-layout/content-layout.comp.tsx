import { Link } from 'react-router-dom';

const ContentLayout = () => {
  return (
    <div className="mx-20 grid grid-cols-4">
      <div>Menu</div>
      <div className="col-span-2">
        <Link to={'/article'}>Go to article</Link>
      </div>
      <div>Right side</div>
    </div>
  );
};

export default ContentLayout;
