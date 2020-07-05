import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const shoes = {
        "dalton-shell-cordovan-dress-boots": {
            name: "Dalton Shell Cordovan Dress Boots",
            img: "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw8116ebe3/images/2.1/mens-shoes/dalton-0181-burgundy-angle-web.jpg?sw=736&sh=736&sm=fit"
            },
        "brooklyn-light-wingtip-derby": {
            name: "Brooklyn Light Wingtip Derby",
            img: "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw3007117f/images/2.1/mens-shoes/BrooklynLightWingtip_3297_Walnut_Angle_web.jpg?sw=736&sh=736&sm=fit"
            },
        "porter-derby-sneaker": {
            name: "Porter Derby Sneaker",
            img: "https://www.allenedmonds.com/dw/image/v2/AAXI_PRD/on/demandware.static/-/Sites-allenedmonds-catalog/default/dw92c9df3d/images/2.1/mens-shoes/porter-50995-black-angle-web.jpg?sw=736&sh=736&sm=fit"
            },
    }

    const {productId} = useParams();
    const product = shoes[productId];
    const {name, img} = product;
    

    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} />
        </div>
    )
}
