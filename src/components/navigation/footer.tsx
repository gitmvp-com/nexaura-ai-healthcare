import MaxWidthWrapper from "../global/max-width-wrapper";
import { LINKS } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-20">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Nexaura AI Healthcare. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href={LINKS.github}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href={LINKS.twitter}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Twitter
            </Link>
            <Link
              href={LINKS.linkedin}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
