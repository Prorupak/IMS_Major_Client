import { useLayoutEffect } from 'react';

const useDocumentTitle = (title: string) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = ` ${title} - Hamro Inventory`;
    } else {
      document.title = 'IMS | Dashboard';
    }
  }, [title]);
};

export default useDocumentTitle;
