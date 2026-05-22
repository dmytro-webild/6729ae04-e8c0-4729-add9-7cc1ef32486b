"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Clock, Droplet, Globe, ShieldCheck, Timer, Truck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Our Woods", id: "products" },
        { name: "Process", id: "features" },
        { name: "Quality", id: "metrics" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Sai Vivek Wood Exports"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{ variant: "downward-rays-animated-grid" }}
      title="Premium Indian Sandalwood & Agarwood Exporters"
      description="Delivering authentic Red Sandalwood Tirupati A-Grade, 45–60 years aged, 6–7% oil content, White Sandalwood 25 years aged, 5% oil content, and premium Agarwood chips to discerning global manufacturers and luxury brands since inception."
      testimonials={[
        { name: "Pierre Dubois", handle: "@fragrance_group", testimonial: "The authenticity and oil yield of Sai Vivek's Sandalwood have been unmatched in our formulations.", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/middle-age-businessman-smiling-happy-standing-city_839833-25759.jpg" },
        { name: "Yuki Tanaka", handle: "@cosmetic_asia", testimonial: "A reliable partner providing high-grade materials with excellent documentation and logistics.", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/glamorous-model-make-up-studio_23-2148328753.jpg" },
        { name: "Ahmed Al-Mansoori", handle: "@luxury_perfumes", testimonial: "Exceptional Agarwood chips. The provenance and quality are perfect for our high-end oud line.", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/fashion-designer-trying-blue-coat-senior-man-his-shop_23-2148180344.jpg" },
        { name: "Elena Rossi", handle: "@artisan_oils", testimonial: "Professional, consistent, and deeply committed to sustainable sourcing. A premier export partner.", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/world-science-day-research-innovation-elements_23-2151812338.jpg" },
        { name: "Marcus Weber", handle: "@luxury_incense", testimonial: "Truly aged woods. The scent profile of their sandalwood is exactly what our premium range demands.", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/male-fashion-designer-taking-fabric-from-shelf-his-customer_23-2148180328.jpg" }
      ]}
      buttons={[{ text: "Request Premium Export Quote", href: "#contact" }]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E5S10OoXC9Oqd8yU2CknjqVnJu/uploaded-1779466794456-niermvkz.jpg"
      mediaAnimation="slide-up"
      avatars={[
        { src: "https://img.b2bpic.net/free-photo/cheerful-attractive-businesswoman-crossing-arms_1262-4724.jpg", alt: "User avatar" },
        { src: "https://img.b2bpic.net/free-photo/confident-handsome-middle-aged-entrepreneur_1262-4871.jpg", alt: "User avatar" },
        { src: "https://img.b2bpic.net/free-photo/closeup-serious-business-leader-sitting_1262-4831.jpg", alt: "User avatar" },
        { src: "https://img.b2bpic.net/free-photo/confident-business-leader-sitting-table_1262-4870.jpg", alt: "User avatar" },
        { src: "https://img.b2bpic.net/free-photo/blonde-business-woman-work_23-2149100301.jpg", alt: "User avatar" }
      ]}
      avatarText="Trusted by 500+ global brands"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Unmatched Provenance & Quality"
      description={[
        "We pride ourselves on providing aged, certified woods sourced from traditional Indian regions with meticulous attention to oil content and grade purity.",        "Our exports are underpinned by rigorous authentication, ensuring that every shipment meets the stringent quality requirements of international perfume houses and luxury cosmetic manufacturers.",        "Through long-term dedication to sustainable practices and government-backed sourcing, Sai Vivek Wood Exports remains the trusted source for high-end wood materials globally."
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Red Sandalwood (A-Grade)", price: "Contact for B2B Pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E5S10OoXC9Oqd8yU2CknjqVnJu/uploaded-1779466794456-i4aeix35.jpg" },
        { id: "p2", name: "White Sandalwood (Aged)", price: "Contact for B2B Pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E5S10OoXC9Oqd8yU2CknjqVnJu/uploaded-1779466794456-4eg3unc8.jpg" },
        { id: "p3", name: "Premium Agarwood Chips", price: "Contact for B2B Pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E5S10OoXC9Oqd8yU2CknjqVnJu/uploaded-1779466794456-27wh3vvu.jpg" },
        { id: "p4", name: "Sandalwood Oil (Distilled)", price: "Contact for B2B Pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E5S10OoXC9Oqd8yU2CknjqVnJu/uploaded-1779466794456-n9xdd2j2.jpg" },
        { id: "p5", name: "Agarwood Oud Wood", price: "Contact for B2B Pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E5S10OoXC9Oqd8yU2CknjqVnJu/uploaded-1779466794456-niermvkz.jpg" },
        { id: "p6", name: "Incense Grade Chips", price: "Contact for B2B Pricing", imageSrc: "https://img.b2bpic.net/free-photo/close-up-perfume-floating-water_23-2150963110.jpg" }
      ]}
      title="Premium Export Offerings"
      description="Our curated selection of high-grade sandalwood and agarwood, prepared for international manufacturing standards."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Government Sourced",          description: "Strict adherence to government regulations ensures total authenticity.",          icon: ShieldCheck,
          mediaItems: [
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E5S10OoXC9Oqd8yU2CknjqVnJu/uploaded-1779466794456-niermvkz.jpg" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E5S10OoXC9Oqd8yU2CknjqVnJu/uploaded-1779466794456-i4aeix35.jpg" }
          ]
        },
        {
          title: "Aged Quality",          description: "45-60 years of natural aging for superior scent and oil profiles.",          icon: Clock,
          mediaItems: [
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E5S10OoXC9Oqd8yU2CknjqVnJu/uploaded-1779466794456-27wh3vvu.jpg" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E5S10OoXC9Oqd8yU2CknjqVnJu/uploaded-1779466794456-n9xdd2j2.jpg" }
          ]
        },
        {
          title: "Global Logistics",          description: "Secure, fast, and compliant shipping to Europe, UAE, and Asia.",          icon: Truck,
          mediaItems: [
            { imageSrc: "https://img.b2bpic.net/free-photo/perfume-bottle-held-by-hand_23-2152010127.jpg" },
            { imageSrc: "https://img.b2bpic.net/free-photo/hand-showing-perforated-globe-shape-paper-green-nature-background_53876-47086.jpg" }
          ]
        }
      ]}
      title="The Sai Vivek Advantage"
      description="Why global luxury brands trust our export processes."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Pierre Dubois", role: "CEO", company: "Dubois Fragrance", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background_158538-9539.jpg" },
        { id: "t2", name: "Yuki Tanaka", role: "Sourcing Director", company: "Tokyo Cosmetics", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/side-view-mature-woman-working-greenhouse_171337-5851.jpg" },
        { id: "t3", name: "Ahmed Al-Mansoori", role: "Lead Buyer", company: "Oud Emirates", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/small-business-manager-his-workshop_23-2149094573.jpg" },
        { id: "t4", name: "Elena Rossi", role: "Head Chemist", company: "Pure Scents", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/women-shopping-buying-consumer-products-customer-day-celebration_23-2151623386.jpg" },
        { id: "t5", name: "Marcus Weber", role: "Principal Trader", company: "Global Incense", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/artisan-doing-woodcutting_23-2150600782.jpg" }
      ]}
      title="Global Trusted Quality"
      description="Our work speaks through the premium brands we supply worldwide."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        { id: "m1", value: "45+", title: "Years Aged", description: "Average aging of our premium red sandalwood.", icon: Timer },
        { id: "m2", value: "7%", title: "Peak Oil Content", description: "Ensuring highest purity for fragrance manufacturers.", icon: Droplet },
        { id: "m3", value: "15+", title: "Countries Served", description: "Extensive network across UAE, Europe, and Asia.", icon: Globe }
      ]}
      title="Export Excellence"
      description="Numbers that define our reliable supply network."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={false}
      names={[
        "Fragrance House A", "Natural Skincare B", "Global Trade Corp", "Premium Oud Brand", "Incense Global", "Export Standards Org", "Luxury Goods Supply"
      ]}
      title="Global Industry Partnerships"
      description="We are proud to serve some of the finest brands in the international markets."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{ variant: "sparkles-gradient" }}
      text="Are you ready to source premium, aged Indian woods for your luxury manufacturing requirements? Connect with us to discuss bulk availability, export certifications, and logistics for your upcoming production cycles."
      buttons={[{ text: "Contact Our Export Team", href: "mailto:exports@saivivek.com" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Exports",          items: [
            { label: "Red Sandalwood", href: "#products" },
            { label: "White Sandalwood", href: "#products" },
            { label: "Agarwood", href: "#products" }
          ]
        },
        {
          title: "Company",          items: [
            { label: "About Us", href: "#about" },
            { label: "Sustainability", href: "#" },
            { label: "Contact", href: "#contact" }
          ]
        },
        {
          title: "Legal",          items: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" }
          ]
        }
      ]}
      bottomLeftText="© 2024 Sai Vivek Wood Exports"
      bottomRightText="Internationally Certified Export Specialists"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
