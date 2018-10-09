<?php

require '../../app/common.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'commentPost.php';
  exit;
}

$taskId = intval($_GET['taskId']);

if ($taskId < 1) {
  throw new Exception('Invalid Task ID');
}


// 1. Go to the database and get all work associated with the $taskId
// $comments = Comment::fetchAll()
//$commentArr = Comment::fetchAll();
$commentArr = Comment::getWorkByTaskId($taskId);
// 2. Convert to JSON
$json = json_encode($commentArr, JSON_PRETTY_PRINT);

// 3. Print
header('Content-Type: application/json');
echo $json;
