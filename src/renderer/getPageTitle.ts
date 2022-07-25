const getPageTitle = (pageContext: {
  exports: { documentProps?: { title: string } };
  documentProps?: { title: string };
}): string => {
  // For dynamic titles (defined in the `export addContextProps()` of the page's `.page.server.js`)
  // return (pageContext.documentProps || {}).title || 'vite-react-chakra-starter';

  // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
  return (
    (pageContext.exports.documentProps || {}).title ||
    "vite-react-chakra-starter"
  );
};

export default getPageTitle;
