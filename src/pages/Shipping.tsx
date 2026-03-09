import { motion } from 'framer-motion';
import { Truck, Clock, Package, ShieldCheck } from 'lucide-react';

const Shipping = () => (
  <div className="container mx-auto px-4 py-16 max-w-3xl">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Livraison</h1>

      <div className="space-y-8">
        {[
          { icon: Truck, title: 'Livraison standard', desc: 'Livraison en France métropolitaine sous 3 à 5 jours ouvrés. Frais de livraison : 5,90 €.' },
          { icon: Clock, title: 'Délais de préparation', desc: 'Votre commande est préparée avec soin sous 24 à 48h avant expédition.' },
          { icon: Package, title: 'Emballage soigné', desc: 'Chaque box est emballée dans un packaging protecteur et éco-responsable pour arriver en parfait état.' },
          { icon: ShieldCheck, title: 'Suivi de commande', desc: 'Un numéro de suivi vous est envoyé par email dès l\'expédition de votre colis.' },
        ].map((item, i) => (
          <div key={i} className="flex gap-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default Shipping;
