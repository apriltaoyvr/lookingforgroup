import { Suspense } from 'react';
import prisma from 'prisma/client';
import Card from '@/components/Card';

export const revalidate = 10800;

export default async function Matches() {
  const characters = await prisma.character.findMany();

  return (
    <div>
      <h1 className="m-8 text-center text-4xl font-bold text-neutral-900 dark:text-white">
        Let&apos;s meet your{' '}
        <strong className="bg-gradient-to-r from-red-400 to-yellow-600 bg-clip-text text-transparent">
          matches
        </strong>
      </h1>
      <main className="grid w-full place-content-center gap-6 p-8 sm:grid-cols-1 sm:place-items-center md:grid-cols-3 lg:grid-cols-4 lg:place-items-start">
        {characters.map((character) => (
          <Suspense key={character.id} fallback={<Skeleton />}>
            <Card character={character} />
          </Suspense>
        ))}
      </main>
    </div>
  );
}

function Skeleton() {
  return (
    <div
      role="status"
      className="max-w-sm animate-pulse rounded border border-neutral-200 p-4 shadow dark:border-neutral-700 md:p-6"
    >
      <div className="mb-4 flex h-48 items-center justify-center rounded bg-neutral-300 dark:bg-neutral-700">
        <svg
          className="h-12 w-12 text-neutral-200 dark:text-neutral-600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512"
        >
          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </div>
      <div className="mb-4 h-2.5 w-48 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
      <div className="mb-2.5 h-2 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
      <div className="mb-2.5 h-2 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
      <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
