import React from 'react';

const PatternLib = () => {
    return (
    <>
        <div className="container">
            <article class="pattern">
                <h2 class="pattern__title">Title Here</h2>
                <p class="pattern__text">Description here</p>
                <div class="pattern__example">
                    <p>Content Here</p>
                </div>
            </article>
        </div>

        <div className="container">
            <article class="pattern--wide">
                <h2 class="pattern__title">Title Here</h2>
                <p class="pattern__text">Description Here</p>
                <div class="pattern__example">
                    <p>Content Here</p>
                </div>
            </article>
        </div>
</>
    );
};

export default PatternLib;