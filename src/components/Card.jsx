import React, { memo, useState } from "react";

import "./Card.scss";

export default memo(({ open, openCard, shownParagraphs, paragraphs }) => {
    console.log(paragraphs, shownParagraphs);
    return (
        <div onClick={openCard} class={`card ${open ? "open" : "closed"}`}>
            <div class="back"></div>
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
                {paragraphs.map((paragraph, index) => (
                    <p
                        className={
                            shownParagraphs.includes(index)
                                ? "visible"
                                : "hidden"
                        }
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
});
