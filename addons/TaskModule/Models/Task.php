<?php

namespace Addons\TaskModule\Models;

use Doctrine\DBAL\Types\Types;
use Laraddon\Bus\Model;
use Laraddon\Interfaces\Databases\Field;

class Task extends Model
{
    #[Field(Types::TEXT)]
    public string $description = '';

}