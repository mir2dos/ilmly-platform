import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { TestItemType } from "../types";

interface TestItemProps {
  test: TestItemType;
}

export default function TestItem({ test }: TestItemProps) {
  return (
    <Card>
      <CardContent className="space-y-4">
        <CardTitle className="text-xl">{test.name}</CardTitle>
        <CardDescription>
          {test.subject} • {test.createdAt.toLocaleDateString()}
        </CardDescription>
        <p className="text-sm">
          Attempts: {test.stats.total} | Passed: {test.stats.passed} | Failed:{" "}
          {test.stats.failed}
        </p>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link href={`/tests/${test.id}`}>Edit test</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`https://ilmly.ai/tests/${test.id}`} target="_blank">
              Preview test <ExternalLink />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
