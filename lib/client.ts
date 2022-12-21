import { PrismaClient } from '@prisma/client';
import { createClient } from '@supabase/supabase-js';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  //@ts-ignore
  if (!global.prisma) {
    //@ts-ignore
    global.prisma = new PrismaClient();
  }

  //@ts-ignore
  prisma = global.prisma;
}

export const supabase = createClient(
  //@ts-ignore
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default prisma;
