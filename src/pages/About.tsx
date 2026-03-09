import { motion } from 'framer-motion';
import { Palette, Heart, Leaf, Users } from 'lucide-react';

const About = () => (
  <div className="container mx-auto px-4 py-16">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">À propos de La Créative Box</h1>
      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
        La Créative Box est née d'une passion simple : rendre la créativité accessible à tous. 
        Nous croyons que chacun a un artiste qui sommeille en lui et mérite de vivre des moments 
        d'expression créative, seul, en famille ou entre amis.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {[
          { icon: Palette, title: 'Créativité pour tous', desc: 'Des box conçues pour tous les niveaux, du débutant au confirmé.' },
          { icon: Heart, title: 'Qualité artisanale', desc: 'Matériel soigneusement sélectionné pour une expérience premium.' },
          { icon: Leaf, title: 'Éco-responsable', desc: 'Emballages recyclables et matériaux durables.' },
          { icon: Users, title: 'Moments partagés', desc: 'Des activités à vivre seul ou à plusieurs pour créer des souvenirs.' },
        ].map((v, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-card p-6 rounded-xl shadow-sm">
            <v.icon className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-muted rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Notre mission</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Chaque box La Créative Box contient tout le matériel nécessaire et un guide explicatif 
          détaillé pour que vous puissiez vivre un moment créatif complet à domicile. 
          Plus besoin de chercher le matériel, de comparer les produits ou de regarder des tutoriels : 
          tout est pensé et prêt pour vous.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          De la peinture à la poterie, de la couture au jardinage, en passant par la fabrication de bougies 
          et l'initiation à la viticulture — nous proposons une large gamme d'activités pour satisfaire toutes les envies créatives.
        </p>
      </div>
    </motion.div>
  </div>
);

export default About;
