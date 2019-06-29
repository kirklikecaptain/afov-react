import React from 'react';

const JsonLd = ({ json }) => {
  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
};

export default JsonLd;
