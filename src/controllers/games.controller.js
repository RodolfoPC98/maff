import { pool } from "../database.js";

export const renderAddGame = (req, res) => res.render("games/add");

export const addGame = async (req, res) => {
  const { name, description } = req.body;
  await pool.query("INSERT INTO games set ?", [
    {
      name,
      description,
      id_user: req.user.id,
    },
  ]);
  await req.setFlash("success", "Game Saved Successfully");
  res.redirect("/games");
};

export const renderGames = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM games WHERE id_user = ?", [
    req.user.id,
  ]);
  res.render("games/list", { games: rows });
};

export const deleteGame = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM games WHERE ID = ?", [id]);
  await req.setFlash("success", `Game ${id} Removed Successfully`);
  return res.redirect("/games");
};

export const renderEditGame = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query("SELECT * FROM games WHERE id = ?", [id]);
  res.render("games/edit", { game: rows[0] });
};

export const editGame = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const newGame = {
    name,
    description,
  };
  await pool.query("UPDATE games set ? WHERE id = ?", [newGame, id]);
  await req.setFlash("success", "Game Updated Successfully");
  res.redirect("/games");
};
