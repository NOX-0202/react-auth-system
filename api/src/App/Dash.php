<?php

namespace Source\App;
use Source\Models\User;

class Dash 
{

    public function insert($data)
    {
        $nome = filter_var($data["nome"], FILTER_SANITIZE_STRIPPED);
        $snome = filter_var($data["snome"], FILTER_SANITIZE_STRIPPED);
        $email = filter_var($data["email"], FILTER_VALIDATE_EMAIL);
        $tel = filter_var($data["tel"], FILTER_SANITIZE_STRIPPED);
        $pass = filter_var($data["pass"], FILTER_SANITIZE_STRIPPED);
        $nasc = filter_var($data["nasc"], FILTER_SANITIZE_STRIPPED);
        $cep = filter_var($data["cep"], FILTER_SANITIZE_STRIPPED);
        $obs = filter_var($data["obs"], FILTER_SANITIZE_STRIPPED);

        $user = new User();
        $user->nome = $nome; 
        $user->Snome = $snome; 
        $user->email = $email; 
        $user->tel = $tel; 
        $user->pass = md5($pass);
        $user->nasc = $nasc; 
        $user->cep = $cep; 
        $user->obs = $obs; 

        if ($user->save()) {
            echo json_encode(["ok" => true]); 
        } else {
            echo json_encode(["error" => true, "err"=>$user->fail()->getMessage()]); 
        }

    }

    public function read()
    {
        $users = [];

        $user_arr = (new User())->find()->fetch(true);
        if ($user_arr) {
            foreach ($user_arr as $user) {
                $users[] = $user->data();
            }
        }

        echo json_encode($users);
    }

    public function update($data)
    {
        var_dump($data);
        $id = filter_var($data["id"], FILTER_SANITIZE_STRIPPED);
        $nome = filter_var($data["nome"], FILTER_SANITIZE_STRIPPED);
        $snome = filter_var($data["snome"], FILTER_SANITIZE_STRIPPED);
        $email = filter_var($data["email"], FILTER_VALIDATE_EMAIL);
        $tel = filter_var($data["tel"], FILTER_SANITIZE_STRIPPED);
        $pass = filter_var($data["pass"], FILTER_SANITIZE_STRIPPED);
        $nasc = filter_var($data["nasc"], FILTER_SANITIZE_STRIPPED);
        $cep = filter_var($data["cep"], FILTER_SANITIZE_STRIPPED);
        $obs = filter_var($data["obs"], FILTER_SANITIZE_STRIPPED);

        $user = (new User)->findById($id);
        $user->nome = $nome; 
        $user->Snome = $snome; 
        $user->email = $email; 
        $user->tel = $tel; 
        $user->pass = md5($pass); 
        $user->nasc = $nasc; 
        $user->cep = $cep; 
        $user->obs = $obs; 

        if ($user->save()) {
            echo json_encode(["ok" => true]); 
        } else {
            echo json_encode(["error" => true, "err"=>$user->fail()->getMessage()]); 
        }


    }

    public function delete($data)
    {
        $id = filter_var($data["id"], FILTER_SANITIZE_STRIPPED);
        $user = (new User)->findById($id)->destroy();

        if ($user) {
            echo json_encode(["ok" => true]); 
        } else {
            echo json_encode(["error" => true, "err"=> $user]); 
        }
    }

}