import clsx from 'clsx';
import { Link, LinkProps } from 'react-router-dom';
import {
  HomeIcon,
  ListingIcon,
  PodcastIcon,
  VideosIcon,
  TagIcon,
  FaqIcon,
  ShoppingIcon,
  HeartIcon,
  DevIcon,
  ContactIcon,
} from '@/components/icons';
import { PUBLIC_ROUTES } from '@/constants/routes/routes';
import CardPost from './components/card-post';

const NavigationLink = ({
  label,
  icon,
  to,
  ...rest
}: {
  label: string;
  icon: JSX.Element;
  to: string;
} & LinkProps) => {
  return (
    <li>
      <Link
        to={to}
        className={clsx(
          'flex rounded-md py-2 px-4 text-neutral-700',
          'hover:bg-indigo-100 hover:text-blue-800 hover:underline hover:decoration-blue-800'
        )}
        {...rest}
      >
        <span className="pr-2">{icon}</span>
        {label}
      </Link>
    </li>
  );
};

const LeftSidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <NavigationLink icon={<HomeIcon />} label="Home" to={PUBLIC_ROUTES.HOME} />
          <NavigationLink icon={<ListingIcon />} label="Listing" to={PUBLIC_ROUTES.LISTINGS} />
          <NavigationLink icon={<PodcastIcon />} label="Podcasts" to={PUBLIC_ROUTES.PODCAST} />
          <NavigationLink icon={<VideosIcon />} label="Videos" to={PUBLIC_ROUTES.VIDEOS} />
          <NavigationLink icon={<TagIcon />} label="Tags" to={PUBLIC_ROUTES.TAGS} />
          <NavigationLink icon={<FaqIcon />} label="FAQ" to={PUBLIC_ROUTES.FAQ} />
          <NavigationLink
            icon={<ShoppingIcon />}
            label="Forem Shop"
            to="https://shop.forem.com/"
            target="_blank"
          />
          <NavigationLink icon={<HeartIcon />} label="Sponsors" to={PUBLIC_ROUTES.SPONSORS} />
          <NavigationLink icon={<DevIcon />} label="About" to={PUBLIC_ROUTES.ABOUT} />
          <NavigationLink icon={<ContactIcon />} label="Contact" to={PUBLIC_ROUTES.CONTACT} />
          <NavigationLink icon={<ListingIcon />} label="Guides" to={PUBLIC_ROUTES.GUIDES} />
          <NavigationLink
            icon={<ListingIcon />}
            label="Software Comparisons"
            to={PUBLIC_ROUTES.SOFTWARE_COMPARISONS}
          />
        </ul>
      </nav>
    </aside>
  );
};

const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <LeftSidebar />
        </div>
        <main className="col-span-2">
          <CardPost title="Author Name" date="date" />
          <CardPost title="Author Name" date="date" />
          <CardPost title="Author Name" date="date" />
        </main>
        <div className="col-span-1">Right side</div>
      </div>
    </>
  );
};

export default HomePage;
