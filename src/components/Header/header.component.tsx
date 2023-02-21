import React from 'react';

const Header = () => {
  return (
    <div className="h-14 border border-bottom ">
      <div className="mx-20 px-4 flex column justify-between">
        <div className="flex">
          <div>Logo</div>
          <div>search box</div>
        </div>
        <div className="flex">
          <div>Login</div>
          <div>Create account</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
