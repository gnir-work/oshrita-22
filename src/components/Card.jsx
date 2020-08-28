import React, { memo } from "react";

import "./Card.scss";

export default memo(({ open, openCard, shownParagraphs, paragraphs }) => {
    return (
        <div onClick={openCard} class={`card ${open ? "open" : "closed"}`}>
            <div class="back">
                <img
                    src="https://i.pinimg.com/originals/b2/62/ac/b262ac1b6375641e3588eb91b37174fe.jpg"
                    alt="bunny"
                    width="100%"
                    height="100%"
                />
            </div>
            <div class="front">
                <div class="cover-shape-large">
                    <div class="shape-diamond"></div>
                    <div class="shape-block"></div>
                </div>
                <div class="cover-shape-small">
                    <div class="shape-diamond"></div>
                    <div class="shape-block">
                        <div class="cake">
                            <div class="layer layer-bottom"></div>
                            <div class="layer layer-middle"></div>
                            <div class="layer layer-top"></div>
                            <div class="icing"></div>
                            <div class="drip drip1"></div>
                            <div class="drip drip2"></div>
                            <div class="drip drip3"></div>
                            <div class="candle">
                                <div class="flame"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-container">
                {paragraphs.map(
                    (paragraph, index) =>
                        shownParagraphs.length > 0 && (
                            <p
                                className={
                                    shownParagraphs.includes(index)
                                        ? "visible"
                                        : "hidden"
                                }
                            >
                                {paragraph}
                            </p>
                        )
                )}
                {
                    shownParagraphs.length === 0 && (
                        <h2 style={{ textAlign: "center" }}> הברכה מתחבאת בביצים :) </h2>
                    )
                }
            </div>
        </div>
    );
});
