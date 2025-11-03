import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Activity, Brain, Heart, Pill } from "lucide-react";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/auth/signin");
  }

  return (
    <MaxWidthWrapper className="py-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your health dashboard</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            icon={<Activity className="h-8 w-8" />}
            title="Symptoms"
            description="Track your symptoms"
            href="/dashboard/symptoms"
          />
          <DashboardCard
            icon={<Pill className="h-8 w-8" />}
            title="Medications"
            description="Manage your medications"
            href="/dashboard/medications"
          />
          <DashboardCard
            icon={<Heart className="h-8 w-8" />}
            title="Mental Wellness"
            description="Monitor your wellbeing"
            href="/dashboard/wellness"
          />
          <DashboardCard
            icon={<Brain className="h-8 w-8" />}
            title="AI Chat"
            description="Get health insights"
            href="/dashboard/chat"
          />
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/dashboard/symptoms/new">
              <Button>Log Symptom</Button>
            </Link>
            <Link href="/dashboard/medications/new">
              <Button variant="outline">Add Medication</Button>
            </Link>
            <Link href="/dashboard/wellness/new">
              <Button variant="outline">Log Wellness</Button>
            </Link>
            <Link href="/dashboard/chat">
              <Button variant="outline">Chat with AI</Button>
            </Link>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

function DashboardCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="text-primary mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
