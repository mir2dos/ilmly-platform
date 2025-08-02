import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="grid min-h-screen place-content-center justify-items-center gap-6">
      <h2 className="text-center text-4xl font-semibold">Coming soon...</h2>
      <Button asChild>
        <Link href="/">
          <ArrowLeft />
          Back to homepage
        </Link>
      </Button>
    </div>
  );
};

export default ComingSoon;
