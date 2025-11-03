import { MaxWidthWrapper, Navbar, Footer } from "@/components";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Activity, Brain, Heart, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <MaxWidthWrapper className="py-20">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              AI-Powered Healthcare
              <span className="block text-primary">At Your Fingertips</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track symptoms, manage medications, monitor mental wellness, and get AI-powered health insights.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/auth/signin">
                <Button size="lg" variant="outline">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <FeatureCard
              icon={<Activity className="h-10 w-10" />}
              title="Symptom Tracking"
              description="Log and monitor your symptoms with intensity and frequency tracking."
            />
            <FeatureCard
              icon={<Heart className="h-10 w-10" />}
              title="Mental Wellness"
              description="Track your mood, sleep quality, stress levels, and anxiety."
            />
            <FeatureCard
              icon={<Brain className="h-10 w-10" />}
              title="AI Diagnostics"
              description="Get AI-powered health insights and medical advice."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10" />}
              title="Medication Management"
              description="Track medications, dosage, and adherence to your health plan."
            />
          </div>
        </MaxWidthWrapper>
      </main>
      <Footer />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
