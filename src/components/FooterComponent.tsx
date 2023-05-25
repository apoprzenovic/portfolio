import React from "react";

function FooterComponent() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-5 py-6 pb-7 bg-main-black">
            {/*<hr className={"border-main-baby-blue w-11/12 rounded-2xl border-t m-auto mb-5"}/>*/}
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
