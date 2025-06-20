import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="container">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
