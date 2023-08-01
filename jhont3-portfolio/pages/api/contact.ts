import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from '../../config/nodemailer';

const handler = async (req: NextApiRequest, res: any) => {

  if (req.method === "POST") {
    const data = req.body;

    if (!data || !data.name || !data.email || !data.message) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {

      await transporter.sendMail({
        ...mailOptions,
        subject: data.name,
        text: `${data.name}, ${data.message}, ${data.email}`,
        html: `<h1>${data.name}</h1><p>${data.email}, ${data.message}</p>`
      });
      return res.status(200).json({ success: true });

    } catch (err: any) {

      console.log(err);
      return res.status(400).json({ message: err.message });

    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
