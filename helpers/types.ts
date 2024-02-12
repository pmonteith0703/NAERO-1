export type Nullable<T> = T | null;
export type MappedAccount = {
  name: string;
};
export type SixWeekCycle = {
  name: string;
  startDate: string;
};
export type SixWeekBatch = {
  sixWeekBatch: {
    idea: string;
    context: string;
    sixWeekCycle: SixWeekCycle;
  };
};
export type Project = {
  id: string;
  project: string;
  context: string;
  batches: SixWeekBatch[];
  accounts: { account: MappedAccount }[];
};
export type DayPlanTasks = {
  id: string;
  day: string;
  dayGoal: string;
  done?: Nullable<boolean>;
  // tasks: NonProjectTask[];
  // projectTasks: ProjectTask[];
};
export type SubNextFunctionParam<T> = {
  items: T[];
  isSynced: boolean;
};
