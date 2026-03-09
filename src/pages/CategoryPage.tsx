import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { getCategoryBySlug, getProductsByCategory } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug || '');
  const products = getProductsByCategory(slug || '');
  const { addItem } = useCart();
  const { toast } = useToast();

  if (!category) return <Navigate to="/boutique" />;

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/boutique" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" /> Retour à la boutique
      </Link>

      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.name}</h1>
        <p className="text-muted-foreground">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-sm h-full flex flex-col">
              <Link to={`/produit/${p.slug}`}>
                <div className="aspect-square overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </Link>
              <CardContent className="p-5 flex flex-col flex-1">
                <Link to={`/produit/${p.slug}`}>
                  <h3 className="text-lg font-semibold mb-1 hover:text-primary transition-colors">{p.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-3 flex-1">{p.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <span className="bg-muted px-2 py-1 rounded-full">{p.difficulty}</span>
                  <span className="bg-muted px-2 py-1 rounded-full">{p.duration}</span>
                  <span className="bg-muted px-2 py-1 rounded-full">{p.persons}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{p.price.toFixed(2)} €</span>
                  <Button size="sm" onClick={() => { addItem(p); toast({ title: 'Ajouté !', description: p.name }); }} className="rounded-full">
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

export default CategoryPage;
