<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductsCollection;
use Inertia\Inertia;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = new ProductsCollection(Products::OrderByDesc('id')->paginate(9));
        return Inertia::render('Homepage',[
            "title"=>"Homepage",
            "products"=>$products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $products = new Products();
        $products->name = $request->name;
        $products->price = $request->price;
        $products->stock = $request->stock;
        $products->save();
        return redirect()->back()->with('message','Product succesfully added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function show(Products $products)
    {
        $showAllProducts = DB::table('products')->orderBy('id', 'desc')->get();
        return Inertia::render('Dashboard',["showAllProducts" => $showAllProducts,]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function edit(Products $products, Request $request)
    {
        return Inertia::render("EditProducts", [
            'myProducts' => $products->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Products::where('id',$request->id)->update([
            "name"=>$request->name,
            "price"=>$request->price,
            "stock"=>$request->stock,
        ]);
        return to_route("dashboard");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Products  $products
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $product = Products::find($request->id);
        $product->delete();
        return redirect()->back()->with('message','Product succesfully deleted');
    }
}
