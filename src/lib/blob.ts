import { put, del, PutBlobResult } from '@vercel/blob';

export async function uploadVideo(file: File): Promise<string> {
  const blob: PutBlobResult = await put(file.name, file, { access: 'public' });
  return blob.url;
}

export async function deleteVideo(url: string): Promise<void> {
  await del(url);
}