'use client';
import { ChangeEvent, useState } from 'react';

const ImageUploader = ({
  image,
  setImage,
}: {
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  async function upload(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files === null) return;
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target === null) return;
      const dataUrl = e.target.result;
      if (typeof dataUrl === 'string') {
        setImage(dataUrl);
      }
      fetch('/api/upload', {
        method: 'POST',
        body: dataUrl,
      });
    };
    reader.readAsDataURL(file);
  }
  return (
    <section className="flex w-full items-center justify-center p-4">
      <label
        htmlFor="dropzone-file"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg"
        style={{
          backgroundImage: `url('${image}')`,
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Images only
            </p>
          </div>
        )}

        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={(event) => upload(event)}
        />
      </label>
    </section>
  );
};

export default ImageUploader;
