import React, { memo, useState } from "react";

import "./Card.scss";

const PARAGRAPHS = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "Amet risus nullam eget felis eget",
    "Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet",
    "Ullamcorper sit amet risus nullam eget felis",
    "Feugiat pretium nibh ipsum consequat nisl vel",
    "Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum",
    "Enim sit amet venenatis urna",
    "Odio aenean sed adipiscing diam donec adipiscing tristique",
    "Fermentum leo vel orci porta",
    "Urna condimentum mattis pellentesque id nibh tortor id aliquet",
    "Nibh ipsum consequat nisl vel pretium lectus quam id",
    "Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque",
    "Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat",
    "Non sodales neque sodales ut etiam",
];

export default memo(({ open, openCard, shownParagraphs }) => {
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
                {PARAGRAPHS.map((paragraph, index) => (
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
