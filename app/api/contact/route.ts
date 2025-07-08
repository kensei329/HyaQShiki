import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries());
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || '',
      to: process.env.RESEND_TO_EMAIL || '',
      subject: `お問い合わせ from ${data.name}${data.subject ? ' - ' + data.subject : ''}`,
      html: `<p><strong>名前：</strong> ${data.name}</p>
             <p><strong>メール：</strong> ${data.email}</p>
             <p><strong>件名：</strong> ${data.subject || ''}</p>
             <p><strong>メッセージ：</strong><br/> ${data.message}</p>`,
    });
    return NextResponse.json({ status: 'success' });
  } catch (e: any) {
    return NextResponse.json({ status: 'error', message: e.message }, { status: 500 });
  }
} 