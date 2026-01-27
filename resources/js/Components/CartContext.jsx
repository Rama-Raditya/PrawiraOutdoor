import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on component mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });

        // setIsCartOpen(true);
    };

    const updateQuantity = (index, quantity) => {
        if (quantity <= 0) {
            removeFromCart(index);
            return;
        }

        setCartItems(prevItems => {
            const newItems = [...prevItems];
            newItems[index] = { ...newItems[index], quantity };
            return newItems;
        });
    };

    const removeFromCart = (index) => {
        setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const checkout = (formData) => {
        // Format message for WhatsApp
        let message = `*Halo Prawira Outdoor!*\n\n`;
        message += `Saya ingin menyewa beberapa alat camping dengan detail berikut:\n\n`;

        message += `================================\n`;
        message += `*DATA PEMESAN*\n`;
        message += `================================\n`;
        message += `Nama: ${formData.name}\n`;
        message += `WhatsApp: ${formData.whatsapp}\n`;
        message += `Alamat: ${formData.address}\n`;
        message += `Pengambilan: ${formData.pickup_date}\n`;
        message += `Jam: ${formData.pickup_time}\n\n`;

        message += `================================\n`;
        message += `*DETAIL PESANAN*\n`;
        message += `================================\n\n`;

        cartItems.forEach((item, index) => {
            message += `${index + 1}. *${item.name}*\n`;
            message += `   Durasi: ${item.quantity} hari\n`;
            message += `   Harga: Rp ${item.price.toLocaleString('id-ID')}/hari\n`;
            message += `   Subtotal: Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n\n`;
        });

        message += `================================\n`;
        message += `*TOTAL: Rp ${getTotalPrice().toLocaleString('id-ID')}*\n`;
        message += `================================\n\n`;

        message += `Mohon informasikan ketersediaan barang dan proses selanjutnya.\nTerima kasih!`;

        // Open WhatsApp with the formatted message
        const phoneNumber = '6282143421139'; // number
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        // Clear cart after checkout
        clearCart();
        setIsCartOpen(false);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                isCartOpen,
                setIsCartOpen,
                addToCart,
                updateQuantity,
                removeFromCart,
                clearCart,
                getTotalItems,
                getTotalPrice,
                checkout
            }}
        >
            {children}
        </CartContext.Provider>
    );
};