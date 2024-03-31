import Navbar from "./_components/navbar";
import SideBarContents from "./_components/sidebar-contents";

export default function RootLayout({ children }) {
    return (
        <div className="relative h-full">
            <div className="h-[80px] fixed inset-y-0 w-full z-60">
                <Navbar />
            </div>
            <div className="h-screen top-[78px] w-[16%] bg-[#EEEEEE] hidden md:flex flex-col inset-y-0 z-50 fixed">
                <SideBarContents />
            </div>
            <main className="md:pl-[17%] pt-[90px] h-full">
                {children}
            </main>
        </div>
    );
}