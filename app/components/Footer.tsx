import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <div className=" border-t border-[#1B1F28]">
            <div className='container mx-auto flex max-md:flex-col max-md:justify-center justify-between items-center p-6'>
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    >
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={28}
                        height={28}
                    />

                    <p className="font-oswald text-2xl font-bold">
                        FITLOG
                    </p>
                </Link>

                <p className="max-md:mt-4 text-sm text-[#8A92A0]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;