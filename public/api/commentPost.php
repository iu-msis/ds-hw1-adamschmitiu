<?php

$comment = new Work($_POST);

$comment->create();

echo json_encode($comment);
