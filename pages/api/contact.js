import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).send({ message: "Invalid Input" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await MongoClient.connect(process.env.mongodb_url);
    } catch (err) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage,{writeConcern:{timeout:300}});
      newMessage._id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }
    client.close();
    res
      .status(201)
      .json({ message: "Successfully stored message!", value: newMessage });
  }
}
