import React from 'react';

const ArticleLayout = () => {
  return (
    <div className="grid grid-cols-7">
      <div>Left side</div>
      <div className="col-span-4">Article content</div>
      <div className="col-span-2">Right side</div>
    </div>
  );
};

export default ArticleLayout;
