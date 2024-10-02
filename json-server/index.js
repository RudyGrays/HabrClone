const fs = require("fs");
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
  await new Promise(res => {
    setTimeout(res, 800);
  });
  next();
});

server.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8"),
    );
    console.log(username, password);
    const { users = [] } = db;

    const userFromBd = users.find(
      user => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: "User not found" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.post("/profile", (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);

    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8"),
    );

    const { profiles = [] } = db;

    const profileFromBd = profiles.find(profile => profile.id === id);

    if (profileFromBd) {
      return res.json(profileFromBd);
    }

    return res.status(403).json("Profile not found");
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.post("/updateProfile", (req, res) => {
  try {
    const { id, profileData } = req.body;

    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8"),
    );
    console.log(profileData);

    const { profiles = [] } = db;

    const newProfiles = profiles.map(profile => {
      if (profile.id === id) {
        profile = {
          ...profile,
          ...profileData,
        };
      }
      return profile;
    });

    const profile = newProfiles.find(profile => profile.id == id);

    db.profiles = newProfiles;
    console.log(newProfiles);
    if (profile) {
      fs.writeFileSync(path.resolve(__dirname, "db.json"), JSON.stringify(db));
      return res.json(profile);
    }
    return res.status(403).json("Fail");
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "AUTH ERROR" });
  }

  next();
});

server.use(router);

server.listen(8000, () => {
  console.log("server is running on 8000 port");
});
