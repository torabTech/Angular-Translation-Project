const mongoose = require("mongoose");
const Game = mongoose.model("Game");

const getAll = function (req, res) {
  let offset = 0;
  let count = 8;

  if (req.query && req.query.offset) offset = parseInt(req.query.offset);
  if (req.query && req.query.count) count = parseInt(req.query.count);

  //console.log(`${offset} -- ${count}`);

  Game.find()
    .skip(offset)
    .limit(count)
    .exec(function (err, data) {
      if (err) {
        res.status(500).json(err.message);
        return;
      }

      res.status(200).json(data);
    });
};

const getOne = function (req, res) {
  const checkID = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!checkID) {
    res.status(400).json({ message: "invalid ID has been provided" });
    return;
  }

  Game.findById(req.params.id).exec(function (err, data) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }

    if (!data) {
      res.status(404).json({ message: "Document Not Found!.." });
      return;
    }
    res.status(200).json(data);
  });
};

const addOne = function (req, res) {
  //check body
  if (Object.keys(req.body).length == 0) {
    res.status(400).json({ message: "body not provided" });
    return;
  }

  const data = {
    title: req.body.title,
    year: req.body.year,
    price: parseInt(req.body.price),
    maxPlayers: req.body.maxPlayers,
  };

  console.log(req.body);

  Game.create(data, function (err, result) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }

    res.status(201).json({ message: "Game has been successfully inserted!" });
  });
};




const deleteOne = function (req, res) {
  const checkID = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!checkID) {
    res.status(400).json({ message: "Invalid ID ... " });
    return;
  }

  Game.findByIdAndDelete(req.params.id, function (err, result) {
    if (err) {
      res.status(500).json(err.message);
      return;
    }

    if (!result) {
      res.status(404).json({ message: "document not found" });
      return;
    }
    res.status(200).json({ message: "document successfully deleted" });
  });
};

const updateOne = function (req, res) {
  const checkID = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!checkID) {
    res.status(400).json({ message: "Invalid ID ... " });
    return;
  }

  if (Object.keys(req.body).length == 0) {
    res.status(400).json({ message: "body is empty!" });
    return;
  }

  Game.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        year: req.body.year,
        price: parseInt(req.body.price),
        maxPlayers: req.body.maxPlayers,
      },
    },
    function (err) {
      if (err) {
        res.status(500).json(err.message);
        return;
      }
      res.status(200).json({ message: "document successfully updated." });
    }
  );
};

module.exports = {
  getAll: getAll,
  getOne: getOne,
  addOne: addOne,
  deleteOne: deleteOne,
  updateOne: updateOne,
};
