import clsx from 'clsx';
import { memo } from 'react';
import { GrNotification } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Avatar from '@/components/avatar';
import Button from '@/components/button';
import { PUBLIC_ROUTES } from '@/constants/routes/routes';
import { useAuth } from '@/hooks';
import SearchInput from './search-input.comp';

const LOGO =
  'https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png';

const avatarMock =
  'data:image/jpeg;base64,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';

const Header = () => {
  const { isAuthenticated } = useAuth();
  const handleSearch = (value: string) => {
    console.log('search: ', value);
  };

  return (
    <header className="border-bottom fixed top-0 h-[3.6rem] w-full border bg-white shadow-sm">
      <div className="column mx-[106px] flex h-full justify-between px-[16px]">
        <div className="flex items-center">
          <Link to={PUBLIC_ROUTES.HOME}>
            <img src={LOGO} alt="logo" loading="lazy" className="h-[2.5rem]" />
          </Link>
          <div className="w-[420px]">
            <SearchInput onSearch={handleSearch} />
          </div>
        </div>
        {isAuthenticated ? (
          <div className="flex items-center">
            <Button variant="outlined" className={clsx(`mr-2 `)}>
              Create Post
            </Button>
            <div className={clsx('mx-1 cursor-pointer rounded-md p-2', 'hover:bg-indigo-100')}>
              <GrNotification className="text-xl" />
            </div>
            <Avatar src={avatarMock} alt="avatar" />
          </div>
        ) : (
          <div className="flex items-center">
            <Button variant="text" className={clsx(`mr-2 `)}>
              Log in
            </Button>
            <Button variant="outlined" className={clsx(`mr-2 `)}>
              Create account
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
