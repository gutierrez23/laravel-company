<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use App\Http\Resources\CompanyResource;
use App\Models\Company;
use App\Traits\InteractsWithHttpResponse;
use Symfony\Component\HttpFoundation\Response;

class CompanyController extends Controller
{
    use InteractsWithHttpResponse;

    public function index()
    {
        try {
            $companies = Company::paginate(request()->input('limit', 10));
            return CompanyResource::collection($companies);
        } catch (\Exception $e) {
            return $this->error($e->getMessage()); 
        }
    }
    
    public function store(StoreCompanyRequest $request)
    {
        try {
            $company = Company::create($request->safe()->all());
            return response()->json([
                'code' => Response::HTTP_OK,
                'data' => CompanyResource::make($company)
            ]);
        } catch (\Exception $e) {
           return $this->error($e->getMessage());
        }
    }
}
