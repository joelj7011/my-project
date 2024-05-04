

const Navbar = () => {
    return (
        <header className="sticky top-0 w-[100%] z-99 bg-[#103928] block">
            <nav className="mx-auto max-w-screen-xl px-[39px] py-[39px] flex items-center justify-between">
                <div className="font-[800]">
                    <a href="">
                        blueorb
                    </a>
                </div>
                <div className="flex gap-6 text-[16px]">
                    <a href="" className="text-white">About</a>
                    <a href="" className="text-white">Developers</a>
                </div>
                <div className="flex gap-6 bg-[#43cd66] border rounded-[50px] border-solid h-[60px] w-[6rem]">
                    <a href="" className="inline-block w-full h-full">
                        <button className="w-full h-full">
                            Calculator
                        </button></a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
