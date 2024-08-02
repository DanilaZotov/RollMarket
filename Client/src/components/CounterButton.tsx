import { useAppDispatch } from "../hooks/hooks";
import { increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice';
import CartProduct from '../interfaces/CartProduct';

export interface ItemProps {
    item: CartProduct;
}

export function IncreaseButton(props: ItemProps) {
    const dispatch = useAppDispatch();
    const item  = props.item;

    const HandleClick = () => {
        dispatch(increaseQuantity(item));
    }

    return (
        <button className='counter-button' onClick={HandleClick}>+</button>
    )
}

export function DecreaseButton(props: ItemProps) {
    const dispatch = useAppDispatch();
    const item  = props.item;

    const HandleClick = () => {
        dispatch(decreaseQuantity(item));
    }

    return (
        <button className='counter-button' onClick={HandleClick}>-</button>
    )
}