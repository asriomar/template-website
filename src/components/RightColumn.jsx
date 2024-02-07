// RightColumn.js


function RightColumn() {
  return (
    <div className=" w-full sm:w-1/6 bg-gray-200">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4 text-center">Social Media</h2>
        <ul>
          <li className="mb-2 text-center"><a href="#">LinkedIn</a></li>
          <li className="mb-2 text-center"><a href="#">GitHub</a></li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </div>
  );
}

export default RightColumn;
