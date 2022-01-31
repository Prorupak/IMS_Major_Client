import { useLayoutEffect } from 'react';

const useDocumentTitle = (title: string) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = `IMS | ${title}`;
    } else {
      document.title = 'IMS | Dashboard';
    }
  }, [title]);
};

export default useDocumentTitle;
