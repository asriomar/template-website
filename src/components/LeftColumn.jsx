// LeftColumn.js


function LeftColumn() {
  return (
    <div className="w-full sm:w-1/6 bg-gray-200 ">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4 text-center mt-4">Projects</h2>
        <ul className='text-center'>
          <li className="mb-2"><a href="#">Portfolio</a></li>
          <li className="mb-2"><a href="#">Project 1</a></li>
          <li className="mb-2"><a href="#">Project 2</a></li>
          {/* Add more project links as needed */}
        </ul>
      </div>
    </div>
  );
}

export default LeftColumn;
