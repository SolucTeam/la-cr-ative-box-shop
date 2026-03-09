import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card } from '@/components/ui/card';
import { CreditCard, Wallet, Banknote, Gift, CalendarClock, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SHIPPING = 5.90;

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [payment, setPayment] = useState('card');
  const [submitted, setSubmitted] = useState(false);

  if (items.length === 0 && !submitted) return <Navigate to="/panier" />;

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <CheckCircle2 className="h-20 w-20 text-secondary mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Commande confirmée !</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">Merci pour votre achat. Vous recevrez un email de confirmation avec les détails de votre commande et le suivi de livraison.</p>
        <Button onClick={() => navigate('/boutique')} className="rounded-full">Continuer mes achats</Button>
      </div>
    );
  }

  const total = totalPrice + SHIPPING;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
    toast({ title: 'Commande passée !', description: 'Merci pour votre achat' });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Finaliser la commande</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-8">
          {/* Shipping info */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Adresse de livraison</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><Label htmlFor="first">Prénom</Label><Input id="first" required placeholder="Jean" /></div>
              <div><Label htmlFor="last">Nom</Label><Input id="last" required placeholder="Dupont" /></div>
              <div className="sm:col-span-2"><Label htmlFor="address">Adresse</Label><Input id="address" required placeholder="12 rue de la Créativité" /></div>
              <div><Label htmlFor="zip">Code postal</Label><Input id="zip" required placeholder="75001" /></div>
              <div><Label htmlFor="city">Ville</Label><Input id="city" required placeholder="Paris" /></div>
              <div className="sm:col-span-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" required placeholder="jean@email.com" /></div>
              <div className="sm:col-span-2"><Label htmlFor="phone">Téléphone</Label><Input id="phone" placeholder="06 12 34 56 78" /></div>
            </div>
          </Card>

          {/* Payment */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Moyen de paiement</h2>
            <RadioGroup value={payment} onValueChange={setPayment} className="space-y-3">
              {[
                { value: 'card', label: 'Carte bancaire', desc: 'Visa, Mastercard, CB', icon: CreditCard },
                { value: 'paypal', label: 'PayPal', desc: 'Paiement sécurisé via PayPal', icon: Wallet },
                { value: 'transfer', label: 'Chèque / Virement', desc: 'Paiement par chèque ou virement bancaire', icon: Banknote },
                { value: 'giftcard', label: 'Carte cadeau', desc: 'Utilisez votre carte cadeau La Créative Box', icon: Gift },
                { value: 'installment', label: 'Paiement fractionné', desc: '3x ou 4x sans frais à partir de 50€', icon: CalendarClock },
              ].map(opt => (
                <label key={opt.value} className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${payment === opt.value ? 'border-primary bg-primary/5' : 'hover:bg-muted'}`}>
                  <RadioGroupItem value={opt.value} />
                  <opt.icon className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <div className="font-medium text-sm">{opt.label}</div>
                    <div className="text-xs text-muted-foreground">{opt.desc}</div>
                  </div>
                </label>
              ))}
            </RadioGroup>

            {payment === 'card' && (
              <div className="mt-4 space-y-3">
                <div><Label htmlFor="cardnum">Numéro de carte</Label><Input id="cardnum" placeholder="1234 5678 9012 3456" /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><Label htmlFor="exp">Expiration</Label><Input id="exp" placeholder="MM/AA" /></div>
                  <div><Label htmlFor="cvv">CVV</Label><Input id="cvv" placeholder="123" /></div>
                </div>
              </div>
            )}

            {payment === 'giftcard' && (
              <div className="mt-4">
                <Label htmlFor="giftcode">Code carte cadeau</Label>
                <Input id="giftcode" placeholder="XXXX-XXXX-XXXX" />
              </div>
            )}
          </Card>
        </div>

        {/* Summary */}
        <div className="lg:col-span-2">
          <Card className="p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>
            <div className="space-y-3 mb-4">
              {items.map(item => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.product.name} x{item.quantity}</span>
                  <span>{(item.product.price * item.quantity).toFixed(2)} €</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Sous-total</span><span>{totalPrice.toFixed(2)} €</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Livraison standard</span><span>{SHIPPING.toFixed(2)} €</span></div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold"><span>Total</span><span className="text-primary">{total.toFixed(2)} €</span></div>
            </div>
            <Button type="submit" size="lg" className="w-full mt-6 rounded-full">Confirmer la commande</Button>
            <p className="text-xs text-muted-foreground text-center mt-3">🔒 Paiement 100% sécurisé</p>
          </Card>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
