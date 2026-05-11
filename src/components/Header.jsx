function Header({ text }) {
  return (
    <div className="border bg-gray-100 p-4 flex justify-center items-center">
      <h1 className=" font-bold text-xl">
        {text}
      </h1>
    </div>
  );
}

export default Header;
