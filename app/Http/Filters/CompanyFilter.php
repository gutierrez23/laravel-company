<?php

namespace App\Http\Filters;

use Illuminate\Database\Eloquent\Builder;

class CompanyFilter extends Filters
{

    /**
     * Registered filters to operate break.
     *
     * @var array
     */
    protected $filters = ['query', 'columns', 'include'];

    /**
     * Filters CompanyLocation.
     *
     * @param string $value
     * @return Builder
     */
    protected function query(string $value): Builder
    {
        return $this->builder->where('name', 'like', "%{$value}%")
                    ->orWhere('email', 'like', "%{$value}%");
    }

    /**
     * @param string $value
     * @return Builder
     */
    protected function include(string $value): Builder
    {
        return $this->builder->with(explode(',', $value));
    }

    /**
     * @param string $value
     * @return Builder
     */
    protected function columns(string $value = "*"): Builder
    {
        return $this->builder->select(explode(',', $value));
    }
}
