import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { SfButton, SfRating, SfCounter, SfLink, SfIconShoppingCart, SfIconFavorite } from '@storefront-ui/react';
import { useCart } from '../hooks/useCart';
import StarIcon from "../img/orangeStar.svg"

const ProductCard = ({
    title,
    thumbnail,
    price,
    productId,
    itemCode,
    tags,
    dispalytags,
    item_schedule_start,
    item_schedule_end,
}) => {
    const { addToCart } = useCart()

    if(tags != undefined){
        const shouldRender = tags.includes(dispalytags);
        if (!shouldRender) {
            return null;
        }
    }

    if(item_schedule_start != undefined && item_schedule_end != undefined){


        const today = new Date();
        const startDate = new Date(item_schedule_start);
        const endDate = new Date(item_schedule_end);

        if (today >= startDate && today <= endDate) {
            // your code here
        } else {
            return null;
        }



    }

    


    return (
        <Link to={`/products/${productId}`}>
            <div className="rounded-md hover:shadow-lg min-w-[150px] max-w-[150px]">
                <div className="relative">
                    <SfLink href="#" className="block">
                        <img
                            src={thumbnail !== null && `https://dev.honda.zaviago.com${thumbnail}`}
                            // alt={title}
                            className={`object-cover h-auto rounded-md aspect-square ${thumbnail == null && 'bg-[#C5C5C5]'}`}
                            width="300"
                            height="300"
                        />
                    </SfLink>
                    {/* <SfButton
                        type="button"
                        variant="tertiary"
                        size="sm"
                        square
                        className="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
                        aria-label="Add to wishlist"
                    >
                        <SfIconFavorite size="sm" />
                    </SfButton> */}
                </div>
                <div className="py-4 pb-0">
                    <SfLink href="#" variant="secondary" className="no-underline text-[#111111] text-xs">
                        {title}
                    </SfLink>
                    {/* <div className="flex items-center pt-1">
                        <SfRating size="xs" value={5} max={5} />

                        <SfLink href="#" variant="secondary" className="pl-1 no-underline">
                            <SfCounter size="xs">{123}</SfCounter>
                        </SfLink>
                    </div> */}
                    {/* <p className="block py-2 font-normal typography-text-sm text-neutral-700">
                        Lightweight • Non slip • Flexible outsole • Easy to wear on and off
                    </p> */}
                    <div className='flex items-center mt-1'>
                        <img src={StarIcon} />
                        <span className="block font-bold pl-[3px] text-sm text-[#F0592A]">{price} คะแนน</span>
                    </div>
                    {/* <SfButton type="button" size="sm" slotPrefix={<SfIconShoppingCart size="sm" />} onClick={(e) => {
                        e.preventDefault();
                        addToCart(itemCode)
                    }}>
                        Add to cart
                    </SfButton> */}
                </div>
            </div>
        </Link>
    )
}

export default ProductCard

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productId: PropTypes.string.isRequired
};
