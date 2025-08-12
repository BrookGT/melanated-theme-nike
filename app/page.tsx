import Header from "@/components/layout/header";
import PromoBar from "@/components/marketing/promo-bar";
import Hero from "@/components/sections/hero";
import FeaturedProducts from "@/components/sections/featured-products";
import CategoryPanels from "@/components/sections/category-panels";
import EditorialStories from "@/components/sections/editorial-stories";
import SocialCarousel from "@/components/sections/social-carousel";
import Testimonials from "@/components/sections/testimonials";
import Newsletter from "@/components/sections/newsletter";
import Footer from "@/components/layout/footer";

export default function Page() {
    return (
        <div className="min-h-dvh bg-background text-foreground">
            <Header />
            <PromoBar />
            <main id="main" className="flex flex-col">
                <Hero />
                <FeaturedProducts />
                <CategoryPanels />
                <EditorialStories />
                <SocialCarousel />
                <Testimonials />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
}
