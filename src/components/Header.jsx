function Header({ text }) {
  return (
    <>
      <div className="bg-gray=200 rounded flex justify-center h6 items-center m-2">
        <h1>
          {text}
        </h1>
      </div>
    </>
  );
}

export default Header;
