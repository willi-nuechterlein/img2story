# img2story

Generate a story from an image.

## Features

- Upload image or paste image URL
- Select story genre and optionally name main characters
- Generate story
- Save story and share link

## Technologies

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/) + [Stitches](https://stitches.dev/) for building the UI
- [OpenAI GPT-3](https://openai.com/product/gpt-4) for story creation
- [replicate](https://replicate.com/) for image recognition
- [upstash](https://upstash.com/) rate limiting
- [supabase](https://xata.io/) for image storage

## How it works

1. Image gets uploaded to supabase
2. Image URL is send to [replicate](https://replicate.com/) for image recognition - returns a simple description
3. Story plot is written by GPT-3
4. Story plot is used to write full story (also GPT-3)
5. User can save story and share a link (story saved to supabase)

## Demo

[img2story](https://img2story.com)

![CleanShot 2023-05-01 at 16 51 24](https://user-images.githubusercontent.com/13342175/235476220-175c82fb-5c31-4e6f-97dd-11a0adcfaa54.png)

![CleanShot 2023-05-01 at 16 52 49](https://user-images.githubusercontent.com/13342175/235476254-662be50c-99c6-447a-ae59-01a312a6777e.png)
