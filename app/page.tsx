'use client';
import { useEffect, useState } from 'react';
import ImageUploader from '@/components/ImageUploader';
import Image from 'next/image';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [userClass, setUserClass] = useState('');
  const [level, setLevel] = useState(0);
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {}, []);

  function handleSubmit(e) {
    e.preventDefault();
    const body = {name, userClass, level, image, desc};
    try {
      const response = await fetch('/api/characters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.status !== 200) {
        console.error('Something went wrong with the form submission');
        //set an error banner here
      } else {
        
      }


    } catch {

    }
  }

  return (
    <article>
      {!visible && (
        <section className="flex flex-col  gap-10">
          <header>
            <hgroup className="mb-8 text-4xl md:text-6xl lg:text-8xl">
              <h1 className="mb-4 font-bold leading-none tracking-tight text-neutral-900 dark:text-white">
                Welcome to{' '}
              </h1>
              <span className="mb-4 bg-gradient-to-r from-red-400 to-yellow-600 bg-clip-text font-extrabold text-transparent">
                Looking For Group
              </span>
            </hgroup>
            <h2 className="mb-4 text-4xl font-normal text-neutral-500 dark:text-neutral-300 lg:text-xl">
              Find your <strong className="text-red-400">perfect</strong>{' '}
              adventuring partner(s) today
            </h2>
          </header>
          <button
            className="place-self-end rounded-lg border-2 border-yellow-600 px-2 py-1 text-xl font-bold text-neutral-700 transition-all hover:border-yellow-500 dark:text-neutral-300 dark:hover:text-neutral-200"
            onClick={() => setVisible(true)}
          >
            Ready to start?
          </button>
        </section>
      )}
      {visible && (
        <section className="min-w-[33vw] p-4">
          <form className="flex flex-col rounded-lg border border-neutral-200 bg-white p-4 shadow-md dark:border-neutral-700 dark:bg-neutral-800" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="text-semibold text-center	text-2xl">
              Tell us about {name === '' ? 'yourself' : name}
            </h1>
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
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="" className="mb-2 block text-sm font-medium">
                  Level
                </label>
                <input
                  type="text"
                  className="text-input"
                  placeholder="10"
                  onChange={(e) => setLevel(parseInt(e.target.value))}
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="" className="mb-2 block text-sm font-medium">
                  Class
                </label>
                <input
                  type="text"
                  className="text-input"
                  placeholder="Witch"
                  onChange={(e) => setUserClass(e.target.value)}
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="" className="mb-2 block text-sm font-medium">
                  Description
                </label>
                <textarea
                  rows={6}
                  className="block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-amber-600 focus:ring-amber-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white dark:placeholder-neutral-400 dark:focus:border-amber-600 dark:focus:ring-amber-600"
                  placeholder="Hi my name is Ebony Dark'ness Dementia Raven Way and I have long ebony black hair (that's how I got my name) with purple streaks and red tips that reaches my mid-back and icy amber eyes like limpid tears"
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </section>
            <button
              type="submit"
              className="mr-2 mb-2 place-self-center rounded-lg bg-amber-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              Submit
            </button>
          </form>
        </section>
      )}
    </article>
  );
}
