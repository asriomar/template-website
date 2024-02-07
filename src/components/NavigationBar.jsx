// NavigationBar.js


function NavigationBar() {
  return (
    <nav className="bg-gray-800 p-4 font-mono gap-3 text-base">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">My Website</div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Get in Touch</a>
          <a href="#" className="text-white hover:text-gray-300">Project</a>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
