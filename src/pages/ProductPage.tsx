import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Clock, Users, Gauge, CheckCircle2, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { getProductBySlug } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const { addItem } = useCart();
  const { toast } = useToast();
  const [qty, setQty] = useState(1);

  if (!product) return <Navigate to="/boutique" />;

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to={`/boutique/${product.categorySlug}`} className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
        <ArrowLeft className="h-4 w-4 mr-1" /> {product.category}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="rounded-2xl overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <span className="text-sm text-primary font-semibold uppercase tracking-wider">{product.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{product.name}</h1>
          <p className="text-muted-foreground mb-6">{product.longDescription}</p>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm">
              <Gauge className="h-4 w-4 text-primary" /> {product.difficulty}
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm">
              <Clock className="h-4 w-4 text-primary" /> {product.duration}
            </div>
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm">
              <Users className="h-4 w-4 text-primary" /> {product.persons}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Contenu de la box :</h3>
            <ul className="space-y-2">
              {product.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-primary">{product.price.toFixed(2)} €</span>
              <div className="flex items-center gap-3 border rounded-full px-2">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setQty(Math.max(1, qty - 1))}><Minus className="h-4 w-4" /></Button>
                <span className="w-8 text-center font-semibold">{qty}</span>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setQty(qty + 1)}><Plus className="h-4 w-4" /></Button>
              </div>
            </div>
            <Button size="lg" className="w-full rounded-full" onClick={() => { addItem(product, qty); toast({ title: 'Ajouté au panier !', description: `${qty}x ${product.name}` }); }}>
              <ShoppingCart className="h-5 w-5 mr-2" /> Ajouter au panier
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
