import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundElements from './BackgroundElements';
import WhatsAppButton from '../ui/WhatsAppButton';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col relative overflow-x-hidden">
            <BackgroundElements />
            <Navbar />
            <main className="flex-grow relative z-10">
                {children}
            </main>
            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default Layout;
