import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Message envoyé !', description: 'Nous vous répondrons dans les plus brefs délais.' });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-muted-foreground mb-10">Une question ? N'hésitez pas à nous écrire.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><Label htmlFor="name">Nom</Label><Input id="name" required placeholder="Votre nom" /></div>
                  <div><Label htmlFor="email">Email</Label><Input id="email" type="email" required placeholder="votre@email.com" /></div>
                </div>
                <div><Label htmlFor="subject">Sujet</Label><Input id="subject" required placeholder="Votre sujet" /></div>
                <div><Label htmlFor="message">Message</Label><Textarea id="message" required placeholder="Votre message..." rows={5} /></div>
                <Button type="submit" className="rounded-full">Envoyer le message</Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            {[
              { icon: Mail, title: 'Email', text: 'contact@lacreativebox.fr' },
              { icon: Phone, title: 'Téléphone', text: '01 23 45 67 89' },
              { icon: MapPin, title: 'Adresse', text: '12 rue de la Créativité\n75001 Paris, France' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
