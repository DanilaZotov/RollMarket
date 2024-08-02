import { useAppDispatch } from "../hooks/hooks";
import { addToCart } from '../features/cart/cartSlice';
import CartProduct from '../interfaces/CartProduct';

export interface ItemProps {
    item: CartProduct;
}

export default function AddToCartButton(props: ItemProps) {
    const dispatch = useAppDispatch();
    const item  = props.item;

    const HandleClick = () => {
        dispatch(addToCart(item));
    }

    return (
        <button className='product-item-button' onClick={HandleClick}>Добавить</button>
    )
}