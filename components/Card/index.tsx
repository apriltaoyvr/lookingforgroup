import { Character } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import placehoder from '/public/images/placeholder.jpg'

const Card = ({ character }: { character: Character }) => {
  return (
    <div className="max-w-sm rounded-lg border border-neutral-200 bg-white shadow-md dark:border-neutral-700 dark:bg-neutral-800">
      <figure className="max-h-sm relative aspect-square max-w-sm rounded-lg border-0 bg-neutral-200 p-0  shadow-md dark:bg-neutral-800">
        {character.image ? (
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="rounded-lg bg-neutral-200 object-cover dark:bg-neutral-800"
          />
        ) : (
          <Image
            className="h-auto max-w-full"
            src={placehoder}
            alt="No image :("
          />
        )}
      </figure>
      <article className="p-5">
        <header>
          <h2 className="mb-2 text-2xl  font-bold tracking-tight text-neutral-900 dark:text-white">
            {character.name}
          </h2>
          <hgroup className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
            <h3>Level {character.level}</h3>
            <h4 className='capitalize'>{character.class}</h4>
          </hgroup>
        </header>
        <p className="mb-3 whitespace-pre-line font-normal text-neutral-700 dark:text-neutral-400	">
          {character.description}
        </p>
      </article>
    </div>
  );
};

export default Card;
