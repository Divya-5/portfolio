//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Acme <divyanshi.rastogi105@gmail.com>',
            to: ['divyanshi.rastogi105@gmail.com'],
            subject: 'Hello world',
            react: <>
                <p>Email Body</p>
            </>,
            // react: EmailTemplate({ firstName: 'John' }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
