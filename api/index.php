<?php

ob_start();
session_start();

require_once __DIR__ . "/vendor/autoload.php";

use CoffeeCode\Router\Router;

$router = new Router(SITE);
$router->namespace('Source\App');

/*
 * WEB
 */
$router->group(null);

$router->post("/login", "Web:login", "Web.login");
$router->post("/logout", "Web:logout", "Web.logout");
$router->get("/error/{errcode}", "Web:error", "Web.error");


$router->post("/insert", "Dash:insert", "Dash.insert");
$router->get("/read", "Dash:read", "Dash.read");
$router->post("/update", "Dash:update", "Dash.update");
$router->post("/delete/{id}", "Dash:delete", "Dash.delete");

// executins routes
$router->dispatch();

if ($router->error()){
    $router->redirect("Controller:error", ["errcode" => $router->error()]);
} 

ob_end_flush();