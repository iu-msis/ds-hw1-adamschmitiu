<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'commentPost.php';
  exit;
}



// 1. Go to the database and get all work associated with the $taskId
// $comments = Comment::fetchAll()
//$commentArr = Comment::fetchAll();
$commentArr = Comment::getWorkByTaskId();
// 2. Convert to JSON
$json = json_encode($commentArr, JSON_PRETTY_PRINT);

// 3. Print
header('Content-Type: application/json');
echo $json;
