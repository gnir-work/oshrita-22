import React, { memo, useRef, useEffect, useState } from "react";

import "./Card.scss";

export default memo(() => {
    const [open, setOpen] = useState(false);

    console.log('rendered')

    const openCard = () => {
        setOpen(!open);
    }

    return (
        <div onClick={openCard} class={`card ${open ? 'open' : 'closed'}`}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                mi eros, vehicula sit amet porttitor eu, facilisis vel sem.
                Mauris in urna quis justo viverra pellentesque et vel sem.
                Pellentesque non urna a lorem fringilla porttitor. Sed in massa
                ex. Morbi iaculis vulputate nulla. Morbi vitae nisl bibendum,
                tempus libero sit amet, rutrum metus. Fusce ut eros nisi.
                Pellentesque ac velit interdum, mollis ex at, ullamcorper quam.
                Pellentesque fermentum felis et pellentesque vehicula. Nulla in
                augue eget odio dapibus dignissim. Proin at nisl sed metus
                tempus laoreet. Nulla eu urna tempus ipsum dignissim egestas.
                Sed luctus interdum nulla eget convallis. Etiam vestibulum
                varius suscipit. Duis quis diam sit amet urna dignissim gravida
                quis at turpis. Integer maximus volutpat hendrerit. Nam
                facilisis sapien nec maximus malesuada. Nam porttitor id enim eu
                varius. Donec nec metus mauris. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam nec lacinia lorem. Nulla at
                ullamcorper leo. Aenean a vehicula nulla. Sed ornare diam in
                lorem luctus interdum. Duis vehicula bibendum enim at
                consectetur. Donec ipsum arcu, aliquam sed scelerisque eget,
                posuere ac lorem. Aenean et tempor odio. Duis venenatis
                condimentum nisl, eu commodo turpis rhoncus aliquet.
                Pellentesque quis tincidunt nulla, dapibus fermentum nisi.
                Suspendisse tristique risus id lacus gravida, vitae elementum
                neque mollis. Aliquam est nibh, fermentum id rhoncus et, viverra
                a lectus. Morbi tincidunt ut dui eu volutpat. Cras in risus non
                dui condimentum tempus. Nunc ac libero dictum ante convallis
                mattis non sed quam. Curabitur urna urna, finibus id rhoncus
                sollicitudin, aliquam sit amet nisl.
            </div>
        </div>
    );
});
