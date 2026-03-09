import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-foreground text-background mt-20">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>La Créative Box</h3>
        <p className="text-sm opacity-70">Des box DIY créatives pour vivre des moments uniques chez vous.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-80">Boutique</h4>
        <ul className="space-y-2 text-sm opacity-70">
          <li><Link to="/boutique/peinture" className="hover:opacity-100 transition-opacity">Peinture</Link></li>
          <li><Link to="/boutique/poterie" className="hover:opacity-100 transition-opacity">Poterie</Link></li>
          <li><Link to="/boutique/couture" className="hover:opacity-100 transition-opacity">Couture</Link></li>
          <li><Link to="/boutique/jardinage" className="hover:opacity-100 transition-opacity">Jardinage</Link></li>
          <li><Link to="/boutique/bougies" className="hover:opacity-100 transition-opacity">Bougies</Link></li>
          <li><Link to="/boutique/vin" className="hover:opacity-100 transition-opacity">Vin & Vigne</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-80">Informations</h4>
        <ul className="space-y-2 text-sm opacity-70">
          <li><Link to="/a-propos" className="hover:opacity-100 transition-opacity">À propos</Link></li>
          <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
          <li><Link to="/livraison" className="hover:opacity-100 transition-opacity">Livraison</Link></li>
          <li><Link to="/cgv" className="hover:opacity-100 transition-opacity">CGV</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-80">Paiement sécurisé</h4>
        <p className="text-sm opacity-70 mb-2">Carte bancaire, PayPal, chèque, virement, cartes cadeaux, paiement fractionné</p>
        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wider opacity-80 mt-4">Livraison</h4>
        <p className="text-sm opacity-70">Livraison standard en France métropolitaine</p>
      </div>
    </div>
    <div className="border-t border-background/10 py-4 text-center text-xs opacity-50">
      © {new Date().getFullYear()} La Créative Box. Tous droits réservés.
    </div>
  </footer>
);

export default Footer;
