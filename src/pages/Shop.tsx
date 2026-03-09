import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { categories, products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Shop = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAdd = (product: typeof products[0]) => {
    addItem(product);
    toast({ title: 'Ajouté au panier', description: product.name });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Notre Boutique</h1>
      <p className="text-muted-foreground mb-10">Explorez nos box créatives par catégorie</p>

      {/* Categories nav */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map(cat => (
          <Button key={cat.slug} variant="outline" asChild className="rounded-full">
            <Link to={`/boutique/${cat.slug}`}>{cat.name}</Link>
          </Button>
        ))}
      </div>

      {/* All products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-sm h-full flex flex-col">
              <Link to={`/produit/${p.slug}`}>
                <div className="aspect-square overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </Link>
              <CardContent className="p-5 flex flex-col flex-1">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{p.category}</span>
                <Link to={`/produit/${p.slug}`}>
                  <h3 className="text-lg font-semibold mb-1 hover:text-primary transition-colors">{p.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{p.price.toFixed(2)} €</span>
                  <Button size="sm" onClick={() => handleAdd(p)} className="rounded-full">
                    <ShoppingCart className="h-4 w-4 mr-1" /> Ajouter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
