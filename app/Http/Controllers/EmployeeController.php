<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use App\Traits\InteractsWithHttpResponse;
use Symfony\Component\HttpFoundation\Response;

class EmployeeController extends Controller
{
    use InteractsWithHttpResponse;

    public function get()
    {
        try {
            $companies = Employee::whereNull('company_id')->get();
            return EmployeeResource::collection($companies);
        } catch (\Exception $e) {
            return $this->error($e->getMessage()); 
        }
    }
    
    public function store(StoreEmployeeRequest $request)
    {
        try {
            $employee = Employee::create($request->safe()->all());
            return response()->json([
                'code' => Response::HTTP_OK,
                'data' => EmployeeResource::make($employee)
            ]);
        } catch (\Exception $e) {
           return $this->error($e->getMessage());
        }
    }
}
