<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
// use App\Models\Products;
use Illuminate\Http\Request;

class CartController extends Controller
{
    // public function addtocart(Request $request)
    // {
    //     $user_id = auth('sanctum')->user()->id;
    //     $product_id = $request->product_id;
    //     $product_qty = $request->product_qty;

    //     $productCheck = Products::where('id',$product_id)->first();
    //     if($productCheck){
    //         return response()->json([
    //             'status'=>201,
    //             'message'=>'Successfully Add to Cart',
    //         ]);
    //     }else{
    //         return response()->json([
    //             'status'=>404,
    //             'message'=>'Product Not Found',
    //         ]);
    //     }
    // }
}
