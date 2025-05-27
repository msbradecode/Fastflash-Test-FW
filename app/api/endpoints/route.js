
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'data', 'endpoints.json');

export async function GET() {
  const file = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(file);
  return NextResponse.json(data);
}

export async function POST(request) {
  const body = await request.json();
  const endpoint = body.endpoint;

  if (!endpoint) {
    return NextResponse.json({ error: 'Missing endpoint' }, { status: 400 });
  }

  const file = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(file);

  const newEntry = {
    endpoint,
    key: '1c9a7556b469ae2414f1803eb5b25c7a'
  };

  data.push(newEntry);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  return NextResponse.json(data);
}
