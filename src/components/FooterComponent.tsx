function FooterComponent() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-5 py-6 pb-7 bg-main-dark-blue">
            <div className="flex justify-center">
                <p className="mb-0 text-center !text-gray-500 font-medium">
                    Portfolio Created By Arnes Poprzenovic
                    <br/>
                    <span className={"text-center"}>
                        &copy; {year} All rights reserved
                    </span>
                </p>
            </div>
        </footer>
    );
}

export default FooterComponent;
