import React from 'react';

const PatternLib = () => {
    return (
    <>
        <div className="container">
            <article class="pattern">
                <h2 class="pattern__title">Title Here</h2>
                <p class="pattern__text">Description here</p>
                <div class="pattern__example">
                    <h1 className="header_text">Example Header</h1>
                </div>
            </article>
        </div>
        <div className="container">
            <article class="pattern">
                <h2 class="pattern__title">Title Here</h2>
                <p class="pattern__text">Description here</p>
                <div class="pattern__example">
                    <h1 className="title_text">Example Large Text</h1>
                </div>
            </article>
        </div>
        <div className="container">
            <article class="pattern">
                <h2 class="pattern__title">Title Here</h2>
                <p class="pattern__text">Description here</p>
                <div class="pattern__example">
                    <p className="paragraph_text">Example Medium Text</p>
                </div>
            </article>
        </div>
        <div className="container">
            <article class="pattern">
                <h2 class="pattern__title">Title Here</h2>
                <p class="pattern__text">Description here</p>
                <div class="pattern__example">
                    <p className="paragraph_text paragraph_text--small">Example Small Text</p>
                </div>
            </article>
        </div>

        <div className="container">
            <article class="pattern">
                <h2 class="pattern__title">Title Here</h2>
                <p class="pattern__text">Description here</p>
                <div class="pattern__example">
                    <button className="button button__primary">Primary</button>
                    <button className="button button__secondary">Secondary</button>
                    <button className="button">Button</button>
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