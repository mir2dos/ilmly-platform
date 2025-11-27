import TestItem from "./test-item";

export default function TestList() {
  const SAMPLE_TESTS = [
    {
      id: "as45aj1dh",
      name: "Listening test",
      subject: "IELTS",
      createdAt: new Date("2025-09-01"),
      updatedAt: new Date("2025-09-01"),
    },
    {
      id: "kdfjad234a",
      name: "Reading test II",
      subject: "IELTS",
      createdAt: new Date("2025-08-25"),
      updatedAt: null,
    },
    {
      id: "mnzcvz889cz",
      name: "Reading test",
      subject: "IELTS",
      createdAt: new Date("2025-08-20"),
      updatedAt: new Date("2025-08-22"),
    },
  ];

  const SAMPLE_SUBMISSIONS = [
    {
      _id: "sub_456",
      testId: "kdfjad234a",
      studentName: "Alice",
      phone: "99890xxxxxxx",
      answers: [],
      score: 72,
      passed: true,
      submittedAt: new Date("2025-09-10"),
    },
    {
      _id: "sub_457",
      testId: "kdfjad234a",
      studentName: "Bob",
      phone: null,
      answers: [],
      score: 40,
      passed: false,
      submittedAt: new Date("2025-09-11"),
    },
  ];

  return (
    <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {SAMPLE_TESTS.map((test) => {
        const submissions = SAMPLE_SUBMISSIONS.filter(
          (s) => s.testId === test.id
        );
        const total = submissions.length;
        const passed = submissions.filter((s) => s.passed).length;
        const failed = total - passed;

        return (
          <TestItem
            key={test.id}
            test={{
              ...test,
              stats: { total, passed, failed },
            }}
          />
        );
      })}
    </ul>
  );
}
