const Navbar = () => {
  return (
    <>
      <nav className="w-full h-14 mt-0 bg-slate-200 flex justify-end">
        <ul className="flex w-1/3 justify-center items-center gap-20">
          <li className="font-bold hover:cursor-pointer hover:text-slate-500">Nostros</li>
          <li className="font-bold hover:cursor-pointer hover:text-slate-500">Data</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
