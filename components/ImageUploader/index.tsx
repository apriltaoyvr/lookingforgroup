import { ChangeEvent } from 'react';
import axios from 'axios';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { nanoid } from 'nanoid';

export default function ImageUploader({
  image,
  setImage,
}: {
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}) {
  let pageImage: string = '';
  const supabase = useSupabaseClient();

  async function upload(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      throw new Error('You must select an image to upload.');
    }

    const file = event.target.files[0];
    const fileExt = file.name.split('.').pop();
    const fileName = `${nanoid()}.${fileExt}`;
    const filePath = `${fileName}`;

    let { error: uploadError } = await supabase.storage
      .from('profiles')
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      throw uploadError;
    }
  }

  return (
    <section className="flex w-full items-center justify-center p-4">
      <label
        htmlFor="dropzone-file"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg"
        style={{
          backgroundImage: `url("${pageImage}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        {!image && (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="mb-3 h-10 w-10 text-neutral-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Images must be 10mb or under
            </p>
          </div>
        )}

        <input
          id="dropzone-file"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => upload(event)}
        />
      </label>
    </section>
  );
}
