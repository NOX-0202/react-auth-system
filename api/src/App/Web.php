<?php

namespace Source\App;
use Source\Models\User;

class Web
{

    public function login($data)
    {
        $email = filter_var($data["email"], FILTER_VALIDATE_EMAIL);
        $pass = filter_var($data["pass"], FILTER_DEFAULT);

        if (!$email || !$pass) {
            echo json_encode(["error" => true]);
            return;
        }

        $user = (new User())->find("email = :e", "e={$email}")->fetch();

        if (!$user || md5($pass) != $user->pass) {
            echo json_encode(["error" => true]);
            return;
        }

        $_SESSION["logged"] = true;

        echo json_encode(["ok" => true]);
    }

    public function logout()
    {

        unset($_SESSION["logged"]);
        echo json_encode(["ok" => true]);
    }

    public function error($data)
    {
        echo json_encode(["error" => $data["errcode"]]);
    }
}