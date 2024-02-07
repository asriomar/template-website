// Layout.js


function Layout({ children }) {
  return (
    <div className="container-fluid mx-auto flex flex-col sm:flex-row">
      {children}
    </div>
  );
}

export default Layout;
