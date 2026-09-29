import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <div className=" border-t border-[#1B1F28]">
            <div className='container mx-auto flex max-md:flex-col max-md:justify-center justify-between items-center px-6 py-10'>
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    >
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={20}
                        height={20}
                    />

                    <p className="font-oswald text-md font-bold">
                        FITLOG
                    </p>
                </Link>

                <p className="max-md:mt-4 max-md:text-center text-sm text-[#8A92A0]">© 2026 FitLog — Workout Library. <span className="max-md:block text-center">Train hard, log honest.</span></p>
            </div>
        </div>
    );
};

export default Footer;