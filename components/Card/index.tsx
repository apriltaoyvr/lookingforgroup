import { Character } from '@prisma/client';
import Image from 'next/image';
import placeholder from '/public/images/placeholder.png';

const Card = ({ character }: { character: Character }) => {
  return (
    <div className="max-w-sm rounded-lg border border-neutral-200 bg-white shadow-md transition-all hover:border-neutral-300/90 dark:border-neutral-700 dark:bg-neutral-800 hover:dark:border-neutral-600 hover:dark:bg-neutral-800/90">
      <figure className="max-h-sm relative aspect-square max-w-sm rounded-lg border-0 bg-neutral-200 p-0 dark:bg-neutral-800">
        {character.image ? (
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="rounded-lg bg-neutral-200 object-cover dark:bg-neutral-800"
            draggable={false}
          />
        ) : (
          <Image
            src={placeholder}
            alt="No image :("
            fill
            draggable={false}
            className="h-full max-w-full"
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
            <h4 className="capitalize">{character.class}</h4>
          </hgroup>
        </header>
        <p className="mb-3 whitespace-pre-line font-normal leading-loose text-neutral-700 dark:text-neutral-400	">
          {character.description}
        </p>
      </article>
    </div>
  );
};

export default Card;
