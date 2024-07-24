import { NextResponse } from 'next/server';
import { sendMail } from '../../../components/lib/mail';

export async function POST(request: Request) {
    const { email, subject, message } = await request.json();
    try {
        await sendMail(email, subject, message);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
}
