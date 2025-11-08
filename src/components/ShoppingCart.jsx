import { useCart } from '../context/CartContext';
import { useEffect } from 'react';

const ShoppingCart = ({ currentFlavor }) => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    isCartOpen,
    toggleCart,
  } = useCart();
  
  // Extract colors with fallbacks
  const accentColor = currentFlavor?.accentColor || '#914f1e';
  const bgColor = currentFlavor?.bgColor || '#914f1e';

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={toggleCart}
      ></div>

      {/* Cart Panel */}
      <div 
        className="fixed right-0 top-0 h-full w-full sm:w-[420px] md:w-[480px] z-50 shadow-2xl animate-slideInRight flex flex-col overflow-hidden transition-all duration-1000"
        style={{
          background: `linear-gradient(135deg, ${accentColor} 0%, ${bgColor} 100%)`
        }}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-white/20 bg-white/5 backdrop-blur-md flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white flex items-center gap-2 sm:gap-3">
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-1000"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              Shopping Cart
            </h2>
            <button
              onClick={toggleCart}
              className="w-10 h-10 rounded-full hover:bg-white/20 border-2 hover:border-white/50 flex items-center justify-center transition-all duration-1000 hover:rotate-90 group"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {cartItems.length > 0 && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span>
              <button
                onClick={clearCart}
                className="text-red-300 hover:text-red-200 font-semibold transition-colors"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 animate-bounceIn transition-all duration-1000"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <svg className="w-12 h-12 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Your cart is empty</h3>
              <p className="text-sm sm:text-base text-white/60 mb-4 sm:mb-6">Add some delicious drinks to get started!</p>
              <button
                onClick={toggleCart}
                className="px-5 py-2.5 sm:px-6 sm:py-3 font-bold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 text-sm sm:text-base shadow-lg"
                style={{ 
                  backgroundColor: 'white',
                  color: accentColor
                }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={item.id}
                className="backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 hover:border-white/40 transition-all duration-1000 group animate-slideInUp"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.25)'
                }}
              >
                <div className="flex gap-3 sm:gap-4">
                  {/* Image */}
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 transition-all duration-1000"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1 truncate">{item.name}</h3>
                    <p className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-1">{item.desc}</p>
                    
                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg hover:bg-white/20 border flex items-center justify-center transition-all duration-1000 hover:scale-110"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            borderColor: 'rgba(255, 255, 255, 0.3)'
                          }}
                        >
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                          </svg>
                        </button>
                        
                        <span className="text-white font-bold text-lg w-8 text-center">{item.quantity}</span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg hover:bg-white/20 border flex items-center justify-center transition-all duration-1000 hover:scale-110"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            borderColor: 'rgba(255, 255, 255, 0.3)'
                          }}
                        >
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-white font-bold text-base sm:text-lg">
                          ₱{((item.price || 99) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-8 h-8 rounded-lg bg-red-500/20 hover:bg-red-500/40 border border-red-500/30 hover:border-red-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0"
                  >
                    <svg className="w-4 h-4 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-white/20 bg-white/5 backdrop-blur-md space-y-3 sm:space-y-4 flex-shrink-0">
            {/* Total */}
            <div className="flex items-center justify-between text-lg sm:text-xl font-bold text-white">
              <span>Total:</span>
              <span className="text-xl sm:text-2xl">₱{getTotalPrice().toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <button 
              className="w-full py-3 sm:py-4 font-black text-base sm:text-lg rounded-xl sm:rounded-2xl hover:bg-white/90 transition-all duration-1000 hover:scale-[1.02] active:scale-95 shadow-2xl flex items-center justify-center gap-2 group"
              style={{
                backgroundColor: 'white',
                color: accentColor
              }}
            >
              <span>Proceed to Checkout</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Continue Shopping */}
            <button
              onClick={toggleCart}
              className="w-full py-2.5 sm:py-3 hover:bg-white/20 border-2 hover:border-white/50 text-white font-semibold text-sm sm:text-base rounded-xl sm:rounded-2xl transition-all duration-1000"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;

