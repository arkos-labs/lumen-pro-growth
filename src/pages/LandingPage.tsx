import { useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from "@/config/email";

const Footer = lazy(() => import("@/components/Footer"));
import {
    TrendingDown,
    ArrowRight,
    Lightbulb,
    Euro,
    Clock,
    Star
} from "lucide-react";

const LandingPage = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        entreprise: "",
        surface: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            console.log("🚀 Envoi email à:", EMAIL_CONFIG.TO_EMAIL);

            const templateParams = {
                // Variables standards qui marchent souvent mieux
                user_name: `${formData.prenom} ${formData.nom}`,
                user_email: formData.email,
                message: `
                    Nouveau lead depuis Landing Page Facebook:
                    ----------------------------------------
                    Nom: ${formData.prenom} ${formData.nom}
                    Email: ${formData.email}
                    Téléphone: ${formData.telephone}
                    Entreprise: ${formData.entreprise}
                    Surface: ${formData.surface || "Non renseignée"}
                    
                    Message client:
                    ${formData.message}
                `,
                // Au cas où le template utilise les noms spécifiques
                from_name: `${formData.prenom} ${formData.nom}`,
                from_email: formData.email,
                phone_number: formData.telephone,
                company_name: formData.entreprise,
                reply_to: formData.email
            };

            const response = await emailjs.send(
                EMAIL_CONFIG.SERVICE_ID,
                EMAIL_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAIL_CONFIG.PUBLIC_KEY
            );

            console.log("✅ Email envoyé !", response);

            toast({
                title: "✅ Demande envoyée avec succès !",
                description: "Nous avons bien reçu votre demande d'audit.",
            });

            // Réinitialiser le formulaire
            setFormData({
                nom: "",
                prenom: "",
                email: "",
                telephone: "",
                entreprise: "",
                surface: "",
                message: ""
            });
        } catch (error) {
            console.error("Erreur envoi email:", error);
            toast({
                title: "❌ Erreur",
                description: "Une erreur est survenue lors de l'envoi. Veuillez nous contacter par téléphone.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col">
            <Header />

            {/* Main Content - Centered */}
            <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-24">
                <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Left Column - Value Proposition */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:block text-white space-y-6"
                    >
                        <div className="inline-block">
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                🎁 Offre Spéciale Facebook
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Réduisez votre facture d'électricité de{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                                75%
                            </span>
                        </h1>

                        <p className="text-xl text-blue-100">
                            Passez à l'éclairage LED professionnel avec un financement CEE jusqu'à 100%
                        </p>

                        {/* Benefits Pills */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                                <TrendingDown className="w-5 h-5 text-blue-300" />
                                <span className="text-sm font-medium">Jusqu'à 75% d'économies</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                                <Euro className="w-5 h-5 text-blue-300" />
                                <span className="text-sm font-medium">Financement CEE</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                                <Lightbulb className="w-5 h-5 text-blue-300" />
                                <span className="text-sm font-medium">Technologie LED</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                                <Clock className="w-5 h-5 text-blue-300" />
                                <span className="text-sm font-medium">Installation rapide</span>
                            </div>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-3 pt-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"></div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-sm text-blue-100">+500 clients satisfaits</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8 md:mb-0"
                        id="main-content"
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                Audit Gratuit
                            </h2>
                            <p className="text-gray-600">
                                Découvrez vos économies potentielles en 2 minutes
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Prénom *
                                    </label>
                                    <Input
                                        type="text"
                                        name="prenom"
                                        value={formData.prenom}
                                        onChange={handleChange}
                                        required
                                        placeholder="Jean"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Nom *
                                    </label>
                                    <Input
                                        type="text"
                                        name="nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        required
                                        placeholder="Dupont"
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email professionnel *
                                </label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="jean.dupont@entreprise.fr"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Téléphone *
                                </label>
                                <Input
                                    type="tel"
                                    name="telephone"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                    required
                                    placeholder="06 12 34 56 78"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Entreprise *
                                </label>
                                <Input
                                    type="text"
                                    name="entreprise"
                                    value={formData.entreprise}
                                    onChange={handleChange}
                                    required
                                    placeholder="Nom de votre entreprise"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Surface à éclairer (m²)
                                </label>
                                <Input
                                    type="text"
                                    name="surface"
                                    value={formData.surface}
                                    onChange={handleChange}
                                    placeholder="500"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Message (optionnel)
                                </label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Décrivez votre projet..."
                                    rows={3}
                                    className="w-full"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                {isSubmitting ? (
                                    "Envoi en cours..."
                                ) : (
                                    <>
                                        Obtenir mon audit gratuit
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </Button>

                            <p className="text-xs text-gray-500 text-center">
                                🔒 Vos données sont sécurisées et ne seront jamais partagées
                            </p>
                        </form>
                    </motion.div>
                </div>
            </main>

            <Suspense fallback={<div className="h-20 bg-gray-900"></div>}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default LandingPage;
