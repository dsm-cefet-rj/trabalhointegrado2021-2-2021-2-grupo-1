// const express = require("express");
// const router = express.Router();

// const chat = require("../models/chat");

// router.route("/")
//   .get(async (req, res, next) => {
//     try {
//       const chat = await chat.find({});
//       res.setHeader("Content-Type", "application/json");
//       res.statusCode = 200;
//       res.json(chat);
//     } catch (err) {
//       res.status(400).send({ error: err });
//       next(err);
//     }
//   })
//   .post(async (req, res, next) => {
//     try {
//       const chat = await chat.create(req.body);
//       res.setHeader("Content-Type", "application/json");
//       res.statusCode = 200;
//       res.json(chat);
//     } catch (err) {
//       res.status(406).send({ error: err });
//       next(err);
//     }
//   })

// router.route("/:id")
//   .delete(async (req, res, next) => {
//     try {
//       await chat.deleteOne({ _id: req.params.id }, req.body);
//       res.setHeader("Content-Type", "application/json");
//       res.statusCode = 200;
//       res.json(req.body);
//     } catch (err) {
//       res.status(406).send({ error: err });
//       next(err);
//     }
//   })
//   .put(async (req, res, next) => {
//     try {
//       await chat.updateOne({ _id: req.params.id }, req.body);
//       res.setHeader("Content-Type", "application/json");
//       res.statusCode = 200;
//       res.json(req.body);
//     } catch (err) {
//       res.status(406).send({ error: err });
//       next(err);
//     }
//   })

// module.exports = router;
