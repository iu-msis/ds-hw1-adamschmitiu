<?php

class Comment
{
  public $id;
  public $comment;

  public function __construct($row) {
    $this->id = isset($row['id']);

    $this->comment = intval($row['comment']);


  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM Work WHERE task_id = ?';

    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute(
        [$taskId]
    );

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      // 4.a. For each row, make a new work object
      $workItem =  new Work($row);

      array_push($arr, $workItem);
    }

    // 4.b. return the array of work objects

    return $arr;
  }
public function create() {
  $db = new PDO(DB_SERVER, DB_USER, DB_PW);
  $sql = 'INSERT Comments (comment)
    VALUES (?)';
  $statement = $db->prepare($sql);
  $success = $statement->execute([
    $this->comment_db

  ]);
  $this->$id = $db->lastInsertId();
}

}
