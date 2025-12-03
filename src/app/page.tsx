"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Heart,
    Sparkles,
    Users,
    FileText,
    Download,
    Check,
    Star,
    Gift,
    Layout,
    PlayCircle,
    Image as ImageIcon,
    Briefcase,
    PenTool,
    Share2,
    ShieldCheck,
    Clock,
    ChevronDown
} from "lucide-react";
import { useState } from "react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { CurrencySwitcher } from "@/components/CurrencySwitcher";
import { motion } from "framer-motion";

export default function Home() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { formatPrice, getPrice, currency } = useCurrency();

    // Function to get UTM parameters and build checkout URL
    const getCheckoutUrl = () => {
        if (typeof window === 'undefined') {
            return currency === 'INR'
                ? 'https://in-checkout.mindfulnesscoachingkit.pro/checkout'
                : 'https://checkout.mindfulnesscoachingkit.pro/checkout';
        }

        const urlParams = new URLSearchParams(window.location.search);
        const utmParams = new URLSearchParams();

        // Capture all UTM parameters
        const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
        utmKeys.forEach(key => {
            const value = urlParams.get(key);
            if (value) {
                utmParams.append(key, value);
            }
        });

        // Capture any other tracking parameters (fbclid, gclid, etc.)
        const trackingKeys = ['fbclid', 'gclid', 'msclkid', 'ttclid'];
        trackingKeys.forEach(key => {
            const value = urlParams.get(key);
            if (value) {
                utmParams.append(key, value);
            }
        });

        const baseUrl = currency === 'INR'
            ? 'https://in-checkout.mindfulnesscoachingkit.pro/checkout'
            : 'https://checkout.mindfulnesscoachingkit.pro/checkout';
        const queryString = utmParams.toString();

        return queryString ? `${baseUrl}?${queryString}` : baseUrl;
    };

    // Function to handle checkout redirect
    const handleCheckoutRedirect = () => {
        const checkoutUrl = getCheckoutUrl();
        window.open(checkoutUrl, '_self');
    };

    const features = [
        {
            icon: FileText,
            title: "Complete Coaching Toolkit",
            description: "Mindfulness workbooks, journals, worksheets, and assessment tools for your clients."
        },
        {
            icon: Heart,
            title: "Self-Compassion Scripts",
            description: "Guided meditation scripts and emotional soothing exercises for transformative sessions."
        },
        {
            icon: Users,
            title: "Client Onboarding Tools",
            description: "Intake forms, welcome packets, and session documentation templates."
        },
        {
            icon: PenTool,
            title: "Mastering Mindfulness Program",
            description: "Present-moment awareness exercises and advanced meditation technique pages."
        },
        {
            icon: Share2,
            title: "Social Media Templates",
            description: "Branded mindfulness coaching posts for Instagram, Facebook, and LinkedIn."
        },
        {
            icon: Gift,
            title: "Self-Practice Tools",
            description: "Mindful eating workbooks, 30-day journals, and client-friendly practice resources."
        }
    ];

    const detailedProducts = [
        {
            title: "Coaching Business Tools",
            description: "Everything you need to run a professional mindfulness coaching practice with organized worksheets and documentation.",
            image: "/assets/mindfulness/Coaching Business toolkit_converted.webp",
            items: [
                "Mindfulness Workbook and Journal",
                "Coaching worksheets and planning documents",
                "Emotional awareness and reflection worksheets",
                "Anxiety relief worksheets",
                "Mindfulness assessment and progress sheets",
                "Client review and session documentation templates",
                "Coaching-ready printable and digital pages"
            ]
        },
        {
            title: "Growth & Branding Tools",
            description: "Build your mindfulness coaching brand with professional client materials and social media assets.",
            image: "/assets/mindfulness/Growth & Branding Tools _converted.webp",
            items: [
                "Client intake forms",
                "Welcome to your mindfulness journey packet",
                "Client information and onboarding documents",
                "Branded mindfulness worksheets",
                "Social media post templates for mindfulness coaching",
                "Clean desk-style branded assets"
            ]
        },
        {
            title: "Guided Audio Meditation Scripts",
            description: "Transformative guided meditation scripts with audio to help your clients deepen their mindfulness practice.",
            image: "/assets/mindfulness/Category Images/Guided Audio Meditation Scripts.webp",
            items: [
                "Body Scan Meditation",
                "The Three-Minute Breathing Space",
                "Self-Compassion Meditation",
                "Mindful Walking Meditation",
                "Mindfulness Against Limiting Beliefs",
                "Audiobook Tracker"
            ]
        },
        {
            title: "Self-Practice Tools for Clients",
            description: "Empower your clients with independent practice tools for mindful living.",
            image: "/assets/mindfulness/Self Practice Tools for Clients_converted.webp",
            items: [
                "Mindful Eating digital workbook",
                "30 Days of Mindful Eating guided reset journal",
                "Mindful eating affirmation cards",
                "Hunger cue awareness worksheets",
                "Daily reflection and self-practice pages",
                "Client-friendly independent practice tools"
            ]
        }
    ];

    const keyFeatures = [
        {
            title: "Fully Editable in Canva",
            description: "Customize every template to match your brand with fully editable Canva designs.",
            image: "/assets/mindfulness/Fully Editable in Canva_converted.webp",
            items: [
                "Fully editable Canva dashboard templates",
                "Customizable workbook and worksheet designs",
                "Brand-ready layouts for coaches",
                "Templates optimized for download, sharing, and client delivery"
            ]
        },
        {
            title: "Instant Access System",
            description: "Get started immediately with instant downloads and ready-to-use templates.",
            image: "/assets/mindfulness/Get Instant Access_converted.webp",
            items: [
                "Instant PDF download after purchase",
                "Canva template links included",
                "Optimized layouts for laptop, tablet, and mobile use",
                "No design experience required"
            ]
        }
    ];

    const testimonials = [
        {
            name: "Sarah M.",
            role: "Mindfulness Coach",
            content: "This toolkit transformed my practice. The meditation scripts and worksheets are exactly what my clients need.",
            rating: 5
        },
        {
            name: "David K.",
            role: "Wellness Coach",
            content: "The self-compassion scripts have been a game-changer. My clients love the guided exercises.",
            rating: 5
        },
        {
            name: "Emma L.",
            role: "Mindfulness Practitioner",
            content: "Everything I needed to launch my mindfulness coaching business. The Canva templates are beautiful and easy to customize.",
            rating: 5
        }
    ];

    const faqs = [
        {
            question: "Do I need Canva Pro to use these templates?",
            answer: "No! All templates work with both free and Pro Canva accounts. You can customize everything with a free account."
        },
        {
            question: "What formats are included?",
            answer: "You'll receive instant PDF downloads with Canva template links. All templates are optimized for digital and print use."
        },
        {
            question: "Can I use these with my clients?",
            answer: "Yes! These templates are designed for you to use with your coaching clients. You can customize and share them as part of your practice."
        },
        {
            question: "Are the meditation scripts ready to use?",
            answer: "Yes, all meditation scripts are complete and ready to use. You can customize them to match your coaching style."
        },
        {
            question: "Is there a refund policy?",
            answer: "Due to the digital nature of the product, we generally do not offer refunds. However, we are happy to help if you have any issues."
        }
    ];

    const productImages = [
        "/assets/mindfulness/Scroller Images/Product_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (2)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (3)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (4)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (5)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (6)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (7)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (8)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (9)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (10)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (11)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (12)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (13)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (14)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (15)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (16)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (17)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (18)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (19)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (20)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (21)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (22)_converted.webp",
        "/assets/mindfulness/Scroller Images/Product (23)_converted.webp"
    ];

    // Split images for marquee
    const row1Images = productImages.slice(0, 12);
    const row2Images = productImages.slice(12, 23);

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary-foreground overflow-x-hidden">

            {/* Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50"
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">M</div>
                            <h1 className="text-lg md:text-xl font-bold text-foreground tracking-tight">
                                Mindfulness Coaching Kit
                            </h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <CurrencySwitcher />
                            <Button variant="ghost" size="sm" className="hidden md:flex text-muted-foreground hover:text-foreground" onClick={() => window.open('https://members.weddingkit.pro/login', '_self')}>
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* 1. Hero Section */}
            <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-32 px-4 md:px-6 bg-gradient-to-b from-background via-background to-primary/5">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-8 md:mb-12">
                        <div className="flex justify-center gap-1 mb-3 md:mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <div className="flex justify-center mb-6 md:mb-8">
                            <img
                                src="/images/hero-testimonial.jpg"
                                alt="Customer Testimonial"
                                className="rounded-lg shadow-lg max-w-[280px] md:max-w-sm border border-border"
                            />
                        </div>


                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6 leading-tight px-2 max-w-5xl mx-auto">
                            Transform Your <span className="text-primary">Mindfulness Coaching</span> Practice <br className="md:hidden" />
                            <span className="bg-primary/10 text-primary px-2 py-1 rounded inline-block transform -rotate-1">With Complete Coaching Tools</span> <br className="md:hidden" />
                            And Empower Your Clients With <br className="md:hidden" />
                            <span className="bg-primary/10 text-primary px-2 py-1 rounded inline-block transform -rotate-1">Professional Mindfulness Resources</span>
                        </h1>

                        <p className="text-lg sm:text-lg md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                            Complete mindfulness coaching toolkit with workbooks, meditation scripts, worksheets, and Canva templates - everything you need to run a professional mindfulness practice
                        </p>

                        {/* Main Benefits List */}
                        <div className="mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-base md:text-base">
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-primary" />
                                    <span>Mindfulness Workbooks & Journals</span>
                                </li>
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-primary" />
                                    <span>Self-Compassion Meditation Scripts</span>
                                </li>
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-primary" />
                                    <span>Fully Editable Canva Templates</span>
                                </li>
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-primary" />
                                    <span>Client Onboarding & Assessment Tools</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
                            <Button size="lg" className="w-full sm:w-auto text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                                <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                Get Instant Access
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 border-2 rounded-full" onClick={handleCheckoutRedirect}>
                                <PlayCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                See What's Inside
                            </Button>
                        </div>

                        <p className="text-sm md:text-sm text-muted-foreground flex items-center justify-center gap-2">
                            <Check className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                            Compatible with Free & Pro Canva • Instant download
                        </p>
                    </div>

                    {/* Hero Image */}
                    <div className="relative max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white"
                        >
                            <img
                                src="/assets/mindfulness/Hero Image_converted.webp"
                                alt="Mindfulness Coaching Kit Hero"
                                className="w-full h-auto"
                            />
                        </motion.div>
                        {/* Floating Badge */}
                        <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white text-foreground rounded-full p-4 md:p-6 shadow-xl hidden sm:block border border-border">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold font-serif text-primary">8</div>
                                <div className="text-sm md:text-base font-medium">Sections</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Product Gallery Section (Marquee) */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-background overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <Badge variant="secondary" className="mb-3 md:mb-4 text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary border-none">
                            <ImageIcon className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 inline" />
                            Inside the Toolkit
                        </Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 md:mb-4 px-2">
                            What's Inside the Mindfulness Coaching Kit
                        </h2>
                        <p className="text-lg md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                            A complete system for mindfulness coaches with workbooks, scripts, and templates
                        </p>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        {/* Row 1 - Scroll Left */}
                        <div className="relative">
                            <div className="flex gap-3 md:gap-4 animate-[scroll-left_40s_linear_infinite] hover:[animation-play-state:paused]">
                                {[...row1Images, ...row1Images, ...row1Images].map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative flex-shrink-0 w-[280px] md:w-[320px] group overflow-hidden rounded-lg border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg aspect-square"
                                    >
                                        <img
                                            src={image}
                                            alt={`Mindfulness Toolkit ${index}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Row 2 - Scroll Right */}
                        <div className="relative">
                            <div className="flex gap-3 md:gap-4 animate-[scroll-right_40s_linear_infinite] hover:[animation-play-state:paused]">
                                {[...row2Images, ...row2Images, ...row2Images].map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative flex-shrink-0 w-[280px] md:w-[320px] group overflow-hidden rounded-lg border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg aspect-square"
                                    >
                                        <img
                                            src={image}
                                            alt={`Mindfulness Toolkit ${index}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10 md:mt-16">
                        <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Get Instant Access
                        </Button>
                    </div>
                </div>
            </section>

            {/* 3. Features Grid */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 md:mb-4 px-2">
                            Transform Your Mindfulness Practice
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                            From meditation scripts to client worksheets - this toolkit provides everything you need to run a professional mindfulness coaching practice.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group bg-background">
                                <CardContent className="p-5 md:p-8">
                                    <div className="flex items-start gap-3 md:block">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-0 md:mb-4 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                            <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg md:text-xl font-serif font-semibold mb-1.5 md:mb-2">{feature.title}</h3>
                                            <p className="text-base md:text-base text-muted-foreground">{feature.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. What's Included (Summary) */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-background to-secondary/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <Badge variant="secondary" className="mb-3 md:mb-4 text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary border-none">
                                <Heart className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 inline" />
                                What's Included
                            </Badge>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6">
                                Everything You Need for Mindfulness Coaching
                            </h2>

                            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg md:text-xl font-semibold mb-1">Complete Mindfulness Workbooks</h3>
                                        <p className="text-base md:text-base text-muted-foreground">Professional workbooks, journals, and worksheets for your coaching practice.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg md:text-xl font-semibold mb-1">Meditation Scripts & Exercises</h3>
                                        <p className="text-base md:text-base text-muted-foreground">Self-compassion scripts and guided meditation exercises for transformative sessions.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg md:text-xl font-semibold mb-1">Fully Editable Canva Templates</h3>
                                        <p className="text-base md:text-base text-muted-foreground">Customize every template to match your brand with easy-to-edit designs.</p>
                                    </div>
                                </div>
                            </div>

                            <Separator className="my-6 md:my-8" />

                            <div>
                                <h3 className="text-xl md:text-2xl font-serif font-semibold mb-3 md:mb-4 flex items-center gap-2">
                                    <Gift className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                    Everything You Need
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-sm md:text-base text-muted-foreground">
                                    {["Mindfulness Workbooks", "Meditation Scripts", "Client Worksheets", "Assessment Tools", "Social Media Templates", "Onboarding Forms"].map((item, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2">
                            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-white">
                                <img
                                    src="/assets/mindfulness/What's Inside _converted.webp"
                                    alt="What's included in the mindfulness coaching toolkit"
                                    className="w-full h-auto aspect-square object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-10 md:mt-16">
                        <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Get Instant Access
                        </Button>
                    </div>
                </div>
            </section>

            {/* 5. Detailed Product Showcase (Alternating Rows) */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-card">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <Badge variant="secondary" className="mb-3 md:mb-4 text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary border-none">
                            <FileText className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 inline" />
                            Inside Your Toolkit
                        </Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 md:mb-4 px-2">
                            Complete Mindfulness Coaching System
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                            Every resource is professionally designed and ready to use with your clients.
                        </p>
                    </div>

                    <div className="space-y-24 md:space-y-32">
                        {detailedProducts.map((product, index) => (
                            <div key={index} className="relative border-2 border-primary/20 rounded-lg p-4 md:border-0 md:rounded-none md:p-0">
                                <div className={`grid lg:grid-cols-2 gap-12 md:gap-20 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                                    {/* Image Column */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                                    >
                                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-full h-auto aspect-square object-cover transform hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        {/* Decorative background blob */}
                                        <div className={`absolute -z-10 top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl ${index % 2 === 0 ? '-left-10' : '-right-10'}`} />
                                    </motion.div>

                                    {/* Content Column */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                                <span className="font-serif font-bold text-xl">{index + 1}</span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{product.title}</h3>
                                        </div>

                                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                            {product.description}
                                        </p>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {product.items.map((item, i) => (
                                                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm md:text-base text-foreground/80">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10 md:mt-16">
                        <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Get Instant Access
                        </Button>
                    </div>
                </div>
            </section>

            {/* 9. Testimonials */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 md:mb-4 px-2">
                            Real Results from Real Mindfulness Coaches
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground px-4">
                            See how mindfulness coaches transformed their practice with this toolkit
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <img
                            src="/images/testimonials-1.png"
                            alt="Real user reviews and results 1"
                            className="w-full rounded-xl shadow-lg border border-border"
                        />
                        <img
                            src="/images/testimonials-2.png"
                            alt="Real user reviews and results 2"
                            className="w-full rounded-xl shadow-lg border border-border"
                        />
                    </div>
                </div>
            </section>

            {/* 7. Key Features Section */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <Badge variant="secondary" className="mb-3 md:mb-4 text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary border-none">
                            <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 inline" />
                            Key Features
                        </Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 md:mb-4 px-2">
                            Easy to Use, Easy to Customize
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                            Everything is designed to work seamlessly with your existing workflow
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                        {keyFeatures.map((feature, index) => (
                            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden">
                                <div className="flex flex-col">
                                    <div className="relative aspect-square overflow-hidden">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                            </div>
                                    <CardContent className="p-6 md:p-8">
                                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                                            {feature.title}
                                                </h3>
                                        <p className="text-base text-muted-foreground mb-6">
                                            {feature.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {feature.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm md:text-base text-foreground/80">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                            </div>
                                </Card>
                        ))}
                    </div>

                    <div className="text-center mt-10 md:mt-16">
                        <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Get Instant Access
                        </Button>
                    </div>
                </div>
            </section>

            {/* 9. Bonus Section */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-b from-background to-primary/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <Badge variant="secondary" className="mb-3 md:mb-4 text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary border-none">
                            <Gift className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 inline" />
                            Exclusive Bonus
                        </Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 md:mb-4 px-2">
                            Oh! I Completely Forgot
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                            You also get this amazing Mindfulness Audiobook Tracker bonus
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        {/* Image Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                                <img
                                    src="/assets/mindfulness/Category Images/Bonus_converted.webp"
                                    alt="Mindfulness Audiobook Tracker Bonus"
                                    className="w-full h-auto aspect-square object-cover transform hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                            </div>
                            {/* Decorative background blob */}
                            <div className="absolute -z-10 top-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -left-10" />
                        </motion.div>

                        {/* Content Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                    <Gift className="w-5 h-5" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Mindfulness Audiobook Tracker</h3>
                            </div>

                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Track your mindfulness audiobook journey with this comprehensive tracker. Monitor your progress, note your mood, and stay consistent with your practice.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-base text-foreground/80">Track multiple audiobooks with detailed progress monitoring</span>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-base text-foreground/80">Record listening duration and track your daily practice time</span>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-base text-foreground/80">Note your mood and reflections after each session</span>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-base text-foreground/80">Visual progress tracking with audio player interface</span>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-base text-foreground/80">Perfect for coaches to track client audiobook assignments</span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                                    <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                    Get Instant Access
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 10. How It Works */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-background">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 md:mb-4 px-2">
                            How It Works
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground px-4">
                            Get started in minutes with instant digital access
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { step: "1", title: "Purchase", description: "Complete your secure checkout" },
                            { step: "2", title: "Download", description: "Get instant access to PDF with links" },
                            { step: "3", title: "Customize", description: "Edit in Canva (Free or Pro)" },
                            { step: "4", title: "Launch", description: "Start using your new assets" }
                        ].map((item, index) => (
                            <div key={index} className="text-center relative">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl md:text-2xl font-serif font-bold mx-auto mb-3 md:mb-4 shadow-lg">
                                    {item.step}
                                </div>
                                <h3 className="text-base md:text-xl font-serif font-semibold mb-1.5 md:mb-2">{item.title}</h3>
                                <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -z-10" />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 max-w-3xl mx-auto">
                        <img src="/assets/mindfulness/CTA Image_converted.webp" alt="How it works - Get started today" className="w-full h-auto rounded-xl shadow-lg border border-border aspect-square object-cover" />
                    </div>

                    <div className="text-center mt-10 md:mt-16">
                        <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Get Instant Access
                        </Button>
                    </div>
                </div>
            </section>

            {/* 11. Final CTA (Pricing) */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-gradient-to-br from-primary/20 via-background to-secondary/20 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4 md:mb-6 px-2">
                        Start Your Mindfulness Coaching Practice Today
                    </h2>
                    <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                        Join mindfulness coaches who have transformed their practice with professional tools and resources.
                    </p>

                    <Card className="border-2 md:border-4 border-primary/20 shadow-2xl mb-6 md:mb-8 bg-card">
                        <CardContent className="p-6 md:p-12">
                            <div className="mb-5 md:mb-6">
                                <div className="text-5xl md:text-6xl font-serif font-bold text-primary mb-2">{formatPrice(9)}</div>
                                <div className="text-sm md:text-base text-muted-foreground">One-time payment • Instant access</div>
                            </div>

                            <ul className="space-y-2.5 md:space-y-3 mb-6 md:mb-8 text-left max-w-md mx-auto">
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#7F8D74' }} />
                                    <span className="text-sm md:text-base">Mindfulness Workbooks & Journals</span>
                                </li>
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#7F8D74' }} />
                                    <span className="text-sm md:text-base">Self-Compassion Meditation Scripts</span>
                                </li>
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#7F8D74' }} />
                                    <span className="text-sm md:text-base">Fully Editable Canva Templates</span>
                                </li>
                                <li className="flex items-center gap-2.5 md:gap-3">
                                    <Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" style={{ color: '#7F8D74' }} />
                                    <span className="text-sm md:text-base">Client Onboarding & Assessment Tools</span>
                                </li>
                            </ul>

                            <Button size="lg" className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 bg-[#6b7762] hover:bg-[#5a6554] text-white rounded-full shadow-xl hover:shadow-2xl transition-all max-w-md mx-auto" onClick={handleCheckoutRedirect}>
                                <Download className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                                Get Instant Access Now
                            </Button>

                            <p className="text-sm md:text-base text-muted-foreground mt-5 md:mt-6">
                                <Clock className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
                                Digital download • Instant access
                            </p>
                        </CardContent>
                    </Card>

                    <p className="text-sm md:text-base text-muted-foreground px-4">
                        This is a digital product for personal use only. No refunds on digital downloads.
                    </p>
                </div>
            </section>

            {/* 12. FAQ Section */}
            <section className="py-12 md:py-24 px-4 md:px-6 bg-card">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 md:mb-4 px-2">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground px-4">
                            Everything you need to know about the toolkit
                        </p>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                        {faqs.map((faq, index) => (
                            <Card key={index} className="border-2 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full p-4 md:p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                                >
                                    <h3 className="text-lg md:text-xl font-semibold pr-3 md:pr-4">{faq.question}</h3>
                                    <ChevronDown
                                        className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {openFaq === index && (
                                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                                        <p className="text-base md:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-10 md:mt-16">
                        <Button size="lg" className="text-lg md:text-xl px-6 md:px-8 py-5 md:py-6 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all" onClick={handleCheckoutRedirect}>
                            <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Get Instant Access
                        </Button>
                    </div>
                </div>
            </section>

            {/* 13. Footer */}
            <footer className="py-8 md:py-12 px-4 md:px-6 bg-card border-t">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-5 md:mb-6">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-1.5 md:mb-2">
                            Mindfulness Coaching Kit
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground">Empowering mindfulness coaches to transform their practice.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base text-muted-foreground mb-5 md:mb-6 px-4">
                        <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
                        <span className="hidden sm:inline">•</span>
                        <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
                        <span className="hidden sm:inline">•</span>
                        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground">
                        © 2025 Mindfulness Coaching Kit. All rights reserved.
                    </p>
                </div>
            </footer>

            {/* Sticky Mobile Checkout Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t-2 border-primary/20 shadow-lg z-50 md:hidden">
                <div className="px-4 py-3 flex items-center justify-between gap-3">
                    <div className="flex-shrink-0">
                        <div className="text-2xl font-serif font-bold text-foreground">
                            {currency === "USD" && (
                                <span className="line-through text-muted-foreground text-lg mr-2">$297</span>
                            )}
                            {currency === "INR" && (
                                <span className="line-through text-muted-foreground text-lg mr-2">₹2,999</span>
                            )}
                            {formatPrice(9)} only
                        </div>
                    </div>
                    <Button size="lg" className="bg-[#6b7762] hover:bg-[#5a6554] text-white rounded-full shadow-lg text-base py-5 px-6" onClick={handleCheckoutRedirect}>
                        <Download className="w-4 h-4 mr-2" />
                        Get Access
                    </Button>
                </div>
            </div>
        </div>
    );
}