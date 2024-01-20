const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const puppeteer = require("puppeteer");
const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/sendEmail", async (req, res) => {
  try {
    const { name, email, gender, contactno, address } = req.body;

    const pdfBuffer = await generatePDF({
      to_name: "Wemixt Team",
      from_name: name,
      from_email: email,
      gender: gender,
      contact_number: contactno,
      address,
    });

    await sendEmail({
      to: "abishekraja84@gmail.com",
      subject: "New Message Received",
      text: "Please find the attached PDF.",
      attachment: {
        filename: "message.pdf",
        content: pdfBuffer,
      },
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

async function generatePDF(data) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  const htmlTemplate = `
    <p>Hello ${data.to_name},</p>
    <p>You've received a new message from:</p>
    <p>Name: ${data.from_name}</p>
    <p>Gender: ${data.gender}</p>
    <p>Email: ${data.from_email}</p>
    <p>Contact No: ${data.contact_number}</p>
    <p>Address: ${data.address}</p>
    <p>Best wishes,</p>
    <p>Wemixt Team</p>
  `;

  await page.setContent(htmlTemplate);
  const pdfBuffer = await page.pdf();

  await browser.close();
  return pdfBuffer;
}

async function sendEmail({ to, subject, text, attachment }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 587,
    logger: true,
    secureConnection: false,
    debug: true,
    auth: {
      user: "abishekraja84@gmail.com",
      pass: "sqmh cvzv mdfw febg",
    },
  });

  const mailOptions = {
    from: "abishekraja84@gmail.com",
    to,
    subject,
    text,
    attachments: [attachment],
  };

  return transporter.sendMail(mailOptions);
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
