'use client';
import { useEffect, useState } from 'react';
import ImageUploader from '@/components/ImageUploader';
import Image from 'next/image';

export default function Home() {
  const [image, setImage] = useState('');

  useEffect(() => {}, []);

  return (
    <article className="">
      <header>
        <h1>Welcome to Looking 4 Group</h1>
        <h2>Find your perfect adventuring partner today</h2>
      </header>
      <form className="max-w-sm rounded-lg border border-neutral-200 bg-white shadow-md dark:border-neutral-700 dark:bg-neutral-800 flex flex-col place-content-center ">
        <ImageUploader image={image} setImage={setImage} />
        <section className="mb-4 flex flex-col gap-2 p-5">
          <div className="flex flex-col">
            <label htmlFor="" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              className="text-input"
              placeholder="Ebony Darkness Ravenway"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="mb-2 block text-sm font-medium">
              Level
            </label>
            <input type="text" className="text-input" placeholder="10" />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="mb-2 block text-sm font-medium">
              Class
            </label>
            <input type="text" className="text-input" placeholder="Witch" />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="mb-2 block text-sm font-medium">
              Description
            </label>
            <textarea
              rows={6}
              className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-amber-600 focus:ring-amber-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-amber-600 dark:focus:ring-amber-600"
              placeholder="Hi my name is Ebony Dark'ness Dementia Raven Way and I have long ebony black hair (that's how I got my name) with purple streaks and red tips that reaches my mid-back and icy amber eyes like limpid tears "
            />
          </div>
        </section>
        <button
          type="button"
          className="mr-2 mb-2 place-self-center rounded-lg bg-amber-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
        >
          Submit
        </button>
      </form>
    </article>
  );
}
