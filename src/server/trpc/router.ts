import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { z } from 'zod';

const t = initTRPC.create({ transformer: superjson });

export const appRouter = t.router({
  memory: t.procedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input }) => {
      // TODO: Implement semantic search and recall
      return { result: `Stub: You asked '${input.query}'` };
    }),
  timeline: t.procedure
    .query(async () => {
      // TODO: Implement timeline view
      return { events: [] };
    }),
  export: t.procedure
    .query(async () => {
      // TODO: Implement export logic
      return { data: '' };
    }),
});

export type AppRouter = typeof appRouter; 