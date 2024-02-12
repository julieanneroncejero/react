function Layout() {
    return(
        <div className="container">
            <div className="leftSidebar">Left Sidebar</div>
            <div className="mainContent">This is the main content.</div>
            <div className="rightContainer">
                <div className="topContainer">top-container</div>
                <div className="belowContainer"> below-container</div>
            </div>
        </div>
    );
};

export default Layout;