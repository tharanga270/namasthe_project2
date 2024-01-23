const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.MAIN_PORT || 5001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["https://namasthe-project2-lbl5.vercel.app"],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());

app.post("/sendEmail", async (req, res) => {
  try {
    const { name, email, gender, contactno, address } = req.body;

    const pdfBuffer = await generatePDF({
      to_name: "Team Namaste",
      from_name: name,
      from_email: email,
      gender,
      contact_number: contactno,
      address,
    });
    const emailBody = `
    Hello Team Namaste,

    We have received a request application from ${name}.
    Please find the attached PDF.
    Thank you.
    
    Regards,
    Team Wemixt
  `;
    await sendEmail({
      to: process.env.TO_EMAIL2, //ruc
      // to: process.env.TO_EMAIL, //abi
      subject: "New Application Received",
      text: emailBody,

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
  const imageFilePath = path.resolve(
    __dirname,
    ".",
    "Assets",
    "NamasteLogo.png"
  );
  // const wemixtImagePath = path.resolve(
  //   __dirname,
  //   ".",
  //   "Assets",
  //   "wemixtLogo.png"
  // );

  const rectangleImageBase64 = fs.readFileSync(imageFilePath, "base64");
  // const wemixtImageBase64 = fs.readFileSync(wemixtImagePath, "base64");
  // <img src="data:image/png;base64,${rectangleImageBase64}" alt="Rectangle Logo" style="width: 150px; height: 200px;"></img>
  const htmlTemplate = `
  <div style="position: relative;">
      <div style="position: fixed; top: 0; left: 35;">
        <img src="data:image/png;base64,${rectangleImageBase64}" alt="Wemixt Logo" style="width: 150px; height: 200px;">
      </div>
      <div style="position: fixed; top: 0; right: 35;">
        
      </div>
      <div style="margin-left: 35px; margin-top: 220px;">
        <p>Hello ${data.to_name},</p>
        <br/>
        <p>You've received a new message from:</p>
        <p>Name: ${data.from_name}</p>
        <p>Gender: ${data.gender}</p>
        <p>Email: ${data.from_email}</p>
        <p>Contact No: ${data.contact_number}</p>
        <p>Address: ${data.address}</p>
        <br/>
        <p>Best wishes,</p>
        <p>Wemixt Team</p>
      </div>
    </div>
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
    debug: false,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
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
