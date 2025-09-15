export type TestItemType = {
  id: string;
  name: string;
  subject: string;
  createdAt: Date;
  updatedAt: Date | null;
  stats: {
    total: number;
    passed: number;
    failed: number;
  };
};
