import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../services/ProductService";

export const fetchAllProducts = createAsyncThunk("fetchAllProducts", async () => {
    return await getProducts();
})
export const productsSlice = createSlice({
    name: "product",
    initialState: {
        productList: [],
        searchedProduct:[],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.productList=action.payload
            state.searchedProduct=action.payload
            // console.log(state.productList[0])



        });
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.productList = action.payload;
        });
    },
    reducers:{
        searchProduct:(state,action)=>{
            state.searchedProduct=state.productList.filter((product) => {
                // Convert all property values to lowercase for case-insensitive comparison
                const lowerCaseProperties = Object.values(product).map(value => String(value).toLowerCase());
          
                // Check if any property value contains the substring
                return lowerCaseProperties.some(property => property.includes(action.payload.toLowerCase()));
              });

        }
    }
})

export const{searchProduct}= productsSlice.actions
export default productsSlice.reducer