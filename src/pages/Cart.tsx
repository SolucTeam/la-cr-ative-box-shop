import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const SHIPPING = 5.90;

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Votre panier est vide</h1>
        <p className="text-muted-foreground mb-8">Découvrez nos box créatives et commencez à créer !</p>
        <Button asChild className="rounded-full"><Link to="/boutique">Voir la boutique</Link></Button>
      </div>
    );
  }

  const total = totalPrice + SHIPPING;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Mon panier</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, i) => (
            <motion.div key={item.product.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="flex gap-4 bg-card rounded-xl p-4 shadow-sm">
              <Link to={`/produit/${item.product.slug}`} className="shrink-0">
                <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-cover rounded-lg" />
              </Link>
              <div className="flex-1 min-w-0">
                <Link to={`/produit/${item.product.slug}`} className="font-semibold hover:text-primary transition-colors">{item.product.name}</Link>
                <p className="text-sm text-muted-foreground">{item.product.category}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2 border rounded-full px-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-primary">{(item.product.price * item.quantity).toFixed(2)} €</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => removeItem(item.product.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm h-fit sticky top-24">
          <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Sous-total</span><span>{totalPrice.toFixed(2)} €</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Livraison standard</span><span>{SHIPPING.toFixed(2)} €</span></div>
            <div className="border-t pt-3 flex justify-between text-lg font-bold"><span>Total</span><span className="text-primary">{total.toFixed(2)} €</span></div>
          </div>
          <Button asChild size="lg" className="w-full mt-6 rounded-full">
            <Link to="/checkout">Commander <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-3">Paiement sécurisé • Livraison en France</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
