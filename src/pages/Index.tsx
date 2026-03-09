import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Truck, CreditCard, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/data/products';
import heroBg from '@/assets/hero-bg.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Box créative" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-background mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Libérez votre <span className="text-accent">créativité</span>
            </h1>
            <p className="text-lg text-background/80 mb-8">
              Des box DIY complètes livrées chez vous. Peinture, poterie, couture et bien plus — tout le matériel et un guide pour créer à la maison.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/boutique">Découvrir nos box <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos catégories</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Choisissez l'activité qui vous inspire et recevez tout le nécessaire chez vous</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div key={cat.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={`/boutique/${cat.slug}`}>
                <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow border-0 shadow-sm">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold mb-1">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* USPs */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Package, title: 'Tout inclus', desc: 'Matériel + guide dans chaque box' },
              { icon: Truck, title: 'Livraison standard', desc: 'Recevez votre box en toute simplicité' },
              { icon: CreditCard, title: 'Paiement flexible', desc: 'CB, PayPal, chèque, paiement en plusieurs fois' },
              { icon: Heart, title: 'Fait avec amour', desc: 'Des box conçues avec passion pour vous' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à créer ?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Explorez notre boutique et trouvez la box parfaite pour votre prochaine aventure créative.</p>
          <Button asChild size="lg" className="rounded-full px-10">
            <Link to="/boutique">Voir toutes les box</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
