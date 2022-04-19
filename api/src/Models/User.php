<?php

namespace Source\Models;

use CoffeeCode\DataLayer\DataLayer;
use Exception;

/**
 * User
 */
class User extends DataLayer
{
     /**
      * __construct
      *
      * @return void
      */
     function __construct() {
        parent::__construct("crud_test_intern", [
            "nome",
            "Snome",
            "email",
            "tel",
            "pass",
            "nasc",
            "cep",
            "obs"
        ], "id", false);
    }

}