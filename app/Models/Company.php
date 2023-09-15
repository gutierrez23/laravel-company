<?php

namespace App\Models;

use App\Http\Filters\CompanyFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class Company extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at'];

    public function scopeFilter(Builder $query, CompanyFilter $filter): Builder
    {
        return $filter->apply($query);
    }

    public function employees(){
        return $this->hasMany(Employee::class);
    }
}
