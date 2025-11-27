export async function getTest(testId: string) {
  console.log(testId);
  return {
    name: "hello",
    count: 3,
  };
}
