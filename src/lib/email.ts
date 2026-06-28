import { Resend } from 'resend'
import nodemailer from 'nodemailer'

const resend = new Resend(process.env.RESEND_API_KEY)

const gmailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function sendAdminNotification(brief: any) {
  await resend.emails.send({
    from: 'Brief System <onboarding@resend.dev>',
    to: process.env.ADMIN_EMAIL!,
    subject: ` Brief Baru Masuk: ${brief.companyName || 'Tanpa Nama'} - ${brief.contactName || ''}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #000;">Brief Baru Masuk!</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Nama</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${brief.contactName || '-'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Perusahaan</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${brief.companyName || '-'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${brief.contactEmail || '-'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">WhatsApp</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${brief.contactWhatsApp || '-'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Jenis Website</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${brief.websiteType || '-'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Budget</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${brief.budgetRange || '-'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; color: #666;">Deadline</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${brief.desiredLaunchDate || '-'}</td></tr>
        </table>
        <div style="margin-top: 24px;">
          <a href="${process.env.NEXT_PUBLIC_URL}/admin/${brief.id}" style="background: #000; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
            Lihat Brief Lengkap →
          </a>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 24px;">Dikirim otomatis dari sistem Client Brief Builder</p>
      </div>
    `
  })
}

export async function sendClientConfirmation(brief: any) {
  if (!brief.contactEmail) return

  await gmailTransporter.sendMail({
    from: `"Brief System" <${process.env.GMAIL_USER}>`,
    to: brief.contactEmail,
    subject: ` Brief Anda Telah Diterima - ${brief.companyName || ''}`,
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #000000; padding: 40px; text-align: center;">
              <div style="font-size: 32px; margin-bottom: 8px;">✦</div>
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.5px;">Brief Anda Telah Diterima</h1>
              <p style="color: #999999; margin: 8px 0 0 0; font-size: 14px;">Terima kasih telah mempercayakan proyek Anda kepada kami</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px;">
              <p style="color: #374151; font-size: 16px; margin: 0 0 8px 0;">Halo, <strong>${brief.contactName || ''}</strong> </p>
              <p style="color: #6b7280; font-size: 15px; line-height: 1.7; margin: 0 0 32px 0;">
                Kami telah menerima project brief dari <strong style="color: #111827;">${brief.companyName || 'perusahaan Anda'}</strong>. 
                Tim kami akan segera melakukan review menyeluruh dan menghubungi Anda dalam waktu dekat.
              </p>

              <!-- Info Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 12px; margin-bottom: 32px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 16px 0; font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Ringkasan Brief</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; width: 40%;">Nama</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px; font-weight: 500;">${brief.contactName || '-'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Perusahaan</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px; font-weight: 500;">${brief.companyName || '-'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Jenis Proyek</td>
                        <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px; font-weight: 500;">${brief.websiteType || '-'}</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Target Launch</td>
                        <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 500;">${brief.desiredLaunchDate || '-'}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Steps -->
              <p style="margin: 0 0 16px 0; font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Langkah Selanjutnya</p>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 32px; height: 32px; background: #000; border-radius: 50%; text-align: center; vertical-align: middle;">
                          <span style="color: #fff; font-size: 13px; font-weight: 600;">1</span>
                        </td>
                        <td style="padding-left: 12px; color: #374151; font-size: 14px; line-height: 1.5;">Tim kami akan menganalisis kebutuhan Anda <strong>secepatnya</strong></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 32px; height: 32px; background: #000; border-radius: 50%; text-align: center; vertical-align: middle;">
                          <span style="color: #fff; font-size: 13px; font-weight: 600;">2</span>
                        </td>
                        <td style="padding-left: 12px; color: #374151; font-size: 14px; line-height: 1.5;">Kami akan menghubungi Anda melalui <strong>email/WhatsApp</strong> untuk menjadwalkan konsultasi awal</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 32px; height: 32px; background: #000; border-radius: 50%; text-align: center; vertical-align: middle;">
                          <span style="color: #fff; font-size: 13px; font-weight: 600;">3</span>
                        </td>
                        <td style="padding-left: 12px; color: #374151; font-size: 14px; line-height: 1.5;">Setelah konsultasi, kami akan mengirimkan <strong>proposal & penawaran resmi</strong></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Contact -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 12px; margin-bottom: 32px;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px;">Ada pertanyaan mendesak? Hubungi kami di</p>
                    <a href="mailto:${process.env.ADMIN_EMAIL}" style="color: #000000; font-size: 15px; font-weight: 600; text-decoration: none;">${process.env.ADMIN_EMAIL}</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 40px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px; line-height: 1.6;">
                Email ini dikirim otomatis sebagai konfirmasi penerimaan brief.<br>
                Mohon tidak membalas email ini secara langsung.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `
  })
}