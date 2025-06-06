import Sidebar from './Sidebar/Sidebar';

const DefaultLayout = ({ children }) => {
    return (
        <div className="container">
            <Sidebar />
            <div className="content">{children}</div>
        </div>
    );
};

export default DefaultLayout;
