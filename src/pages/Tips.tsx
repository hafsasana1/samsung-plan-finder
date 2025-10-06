import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Tips = () => {
  const articles = [
    {
      title: "Is Samsung Care+ Worth It in 2025?",
      description: "A comprehensive analysis of Samsung Care+ coverage, pricing, and whether it's the right choice for your device.",
      href: "#samsung-care-worth-it",
    },
    {
      title: "Top 5 Samsung Insurance Hacks",
      description: "Expert tips to save money on device protection while maximizing your coverage benefits.",
      href: "#insurance-hacks",
    },
    {
      title: "How to File a Care+ Claim",
      description: "Step-by-step guide to filing insurance claims and getting your device repaired or replaced quickly.",
      href: "#file-claim",
    },
  ];

  const faqs = [
    {
      question: "What does Samsung Care+ cover?",
      answer: "Samsung Care+ covers accidental damage from handling, mechanical breakdowns, and includes theft & loss protection (on select plans). It also provides expert support and same-day replacement options.",
    },
    {
      question: "How much is the deductible?",
      answer: "Deductibles vary by device and claim type. Screen repairs typically range from $29-$99, while full device replacements can be $99-$249 depending on your device model.",
    },
    {
      question: "Can I add Samsung Care+ after purchase?",
      answer: "Yes, but there's a limited window. You typically have 60 days from device purchase to add Samsung Care+, and your device must be in good working condition with no existing damage.",
    },
    {
      question: "What's the difference between carrier insurance and Samsung Care+?",
      answer: "Samsung Care+ is official Samsung coverage with same-day replacement and expert support. Carrier insurance is provided by third parties and may have different terms, pricing, and replacement timelines.",
    },
    {
      question: "How many claims can I file per year?",
      answer: "Most Samsung Care+ plans allow 3 claims per 12-month period. Some plans may have different limits, so check your specific plan details.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-subtle py-12 md:py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-4 text-4xl font-bold text-foreground">Tips & Guides</h1>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about Samsung device protection and insurance
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container py-12">
          <AdSlot id="tips-top-ad" className="mb-12" />

          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Featured Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {articles.map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-lg border border-border bg-card p-6 shadow-card hover:shadow-lg transition-shadow"
                >
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{article.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{article.description}</p>
                  <Button variant="link" className="p-0 text-primary" asChild>
                    <a href={article.href}>
                      Read More <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </motion.article>
              ))}
            </div>
          </section>

          <AdSlot id="tips-middle-ad" className="mb-16" />

          <section className="mb-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <div className="text-center">
            <p className="mb-4 text-muted-foreground">Ready to get your personalized quote?</p>
            <Link to="/model">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Start Insurance Quiz
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tips;
