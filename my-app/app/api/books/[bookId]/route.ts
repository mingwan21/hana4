import { getBook } from '@/actions/books';
import { notFound } from 'next/navigation';
import { books } from '../bookdata';

type Params = {
  params: { bookId: string };
};

export function PATCH(req: Request, {params: {bookId}}:Params) {
  const {title, writer} = await req.json()
}

export function GET(req: Request, { params: { bookId } }: Params) {
  const book = getBook(+bookId);
  if (!book) return notFound();

  return Response.json(book);
}

export function DELETE(req: Request, { params: { bookId } }: Params) {
  const idx = books.findIndex((book) => book.id === +bookId);
  if (idx === -1) return notFound();
  books.splice(idx, 1);
  return new Response('ok');
}
