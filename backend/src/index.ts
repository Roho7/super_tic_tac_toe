import express, { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "supertictactoe",
});

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  const q = "SELECT * FROM game_log;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// User Auth

// * REGISTER ============ REGISTER ================= REGISTER ===========

app.post("/register", async (req: Request, res: Response) => {
  try {
    // Get username
    var username = req.body.username;

    // Generate hashed password
    var salt = await bcrypt.genSalt(10);
    var passhash = await bcrypt.hash(req.body.password, salt);

    // Insert into Database
    const q =
      "INSERT INTO `supertictactoe`.`users` (`username`, `password`) VALUES (?);";

    const values = [username, passhash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch {
    res.status(500).send();
  }
});

// * LOGIN ========= LOGIN ============= LOGIN ===========

app.post("/login", async (req: Request, res: Response) => {
  try {
    // Get username
    var username = req.body.username;

    // Search into Database
    const q =
      "SELECT password FROM `supertictactoe`.`users` WHERE (`username`) VALUES (?);";

    const values = [username];

    const password = db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      console.log(data);
      return res.json(data);
    });
  } catch {
    res.status(500).send();
  }
});

app.post("/play", async (req: Request, res: Response) => {
  try {
    var board = req.body.board;
    var winner = req.body.winner;

    console.log(board, winner);

    const q = "INSERT INTO game_log VALUES(?)";

    const values = [board, winner];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      console.log(data);
      return res.json(data);
    });
  } catch {
    res.status(500).send();
  }
});

app.listen(8000, () => {
  console.log("Connected");
});
