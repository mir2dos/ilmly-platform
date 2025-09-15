import { getTest } from "@/features/tests/getTest";

export default async function TestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const test = await getTest(slug);

  return (
    <div>
      <h1>{test.name}</h1>
      <p>{test.count}</p>
    </div>
  );
}
