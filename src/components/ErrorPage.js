import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <p className="title_text title_text--modal mt-4">Unfortunaltely an external error has meant that we cannot retireve the data to display the currencies health at the moment. Below is a link to more information on crypto analytics.</p>
        
            <a href="https://www.cryptodatadownload.com/">external-info</a>
        </div>
    );
};

export default ErrorPage;