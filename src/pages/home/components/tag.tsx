import clsx from 'clsx';
import { Link } from 'react-router-dom';
import GhostButton from './ghost-button';

const Tag = ({ tagName }: { tagName: string }) => {
  return (
    <GhostButton
      className={clsx('text-sm text-[#404040]', 'hover:bg-[#00000009] hover:text-[#404040]')}
    >
      <Link to="">#{tagName}</Link>
    </GhostButton>
  );
};

export default Tag;
