import { useEffect } from 'react';

const useTrackPageView = () => {
  useEffect(() => {
    // trim trailing slash to avoid dupes in GA - omit for home/index
    const pagePath =
      window.location.pathname === '/'
        ? '/' + window.location.search
        : window.location.pathname.replace(/\/$/, '') + window.location.search;

    // send page view to segment
    analytics.page({
      title: window.document.title,
      url: window.location.href,
      path: pagePath
    });

    if (process.env.NODE_ENV === 'development') console.log('Track: ', pagePath);
  }, []);
};

export default useTrackPageView;
