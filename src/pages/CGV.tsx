import { motion } from 'framer-motion';

const CGV = () => (
  <div className="container mx-auto px-4 py-16 max-w-3xl">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Conditions Générales de Vente</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Objet</h2>
          <p>Les présentes conditions générales de vente régissent les relations contractuelles entre La Créative Box et ses clients dans le cadre de la vente en ligne de box créatives DIY.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Prix</h2>
          <p>Les prix sont indiqués en euros TTC. La Créative Box se réserve le droit de modifier ses prix à tout moment, les produits étant facturés au tarif en vigueur au moment de la commande.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">3. Paiement</h2>
          <p>Le paiement s'effectue par carte bancaire, PayPal, chèque, virement bancaire, carte cadeau ou paiement fractionné (3x ou 4x sans frais pour les commandes supérieures à 50€).</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Livraison</h2>
          <p>La livraison est effectuée en France métropolitaine. Les délais de livraison sont de 3 à 5 jours ouvrés. Les frais de livraison standard sont de 5,90 €.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Droit de rétractation</h2>
          <p>Conformément à la législation en vigueur, vous disposez d'un délai de 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Contact</h2>
          <p>Pour toute question relative aux présentes CGV, contactez-nous à contact@lacreativebox.fr.</p>
        </section>
      </div>
    </motion.div>
  </div>
);

export default CGV;
