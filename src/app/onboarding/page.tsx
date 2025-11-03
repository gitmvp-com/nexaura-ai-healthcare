import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";

export default async function OnboardingPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/auth/signin");
  }

  return (
    <MaxWidthWrapper className="py-10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold">Welcome to Nexaura!</h1>
          <p className="text-muted-foreground">
            Let's set up your health profile to get personalized insights.
          </p>
        </div>

        <div className="border rounded-lg p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
            <p className="text-muted-foreground">
              We'll guide you through a quick setup process to understand your health needs.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold">Personal Information</h3>
                <p className="text-sm text-muted-foreground">Basic health details</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold">Current Symptoms</h3>
                <p className="text-sm text-muted-foreground">What you're experiencing</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold">Medications</h3>
                <p className="text-sm text-muted-foreground">Current medications</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h3 className="font-semibold">Mental Wellness</h3>
                <p className="text-sm text-muted-foreground">Your current state of mind</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a href="/dashboard">
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium">
                Skip to Dashboard
              </button>
            </a>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
